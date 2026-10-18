# Cài đặt Portal viết blog (khoảng 25 phút, làm một lần)

Portal ở `uucreative.co/admin/`. Người viết đăng nhập bằng Google, không cần GitHub.
Cần chuẩn bị 3 thứ, theo đúng thứ tự dưới đây. **Token ở bước 1 là bí mật: chỉ dán vào
Cloudflare, không gửi cho ai (kể cả Claude).**

## Bước 1 — GitHub token cho Worker (5 phút)

1. Mở https://github.com/settings/personal-access-tokens/new
2. **Token name:** `uu-blog-portal` · **Expiration:** 1 năm (ghi lịch nhắc gia hạn)
3. **Repository access:** chọn *Only select repositories* → chọn `uu-website`
4. **Permissions → Repository permissions → Contents:** chọn *Read and write*
5. Bấm **Generate token**, copy chuỗi bắt đầu bằng `github_pat_` (chỉ hiện một lần)

Token này chỉ đọc/ghi được nội dung repo `uu-website`, không đụng được repo khác hay tài khoản.

## Bước 2 — Google OAuth Client ID (10 phút)

1. Mở https://console.cloud.google.com, đăng nhập bằng `tu@uucreative.co`
2. Tạo project mới tên **Blog UU**
3. Vào **Google Auth Platform** (hoặc *APIs & Services → OAuth consent screen*):
   - App name: `Blog ÚÙ`, support email: email của bạn
   - **Audience / User type: Internal** — chỉ tài khoản @uucreative.co mới đăng nhập được
4. Vào **Clients → Create client**:
   - Application type: **Web application**, Name: `Portal blog`
   - **Authorized JavaScript origins:** `https://uucreative.co`
     (thêm `http://localhost:8931` nếu muốn thử portal trên máy)
   - Bấm **Create**, copy **Client ID** (đuôi `.apps.googleusercontent.com`)

## Bước 3 — Cloudflare Worker (10 phút)

1. Tạo tài khoản miễn phí: https://dash.cloudflare.com/sign-up
2. **Workers & Pages → Create → Create Worker**, đặt tên `uu-blog-api` → **Deploy**
3. Bấm **Edit code**, xoá hết code mẫu, dán toàn bộ nội dung file `worker/blog-api.js` → **Deploy**
4. Vào **Settings → Variables and Secrets**, thêm lần lượt:

   | Tên | Loại | Giá trị |
   |---|---|---|
   | `GOOGLE_CLIENT_ID` | Text | Client ID ở bước 2 |
   | `ALLOWED_EMAILS` | Text | `tu@uucreative.co` (nhiều người thì cách nhau dấu phẩy) |
   | `ALLOWED_ORIGINS` | Text | `https://uucreative.co` |
   | `REPO` | Text | `buiphamthanhtu/uu-website` |
   | `GITHUB_TOKEN` | **Secret** | token ở bước 1 |

5. Bấm **Deploy**, copy địa chỉ Worker (dạng `https://uu-blog-api.<tên-bạn>.workers.dev`)

## Bước 4 — Gửi Claude 2 thứ (không bí mật)

- **Client ID** ở bước 2
- **Địa chỉ Worker** ở bước 3

Claude điền vào `admin/config.js` là portal chạy thật.

## Về sau

- **Thêm người viết:** sửa `ALLOWED_EMAILS` trong Cloudflare, bấm Deploy.
- **Token hết hạn** (portal báo lỗi khi lưu): tạo token mới như bước 1, dán đè vào `GITHUB_TOKEN`.
- **Thu hồi quyền ngay lập tức:** xoá token ở https://github.com/settings/personal-access-tokens
