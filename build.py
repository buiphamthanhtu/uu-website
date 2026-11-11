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
import posixpath
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
    "uu-icon-index.json": "tên icon công khai và kiểu có sẵn",
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
        "Website có blog tiếng Việt về nghề Product Designer và UU Design system — design system của studio.",
        "",
        "## Blog (tiếng Việt)",
        "",
    ]
    for p in posts:
        lines.append(f"- [{p['headline']}]({BASE_URL}/{p['url']}): {p['meta_description']}")
    if uu_docs:
        lines += ["", "## ÚÙ Design system", "",
                  f"- [Giới thiệu ÚÙ Design system]({BASE_URL}/design-system/): UU DS là gì, kiến trúc token, danh mục component, nền tảng hỗ trợ",
                  f"- [Storybook UU DS]({BASE_URL}/uu-ds/): tài liệu cho người đọc (cần JavaScript)",
                  f"- [Mục lục UU DS cho AI]({BASE_URL}/uu-ds/llms.txt): thứ tự đọc và sáu ràng buộc khi dựng UI",
                  "- [File Figma UU Design system](https://www.figma.com/community/file/1701990688423474087/uu-design-system): thư viện Figma Community, component và variable theo spec; lệch thì spec thắng"]
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
    # "Screens" là mẫu màn, không tính vào số component của nhóm (tổng các nhóm = số component trên landing)
    TEMPLATES = {"Screens": "Screens (mẫu màn)"}
    for name, items in groups.items():
        lis = "\n".join(f'          <li><a href="{link(e)}">{TEMPLATES.get(e["title"].split("/")[-1], e["title"].split("/")[-1])}</a></li>' for e in items)
        count = sum(1 for e in items if e["title"].split("/")[-1] not in TEMPLATES)
        cards.append(
            f'        <article class="ds-card ds-group ds-reveal" data-delay="{len(cards) % 3 + 1}">\n'
            f'          <div class="ds-group__head"><h3 class="text-heading-sm">{name}</h3>'
            f'<span class="uu-badge uu-badge--neutral"><svg class="uu-icon uu-badge__icon" aria-hidden="true"><use href="../assets/icons.svg#circle-info-fill"/></svg>{count}</span></div>\n'
            f'          <ul class="ds-links">\n{lis}\n          </ul>\n'
            "        </article>")
    trees = [e for e in docs if e["title"].startswith("Nền tảng/Cây quyết định/")]
    tree_lis = [f'          <li><a href="{link(e)}"><svg class="uu-icon" aria-hidden="true"><use href="../assets/icons.svg#chevron-right"/></svg>'
                f'{e["title"].split("/")[-1]}</a></li>' for e in trees]
    html = page.read_text(encoding="utf-8")
    for marker, block in (("ds-catalog", "\n".join(cards)), ("ds-trees", "\n".join(tree_lis))):
        html, n = re.subn(rf"(<!-- build:{marker} -->).*?([ \t]*<!-- /build:{marker} -->)",
                          lambda m: m.group(1) + "\n" + block + "\n" + m.group(2), html, flags=re.DOTALL)
        if n == 0:
            sys.exit(f"LỖI: design-system/index.html thiếu marker <!-- build:{marker} -->")
    page.write_text(html, encoding="utf-8")
    print(f"  ✓ design-system/index.html ({sum(len(v) for v in groups.values())} component · {len(groups)} nhóm · {len(trees)} cây quyết định)")
    return True


# ---------- Bản tiếng Anh (/en/) ----------
# Trang tiếng Việt là bản gốc; bản tiếng Anh sinh lại mỗi lần build bằng từ điển i18n/en.json
# (khoá = chuỗi tiếng Việt đúng như trong HTML). Chuỗi chưa dịch giữ nguyên và được in cảnh báo.
EN_PAGES = {"/": "index.html", "/blog.html": "blog.html", "/design-system/": "design-system/index.html"}
VI_CHARS = re.compile(r"[ăâđêôơưạảãàáầấậẩẫằắặẳẵèéẹẻẽềếệểễìíịỉĩòóọỏõồốộổỗờớợởỡùúụủũừứựửữỳýỵỷỹ]", re.I)
SKIP_URL = re.compile(r"^(?:[a-z][a-z0-9+.-]*:|//|/|#)", re.I)


def page_dir(url_path):
    if url_path.endswith("/"):
        return url_path
    d = posixpath.dirname(url_path)
    return d if d.endswith("/") else d + "/"


def rel_url(from_page, dest):
    """URL tương đối từ trang from_page tới dest (cả hai là đường dẫn tuyệt đối trên site)."""
    base = page_dir(from_page)
    if dest.endswith("/"):
        r = posixpath.relpath(dest.rstrip("/") or "/", base.rstrip("/") or "/")
        return "./" if r == "." else r + "/"
    return posixpath.relpath(dest, base.rstrip("/") or "/")


