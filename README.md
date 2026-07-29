# ÚÙ Creative Studio — website HTML thuần

Clone từ file Figma "Website", không cần Figma để chỉnh sửa nữa.

## Cấu trúc

```
index.html               Trang chủ
blog.html                Danh sách bài viết
blog-giao-tiep-1.html    Bài "giao tiếp" hồi 1  (sắp bổ sung)
blog-giao-tiep-2.html    Bài "giao tiếp" hồi 2  (sắp bổ sung)
blog-giao-tiep-3.html    Bài "giao tiếp" hồi 3  (sắp bổ sung)
css/style.css            Toàn bộ style + design tokens
js/main.js               Menu mobile
assets/                  Hình ảnh
download-assets.sh       Script tải hình từ trang Figma Sites cũ
```

## Việc cần làm 1 lần: tải hình về

Hiện tại hình đang tự fallback sang link `radio-soft-proxy.figma.site`.
Để website độc lập hoàn toàn khỏi Figma, chạy:

```
bash download-assets.sh
```

(hoặc mở từng link trong file đó bằng trình duyệt rồi lưu vào `assets/` với đúng tên).
Sau đó có thể gỡ publish trang Figma Sites thoải mái.

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
