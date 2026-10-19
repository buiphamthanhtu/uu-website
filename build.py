#!/usr/bin/env python3
"""Build blog: sinh HTML từ posts/*.md theo template, cập nhật blog.html + index.html.

Chạy:  python3 build.py
Cần:   pip install markdown pyyaml

Quy ước trong Markdown:
  - Ảnh:        ![mô tả|400](assets/hinh.png)   → <figure><img class="fig-400" ...>
                các cỡ: 200 400 500 600 800 full (mặc định full nếu không ghi)
  - Tóm tắt:    :::summary Tiêu đề box
                nội dung...
                :::
  - HTML thô (info-table...) được giữ nguyên.
"""
import json
import re
import sys
from pathlib import Path

import markdown
import yaml

ROOT = Path(__file__).parent
POSTS = ROOT / "posts"
TEMPLATES = ROOT / "templates"

FIG_SIZES = {"200", "400", "500", "600", "800", "full"}
BASE_URL = "https://uucreative.co"


def parse_post(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not m:
        sys.exit(f"LỖI: {path.name} thiếu front-matter (--- ... ---)")
    meta = yaml.safe_load(m.group(1))
    meta["slug"] = path.stem
    meta["url"] = f"blog-{path.stem}.html"
    if meta.get("draft"):
        return meta, m.group(2)  # bản nháp chưa cần đủ trường, portal cho lưu dở
    for field in ("title", "episode", "date", "cover"):
        if field not in meta:
            sys.exit(f"LỖI: {path.name} thiếu trường '{field}'")
    return meta, m.group(2)


def render_body(md_text):
    # Tách các block :::summary ra trước, thay bằng placeholder
    boxes = []

    def stash(match):
        boxes.append((match.group(1).strip(), match.group(2).strip()))
        return f"\n\nUUBOX{len(boxes) - 1}MARKER\n\n"

    md_text = re.sub(r":::summary[ \t]*(.*)\n(.*?)\n:::", stash, md_text, flags=re.DOTALL)

    html = markdown.markdown(md_text)

    # Ảnh -> figure với class fig-*
    def to_figure(match):
        alt, size, src = match.group(1), match.group(2), match.group(3)
        size = size or "full"
        if size not in FIG_SIZES:
            size = "full"
        return (f'<figure><img class="fig-{size}" src="{src}" alt="{alt}"></figure>')

    html = re.sub(
        r'<p><img alt="([^"|]*)\|?(\w*)" src="([^"]+)"\s*/?></p>',
        to_figure,
        html,
    )

    # Trả các summary-box về chỗ cũ
    for i, (title, body) in enumerate(boxes):
        box_html = (
            '<div class="summary-box">\n'
            f"  <strong>{title}</strong>\n"
            f"  {markdown.markdown(body)}\n"
            "</div>"
        )
        html = html.replace(f"<p>UUBOX{i}MARKER</p>", box_html)

    return html


def cap(s):
    return s[:1].upper() + s[1:] if s else s


def cover_link(post, indent="        "):
    # Overlay hover: "Giao tiếp - Hồi 1" + dòng series
    plain_title = post["title"].strip("“”\"'")
    label = f'{cap(plain_title)} - {cap(post["episode"])}'
    series = cap(post.get("series", ""))
    return (
        f'{indent}<a class="cover" href="{post["url"]}">\n'
        f'{indent}  <img src="{post["cover"]}" alt="{post.get("cover_alt", "")}">\n'
        f'{indent}  <span class="cover__overlay">\n'
        f'{indent}    <strong class="text-heading-sm">{label}</strong>\n'
        f'{indent}    <span class="text-caption">{series}</span>\n'
        f"{indent}  </span>\n"
        f"{indent}</a>"
    )


ORG = {
    "@type": "Organization",
    "name": "ÚÙ Creative Studio",
    "alternateName": "UU Creative Studio",
    "url": BASE_URL,
    "logo": f"{BASE_URL}/assets/logo.png",
}

# Mô tả các file tài liệu UU DS cho llms.txt; file mới chưa có mô tả vẫn được liệt kê
UU_DOC_NOTES = {
    "design-system.md": "spec đầy đủ: token, màu, typography, spacing, state layer và từng component đã chốt",
    "tokens.css": "CSS custom properties, brand mode, recipe state layer, text style",
    "tokens.json": "toàn bộ token dạng máy đọc (DTCG), dùng sinh sang iOS/Android",
    "tailwind.js": "theme Tailwind trỏ về CSS var",
    "icons.md": "luật dùng bộ UU icon",
    "uu-icon-index.json": "100 tên icon công khai và kiểu có sẵn",
}


def html_attr(s):
    return str(s).replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;")


def seo_headline(post):
    """Tiêu đề cho Google/AI: seo_title nếu có, không thì ghép tiêu đề + hồi."""
    return str(post.get("seo_title") or f'{post["title"]} — {post["episode"]}').strip()


def post_jsonld(post, headline, description):
    data = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": headline,
        "description": description,
        "image": f"{BASE_URL}/{post['cover']}",
        "datePublished": str(post["date"]),
        "inLanguage": "vi",
        "url": f"{BASE_URL}/{post['url']}",
        "mainEntityOfPage": f"{BASE_URL}/{post['url']}",
        "author": ORG,
        "publisher": ORG,
    }
    if post.get("series"):
        data["isPartOf"] = {"@type": "CreativeWorkSeries", "name": post["series"]}
    return json.dumps(data, ensure_ascii=False).replace("</", "<\\/")


