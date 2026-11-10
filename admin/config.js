// Cấu hình Portal. Hai giá trị đầu điền sau khi tạo xong Google OAuth client và Cloudflare Worker
// (xem worker/HUONG-DAN.md). Cả hai đều KHÔNG phải bí mật — token GitHub chỉ nằm trong Worker.
// Để trống API_BASE thì portal chạy chế độ thử: đọc bài thật nhưng không lưu gì.
window.UU_PORTAL = {
  GOOGLE_CLIENT_ID: "538750556789-isqjhi3j8vv6i17em35fck2tchm7mkkk.apps.googleusercontent.com",
  API_BASE: "https://uu-blog-api.tu-b13.workers.dev",
  REPO: "buiphamthanhtu/uu-website",
  BRANCH: "main",
  SITE: "https://uucreative.co",
};
