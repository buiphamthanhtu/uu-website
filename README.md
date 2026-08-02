# ÚÙ Creative Studio — website HTML thuần

Clone từ file Figma "Website", không cần Figma để chỉnh sửa nữa.

## Cấu trúc

```
posts/                   ★ NGUỒN bài viết (Markdown) — sửa/thêm bài Ở ĐÂY
templates/               Template HTML cho trang bài viết + trang blog
build.py                 Script build: posts/*.md → blog-*.html, blog.html, index.html
.pages.yml               Cấu hình Pages CMS (giao diện viết bài trên web)
.github/workflows/       GitHub Actions: tự build khi posts/ thay đổi
index.html               Trang chủ (phần covers do build.py tự cập nhật)
blog.html                Danh sách bài viết (file sinh tự động — ĐỪNG sửa tay)
blog-giao-tiep-*.html    Trang bài viết (file sinh tự động — ĐỪNG sửa tay)
css/style.css            Toàn bộ style + design tokens
js/main.js               Menu mobile
assets/                  Hình ảnh
download-assets.sh       Script tải hình từ trang Figma Sites cũ (đã chạy xong)
```

## Viết bài mới

**Cách 1 — Pages CMS (khuyên dùng):** vào https://app.pagescms.org, đăng nhập
GitHub, chọn repo này → "Bài viết" → Add entry → viết → Save. GitHub Actions
tự build và đăng bài trong ~1 phút.

**Cách 2 — tay:** tạo `posts/ten-bai.md` (copy front-matter từ bài cũ), push lên.

**Quy ước trong Markdown:**

| Cú pháp | Kết quả |
|---|---|
| `![mô tả\|400](assets/hinh.png)` | Ảnh cỡ 400px (cỡ: 200/400/500/600/800/full) |
| `:::summary Tiêu đề` … `:::` | Box tóm tắt màu cam nhạt |
| HTML thô (vd `<div class="info-table">`) | Giữ nguyên |

Bài mới nhất (theo `date`) tự lên đầu trang chủ + trang blog; mục Related
article của mỗi bài là 2 bài mới nhất còn lại. URL bài = `blog-<tên file>.html`.

Build tay khi cần: `pip install markdown pyyaml` rồi `python3 build.py`.

## Design tokens (trong css/style.css)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ink` | #1B1B1B | Nền tối, chữ trên nền sáng |
| `--paper` | #FFFFFF | Nền card, chữ trên nền tối |
| `--brand` | #FF500D | Cam brand: nút contact, CEO widget |
| `--gold` | #FFBA0D | Vàng: store widget |
| Font display | Bungee | Tiêu đề, nút |
| Font body | Inter | Nội dung |

Fonts load từ Google Fonts.

## Deploy

Là site tĩnh nên chỉ cần kéo thả cả thư mục lên Netlify / Vercel / GitHub Pages /
Cloudflare Pages, hoặc upload lên hosting bất kỳ, rồi trỏ domain uucreative.co vào.
