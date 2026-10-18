// Cấu hình Portal. Hai giá trị đầu điền sau khi tạo xong Google OAuth client và Cloudflare Worker
// (xem worker/HUONG-DAN.md). Cả hai đều KHÔNG phải bí mật — token GitHub chỉ nằm trong Worker.
// Để trống API_BASE thì portal chạy chế độ thử: đọc bài thật nhưng không lưu gì.
window.UU_PORTAL = {
  GOOGLE_CLIENT_ID: "",
  API_BASE: "",
  REPO: "buiphamthanhtu/uu-website",
  BRANCH: "main",
  SITE: "https://uucreative.co",
};
