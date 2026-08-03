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
import re
import sys
from pathlib import Path

import markdown
import yaml

ROOT = Path(__file__).parent
POSTS = ROOT / "posts"
TEMPLATES = ROOT / "templates"

FIG_SIZES = {"200", "400", "500", "600", "800", "full"}


def parse_post(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not m:
        sys.exit(f"LỖI: {path.name} thiếu front-matter (--- ... ---)")
    meta = yaml.safe_load(m.group(1))
    for field in ("title", "episode", "date", "cover"):
        if field not in meta:
            sys.exit(f"LỖI: {path.name} thiếu trường '{field}'")
    meta["slug"] = path.stem
    meta["url"] = f"blog-{path.stem}.html"
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
        f'{indent}<a class="article-cover" href="{post["url"]}">\n'
        f'{indent}  <img src="{post["cover"]}" alt="{post.get("cover_alt", "")}">\n'
        f'{indent}  <span class="article-cover__overlay">\n'
        f"{indent}    <strong>{label}</strong>\n"
        f"{indent}    <span>{series}</span>\n"
        f"{indent}  </span>\n"
        f"{indent}</a>"
    )


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
        title_tag = f'{post["title"]} — {post["episode"]} | ÚÙ Creative Studio'
        description = post.get(
            "description", f'{series}: {post["title"]} — {post["episode"]}'
        )
        html = (
            post_tpl.replace("{{DESCRIPTION}}", description)
            .replace("{{TITLE_TAG}}", title_tag)
            .replace("{{SERIES}}", series)
            .replace("{{TITLE}}", post["title"])
            .replace("{{EPISODE}}", post["episode"])
            .replace("{{CONTENT}}", content)
            .replace("{{RELATED}}", related)
        )
        out = ROOT / post["url"]
        out.write_text(html, encoding="utf-8")
        print(f"  ✓ {out.name}")

    # Trang danh sách blog
    covers = "\n".join(cover_link(p, indent="      ") for p in posts)
    (ROOT / "blog.html").write_text(
        blog_tpl.replace("{{COVERS}}", covers), encoding="utf-8"
    )
    print("  ✓ blog.html")

    # 3 cover mới nhất trên trang chủ (giữa 2 marker)
    index_path = ROOT / "index.html"
    index_html = index_path.read_text(encoding="utf-8")
    latest = "\n".join(cover_link(p, indent="      ") for p in posts[:3])
    new_index, n = re.subn(
        r"(<!-- build:covers -->\n).*?(\n\s*<!-- /build:covers -->)",
        lambda m: m.group(1) + latest + m.group(2),
        index_html,
        flags=re.DOTALL,
    )
    if n == 0:
        sys.exit("LỖI: index.html thiếu marker <!-- build:covers -->")
    index_path.write_text(new_index, encoding="utf-8")
    print("  ✓ index.html (covers)")
    print(f"Xong! {len(posts)} bài.")


if __name__ == "__main__":
    main()