def md_for_ai(body):
    """Đổi cú pháp riêng của blog (ảnh có cỡ, :::summary, bảng info-table HTML) sang Markdown chuẩn."""
    body = re.sub(r"!\[([^\]|]*)\|?\w*\]\(([^)\s]+)\)",
                  lambda m: f"![{m.group(1)}]({m.group(2) if m.group(2).startswith('http') else BASE_URL + '/' + m.group(2)})", body)
    body = re.sub(r":::summary[ \t]*(.*)\n(.*?)\n:::",
                  lambda m: f"> **{m.group(1).strip() or 'Tóm tắt'}:** {m.group(2).strip()}", body, flags=re.DOTALL)

    def table(m):
        rows = []
        for row in re.findall(r'<div class="row">(.*?)</div>', m.group(0), flags=re.DOTALL):
            key = re.search(r"<strong>(.*?)</strong>", row, flags=re.DOTALL)
            vals = re.findall(r"<li>(.*?)</li>", row, flags=re.DOTALL) or re.findall(r"<p>(.*?)</p>", row, flags=re.DOTALL)
            rows.append(f"- **{key.group(1).strip() if key else ''}:** {'; '.join(v.strip() for v in vals)}")
        return "\n".join(rows)

    body = re.sub(r'<div class="info-table">.*?(?=\n[ \t]*\n|\Z)', table, body, flags=re.DOTALL)
    return re.sub(r"[ \t]+\n", "\n", body).strip()


def write_llms(posts, uu_docs):
    """llms.txt = mục lục cho AI (llmstxt.org); llms-full.txt = toàn văn blog dạng Markdown."""
    lines = [
        "# ÚÙ Creative Studio",
        "",
        "> Design studio ở Việt Nam (uucreative.co): product design, research, brand visual. "
        "Website có blog tiếng Việt về nghề Product Designer và UU Design System — design system của studio.",
        "",
        "## Blog (tiếng Việt)",
        "",
    ]
    for p in posts:
        lines.append(f"- [{p['headline']}]({BASE_URL}/{p['url']}): {p['meta_description']}")
    if uu_docs:
        lines += ["", "## UU Design System", "",
                  f"- [Giới thiệu UU Design System]({BASE_URL}/design-system/): UU DS là gì, kiến trúc token, danh mục component, nền tảng hỗ trợ",
                  f"- [Storybook UU DS]({BASE_URL}/uu-ds/): tài liệu cho người đọc (cần JavaScript)",
                  f"- [Mục lục UU DS cho AI]({BASE_URL}/uu-ds/llms.txt): thứ tự đọc và sáu ràng buộc khi dựng UI"]
        for name in uu_docs:
            note = UU_DOC_NOTES.get(name, "tài liệu UU DS")
            lines.append(f"- [{name}]({BASE_URL}/uu-ds/docs/{name}): {note}")
    lines += ["", "## Optional", "", f"- [Toàn văn blog]({BASE_URL}/llms-full.txt): mọi bài đã đăng, dạng Markdown", ""]
    (ROOT / "llms.txt").write_text("\n".join(lines), encoding="utf-8")

    full = ["# ÚÙ Creative Studio — toàn văn blog", "",
            f"> Nguồn: {BASE_URL}/blog.html · tiếng Việt · tác giả: ÚÙ Creative Studio", ""]
    for p in posts:
        _, body = parse_post(POSTS / f"{p['slug']}.md")
        full += [f"## {p['headline']}", "", f"URL: {BASE_URL}/{p['url']}  ", f"Ngày đăng: {p['date']}", "",
                 md_for_ai(body), ""]
        if p.get("next_note"):
            full += [p["next_note"], ""]
    (ROOT / "llms-full.txt").write_text("\n".join(full), encoding="utf-8")