def en_url(url, vi_page):
    """Đổi một URL tương đối trên trang tiếng Việt thành URL đúng trên bản /en/:
    trang có bản tiếng Anh thì trỏ sang bản /en/, còn lại (ảnh, bài viết, Storybook…) trỏ về chỗ cũ."""
    if not url or SKIP_URL.match(url) or "{{" in url:
        return url
    path, sep, tail = re.match(r"([^?#]*)([?#]?)(.*)", url).groups()
    target = posixpath.normpath(posixpath.join(page_dir(vi_page), path or "."))
    if path == "" or path.endswith("/") or path in (".", "./") or target == "/":
        target = target.rstrip("/") + "/"
    target = {"/index.html": "/", "/design-system/index.html": "/design-system/"}.get(target, target)
    dest = "/en" + target if target in EN_PAGES else target
    return rel_url("/en" + vi_page, dest) + sep + tail


def translate_html(html, words, missing):
    def text(m):
        raw = m.group(1)
        key = raw.strip()
        if key in words:
            return ">" + raw.replace(key, words[key]) + "<"
        if VI_CHARS.search(key):
            missing.add(key)
        return m.group(0)

    def attr(m):
        val = m.group(2)
        if val in words:
            return f'{m.group(1)}="{words[val]}"'
        if VI_CHARS.search(val):
            missing.add(val)
        return m.group(0)

    parts = re.split(r"(<script[\s\S]*?</script>|<style[\s\S]*?</style>|<pre[\s\S]*?</pre>)", html)
    for i in range(0, len(parts), 2):
        part = re.sub(r">([^<]+)<", text, parts[i])
        parts[i] = re.sub(r'\b(aria-label|alt|title|content|placeholder)="([^"]*)"', attr, part)
    return "".join(parts)


def write_en_pages():
    data = json.loads((ROOT / "i18n" / "en.json").read_text(encoding="utf-8"))
    sets = {"/": ["common", "home"], "/blog.html": ["common", "blog"],
            "/design-system/": ["common", "design-system", "ds-groups", "ds-trees"]}
    for vi_page, src in EN_PAGES.items():
        path = ROOT / src
        if not path.exists():
            continue
        words = {}
        for k in sets[vi_page]:
            words.update(data.get(k, {}))
        html = path.read_text(encoding="utf-8")
        missing = set()
        # bài viết chỉ có tiếng Việt: tên bài trên thẻ cover giữ nguyên, không cần báo
        keep = set(data.get("_keep", []))
        for cover in re.findall(r'<a class="cover"[\s\S]*?</a>', html):
            keep.update(t.strip() for t in re.findall(r">([^<]+)<", cover))
            keep.update(re.findall(r'alt="([^"]*)"', cover))
        html = translate_html(html, words, missing)
        html = re.sub(r'\b(href|src)="([^"]*)"', lambda m: f'{m.group(1)}="{en_url(m.group(2), vi_page)}"', html)
        # nút đổi ngôn ngữ: bản tiếng Anh trỏ ngược về bản tiếng Việt
        vi_rel = rel_url("/en" + vi_page, vi_page)
        html = re.sub(r'<a ([^>]*?)href="[^"]*" hreflang="en" lang="en" aria-label="English" data-lang-switch>EN</a>',
                      lambda m: f'<a {m.group(1)}href="{vi_rel}" hreflang="vi" lang="vi" aria-label="Tiếng Việt" data-lang-switch>VI</a>', html)
        html = html.replace('<html lang="vi"', '<html lang="en"').replace('content="vi_VN"', 'content="en_US"')
        page_url = f"{BASE_URL}{vi_page}"
        html = html.replace(f'<link rel="canonical" href="{page_url}">', f'<link rel="canonical" href="{BASE_URL}/en{vi_page}">')
        html = html.replace(f'<meta property="og:url" content="{page_url}">', f'<meta property="og:url" content="{BASE_URL}/en{vi_page}">')
        html = re.sub(r' data-lang-only="en"', "", html)
        out = ROOT / "en" / src
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(html, encoding="utf-8")
        missing -= keep
        print(f"  ✓ en/{src}" + (f"  ({len(missing)} chuỗi chưa dịch)" if missing else ""))
        for m in sorted(missing):
            print(f"      chưa dịch: {m[:90]}")
    # bản tiếng Việt không hiện ghi chú chỉ dành cho tiếng Anh
    for src in EN_PAGES.values():
        path = ROOT / src
        if path.exists():
            html = path.read_text(encoding="utf-8")
            html2 = re.sub(r'\n?[ \t]*<p [^>]*data-lang-only="en"[^>]*>.*?</p>', "", html)
            if html2 != html:
                path.write_text(html2, encoding="utf-8")


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
    write_en_pages()
    write_llms(posts, uu_docs)
    print("  ✓ llms.txt, llms-full.txt")

    # Sitemap cho Google Search Console / Bing
    latest_date = str(posts[0]["date"])
    urls = [("", latest_date), ("blog.html", latest_date)] + [
        (p["url"], str(p["date"])) for p in posts
    ]
    if has_landing:
        urls.append(("design-system/", None))
    urls += [("en/", latest_date), ("en/blog.html", latest_date)] + ([("en/design-system/", None)] if has_landing else [])
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