def write_ds_landing():
    """Danh mục component + cây quyết định trên /design-system/, sinh từ uu-ds/index.json
    để chỉ liệt kê đúng những trang Storybook đang có."""
    page, index = ROOT / "design-system" / "index.html", ROOT / "uu-ds" / "index.json"
    if not page.exists() or not index.exists():
        return False
    docs = [e for e in json.loads(index.read_text(encoding="utf-8"))["entries"].values() if e["type"] == "docs"]
    link = lambda e: f'../uu-ds/?path=/docs/{e["id"]}'
    groups = {}
    for e in docs:
        parts = e["title"].split("/")
        if len(parts) == 3 and parts[0] == "Component":
            groups.setdefault(parts[1], []).append(e)
    cards = []
    for name, items in groups.items():
        lis = "\n".join(f'          <li><a href="{link(e)}">{e["title"].split("/")[-1]}</a></li>' for e in items)
        cards.append(
            f'        <article class="ds-card ds-group ds-reveal" data-delay="{len(cards) % 3 + 1}">\n'
            f'          <div class="ds-group__head"><h3 class="text-heading-sm">{name}</h3>'
            f'<span class="uu-badge uu-badge--neutral">{len(items)}</span></div>\n'
            f'          <ul class="ds-links">\n{lis}\n          </ul>\n'
            "        </article>")
    trees = [e for e in docs if e["title"].startswith("Nền tảng/Cây quyết định/")]
    tree_lis = [f'          <li><a href="{link(e)}"><svg class="uu-icon" aria-hidden="true"><use href="../assets/icons.svg#chevron-right"/></svg>'
                f'{e["title"].split("/")[-1]}</a></li>' for e in trees]
    # Dải tên chạy ngang: lặp 2 lần để trượt -50% là vòng lại liền mạch
    names = [e["title"].split("/")[-1] for items in groups.values() for e in items]
    marquee = "\n".join(f"        <span>{n}</span>" for n in names * 2)
    html = page.read_text(encoding="utf-8")
    for marker, block in (("ds-catalog", "\n".join(cards)), ("ds-trees", "\n".join(tree_lis)), ("ds-marquee", marquee)):
        html, n = re.subn(rf"(<!-- build:{marker} -->).*?([ \t]*<!-- /build:{marker} -->)",
                          lambda m: m.group(1) + "\n" + block + "\n" + m.group(2), html, flags=re.DOTALL)
        if n == 0:
            sys.exit(f"LỖI: design-system/index.html thiếu marker <!-- build:{marker} -->")
    page.write_text(html, encoding="utf-8")
    print(f"  ✓ design-system/index.html ({sum(len(v) for v in groups.values())} component · {len(groups)} nhóm · {len(trees)} cây quyết định)")
    return True


def main():
    posts = []
    for path in sorted(POSTS.glob("*.md")):
        meta, body = parse_post(path)
        if meta.get("draft"):
            print(f"  (bỏ qua bản nháp: {path.name})")
            continue
        meta["body_html"] = render_body(body)
        posts.append(meta)

    if not posts:
        sys.exit("LỖI: không có bài viết nào trong posts/")

    posts.sort(key=lambda p: str(p["date"]), reverse=True)

    post_tpl = (TEMPLATES / "post.html").read_text(encoding="utf-8")
    blog_tpl = (TEMPLATES / "blog.html").read_text(encoding="utf-8")

    # Từng trang bài viết
    for post in posts:
        others = [p for p in posts if p is not post][:2]
        related = "\n".join(cover_link(p) for p in others)
        content = post["body_html"]
        if post.get("next_note"):
            content += f'\n<p class="next-note">{post["next_note"]}</p>'
        series = post.get("series", "")
        headline = seo_headline(post)
        title_tag = f"{headline} | ÚÙ Creative Studio"
        description = post.get(
            "description", f'{series}: {post["title"]} — {post["episode"]}'
        )
        post["headline"], post["meta_description"] = headline, description
        html = (
            post_tpl.replace("{{DESCRIPTION}}", html_attr(description))
            .replace("{{TITLE_TAG}}", html_attr(title_tag))
            .replace("{{JSONLD}}", post_jsonld(post, headline, description))
            .replace("{{PAGE_URL}}", f"{BASE_URL}/{post['url']}")
            .replace("{{OG_IMAGE}}", f"{BASE_URL}/{post['cover']}")
            .replace("{{SERIES}}", series)
            .replace("{{TITLE}}", post["title"])
            .replace("{{EPISODE}}", post["episode"])
            .replace("{{CONTENT}}", content)
            .replace("{{RELATED}}", related)
        )
        out = ROOT / post["url"]
        out.write_text(html, encoding="utf-8")
        print(f"  ✓ {out.name}")

    # Gỡ trang của bài đã chuyển về nháp hoặc đã xoá khỏi posts/
    published = {p["url"] for p in posts}
    for stale in ROOT.glob("blog-*.html"):
        if stale.name not in published:
            stale.unlink()
            print(f"  ✗ gỡ {stale.name} (không còn bài đăng tương ứng)")

    # Trang danh sách blog
    covers ="\n".join(cover_link(p, indent="      ") for p in posts)
    (ROOT / "blog.html").write_text(
        blog_tpl.replace("{{COVERS}}", covers), encoding="utf-8"
    )
    print("  ✓ blog.html")

    # 3 cover mới nhất trên trang chủ (giữa 2 marker)
    index_path = ROOT / "index.html"
    index_html = index_path.read_text(encoding="utf-8")
    latest = "\n".join(cover_link(p, indent="      ") for p in posts[:3])
    new_index, n = re.subn(
        r"(<!-- build:covers -->).*?([ \t]*<!-- /build:covers -->)",
        lambda m: m.group(1) + "\n" + latest + "\n" + m.group(2),
        index_html,
        flags=re.DOTALL,
    )
    if n == 0:
        sys.exit("LỖI: index.html thiếu marker <!-- build:covers -->")
    index_path.write_text(new_index, encoding="utf-8")
    print("  ✓ index.html (covers)")

    # Tài liệu UU DS do Storybook deploy vào uu-ds/ — chỉ liệt kê file thật sự có trong repo
    uu_docs = sorted(p.name for p in (ROOT / "uu-ds" / "docs").glob("*")) if (ROOT / "uu-ds" / "docs").is_dir() else []
    uu_index = ROOT / "uu-ds" / "index.html"
    uu_indexable = uu_index.exists() and "noindex" not in uu_index.read_text(encoding="utf-8")

    has_landing = write_ds_landing()
    write_llms(posts, uu_docs)
    print("  ✓ llms.txt, llms-full.txt")

    # Sitemap cho Google Search Console / Bing
    latest_date = str(posts[0]["date"])
    urls = [("", latest_date), ("blog.html", latest_date)] + [
        (p["url"], str(p["date"])) for p in posts
    ]
    if has_landing:
        urls.append(("design-system/", None))
    if uu_indexable:
        urls.append(("uu-ds/", None))
    urls += [(f"uu-ds/docs/{name}", None) for name in uu_docs if name.endswith(".md")]
    entries = "\n".join(
        f"  <url><loc>{BASE_URL}/{path}</loc>{f'<lastmod>{date}</lastmod>' if date else ''}</url>"
        for path, date in urls
    )
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{entries}\n</urlset>\n",
        encoding="utf-8",
    )
    print("  ✓ sitemap.xml")
    print(f"Xong! {len(posts)} bài.")


if __name__ == "__main__":
    main()
