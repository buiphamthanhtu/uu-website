// Cloudflare Worker cho Portal blog ÚÙ — dán nguyên file này vào Worker "uu-blog-api".
//
// Worker là lớp gác cổng duy nhất giữa portal và GitHub:
//   1. Nhận Google access token từ portal, hỏi Google xem token có đúng là của
//      ứng dụng mình (aud = GOOGLE_CLIENT_ID) và email có nằm trong ALLOWED_EMAILS không.
//   2. Chỉ cho đọc/ghi đúng hai chỗ: posts/<slug>.md và assets/uploads/<tên-ảnh>.
//   3. Ghi bằng GITHUB_TOKEN (fine-grained, chỉ repo uu-website, quyền Contents) —
//      token này chỉ nằm trong Worker, trình duyệt không bao giờ thấy.
//
// Biến môi trường (Settings → Variables and Secrets):
//   GOOGLE_CLIENT_ID   Client ID của OAuth client Google (không bí mật)
//   ALLOWED_EMAILS     email được viết bài, cách nhau dấu phẩy: ban@example.com,dongnghiep@example.com
//   ALLOWED_ORIGINS    nơi đặt portal: https://uucreative.co
//   REPO               buiphamthanhtu/uu-website
//   BRANCH             main (bỏ trống cũng được)
//   GITHUB_TOKEN       (Secret) fine-grained token: chỉ repo uu-website, Contents = Read and write
//
// Binding (Settings → Bindings):
//   STATS_DB           D1 database "uu-stats" — bộ đếm lượt xem. Bảng tự tạo ở lần đếm đầu.
//
// Đếm lượt xem (POST /hit, không cần đăng nhập): trình duyệt gửi trang + nguồn, Worker chỉ cộng 1
// vào ô (ngày, loại, khu vực, trang, nguồn). Không lưu IP, user-agent hay cookie.

const PATH_RULES = [
  /^posts\/[a-z0-9-]+\.md$/,
  /^assets\/uploads\/[a-z0-9-]+\.(png|jpe?g|webp|gif)$/,
];
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const tokenCache = new Map(); // access token -> { email, exp }

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (!cors["Access-Control-Allow-Origin"]) return json({ error: "Nguồn gọi không được phép" }, 403, cors);

    const url = new URL(request.url);
    if (request.method === "POST" && url.pathname === "/hit") {
      try { await recordHit(request, env); } catch (e) {}
      return new Response(null, { status: 204, headers: cors });
    }

    try {
      const user = await authenticate(request, env);
      const route = `${request.method} ${url.pathname}`;

      if (route === "GET /me") return json({ email: user.email }, 200, cors);

      if (route === "GET /stats") {
        if (!env.STATS_DB) throw httpError(503, "Worker chưa nối kho D1 STATS_DB");
        const day = /^\d{4}-\d{2}-\d{2}$/;
        const from = url.searchParams.get("from"), to = url.searchParams.get("to");
        if (!day.test(from || "") || !day.test(to || "")) throw httpError(400, "Thiếu khoảng ngày");
        await ensureStatsTable(env);
        const { results } = await env.STATS_DB.prepare(
          "SELECT day, kind, area, page, src, n FROM stats WHERE day BETWEEN ? AND ? ORDER BY day").bind(from, to).all();
        return json({ rows: results, today: vnDay() }, 200, cors);
      }

      if (route === "GET /posts") {
        // Một truy vấn GraphQL lấy cả thư mục posts/ — không vướng giới hạn 50 lượt gọi/request của Workers
        const [owner, name] = String(env.REPO).split("/");
        const data = await githubGraphql(env, `query($owner:String!,$name:String!,$expr:String!){
          repository(owner:$owner,name:$name){ object(expression:$expr){ ... on Tree { entries { name type oid object { ... on Blob { text } } } } } } }`,
          { owner, name, expr: `${branch(env)}:posts` });
        const entries = data.repository?.object?.entries || [];
        const posts = entries
          .filter((e) => e.type === "blob" && e.name.endsWith(".md"))
          .map((e) => ({ path: `posts/${e.name}`, sha: e.oid, content: e.object?.text ?? "" }));
        return json({ posts }, 200, cors);
      }

      if (route === "PUT /file") {
        const body = await request.json();
        const path = checkPath(body.path);
        const isText = path.endsWith(".md");
        const b64 = isText ? encodeBase64Utf8(String(body.content ?? "")) : String(body.base64 ?? "");
        if (!isText && b64.length * 0.75 > MAX_UPLOAD_BYTES) throw httpError(413, "Ảnh quá 4 MB");
        const payload = {
          message: `${String(body.message || "Cập nhật " + path).slice(0, 200)} (qua Portal, ${user.email})`,
          content: b64,
          branch: branch(env),
          ...(body.sha ? { sha: body.sha } : {}),
        };
        const res = await github(env, `contents/${path}`, { method: "PUT", body: JSON.stringify(payload) });
        return json({ path, sha: res.content.sha }, 200, cors);
      }

      if (route === "DELETE /file") {
        const body = await request.json();
        const path = checkPath(body.path);
        if (!path.startsWith("posts/")) throw httpError(400, "Chỉ xoá được bài viết");
        await github(env, `contents/${path}`, {
          method: "DELETE",
          body: JSON.stringify({ message: `Xoá ${path} (qua Portal, ${user.email})`, sha: body.sha, branch: branch(env) }),
        });
        return json({ ok: true }, 200, cors);
      }

      return json({ error: "Không có đường dẫn này" }, 404, cors);
    } catch (err) {
      const status = err.status || 500;
      return json({ error: status === 500 ? "Lỗi máy chủ, thử lại sau" : err.message }, status, cors);
    }
  },
};

async function authenticate(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) throw httpError(401, "Chưa đăng nhập");

  const cached = tokenCache.get(token);
  if (cached && cached.exp > Date.now()) return cached;

  const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?access_token=${encodeURIComponent(token)}`);
  if (!res.ok) throw httpError(401, "Phiên đăng nhập đã hết, đăng nhập lại nhé");
  const info = await res.json();
  if (info.aud !== env.GOOGLE_CLIENT_ID) throw httpError(401, "Token không thuộc portal này");
  if (info.email_verified !== "true" && info.email_verified !== true) throw httpError(403, "Email Google chưa xác minh");

  const email = String(info.email || "").toLowerCase();
  const allowed = String(env.ALLOWED_EMAILS || "").toLowerCase().split(",").map((s) => s.trim()).filter(Boolean);
  if (!allowed.includes(email)) throw httpError(403, `${email} chưa được cấp quyền viết bài`);

  const user = { email, exp: Date.now() + Math.min(Number(info.expires_in || 300), 300) * 1000 };
  tokenCache.set(token, user);
  return user;
}

async function github(env, endpoint, init = {}) {
  const res = await fetch(`https://api.github.com/repos/${env.REPO}/${endpoint}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "uu-blog-portal",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
    },
  });
  if (res.status === 409 || res.status === 422) throw httpError(409, "Bài vừa được sửa ở nơi khác. Tải lại trang rồi sửa tiếp nhé");
  if (res.status === 404) throw httpError(404, "Không tìm thấy file trên GitHub");
  if (!res.ok) throw httpError(502, `GitHub báo lỗi ${res.status}`);
  return res.json();
}

async function githubGraphql(env, query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, "User-Agent": "uu-blog-portal", "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.errors) throw httpError(502, "GitHub báo lỗi khi đọc danh sách bài");
  return body.data;
}

function checkPath(path) {
  const p = String(path || "");
  if (!PATH_RULES.some((re) => re.test(p))) throw httpError(400, "Đường dẫn không hợp lệ");
  return p;
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = String(env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const headers = { "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", "Access-Control-Allow-Headers": "Authorization, Content-Type", Vary: "Origin" };
  if (allowed.includes(origin)) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

const branch = (env) => env.BRANCH || "main";
const httpError = (status, message) => Object.assign(new Error(message), { status });
const json = (data, status, headers) => new Response(JSON.stringify(data), { status, headers: { ...headers, "Content-Type": "application/json; charset=utf-8" } });

function encodeBase64Utf8(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

// =====================================================================
// Đếm lượt xem
// =====================================================================
const BOT_RE = /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|pingdom|monitor/i;
let statsReady = false;

async function ensureStatsTable(env) {
  if (statsReady) return;
  await env.STATS_DB.prepare(`CREATE TABLE IF NOT EXISTS stats (
    day TEXT NOT NULL, kind TEXT NOT NULL, area TEXT NOT NULL, page TEXT NOT NULL, src TEXT NOT NULL DEFAULT '',
    n INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (day, kind, area, page, src))`).run();
  statsReady = true;
}

// Ngày theo giờ Việt Nam (UTC+7)
const vnDay = () => new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10);

async function recordHit(request, env) {
  if (!env.STATS_DB || BOT_RE.test(request.headers.get("User-Agent") || "")) return;
  const text = await request.text();
  if (text.length > 2000) return;
  const b = JSON.parse(text);
  const kind = b.k === "c" ? "click" : "view";
  const path = String(b.p || "/").slice(0, 300);
  let area, page;
  if (path.startsWith("/uu-ds")) {
    area = "story";
    page = String(b.sb || "").replace(/^\//, "").slice(0, 200) || "(trang đầu)";
  } else if (/^\/(en\/)?design-system/.test(path)) {
    area = "landing"; page = path.startsWith("/en/") ? "/en/design-system/" : "/design-system/";
  } else {
    area = "site"; page = path.replace(/index\.html$/, "") || "/";
  }
  let src = "";
  if (kind === "click") {
    page = String(b.l || "").trim().slice(0, 80);
    if (!page) return;
  } else {
    src = b.i ? "~" : sourceOf(String(b.u || ""), String(b.r || ""));
  }
  await ensureStatsTable(env);
  await env.STATS_DB.prepare(
    "INSERT INTO stats (day, kind, area, page, src, n) VALUES (?, ?, ?, ?, ?, 1) " +
    "ON CONFLICT (day, kind, area, page, src) DO UPDATE SET n = n + 1").bind(vnDay(), kind, area, page, src).run();
}

const UTM_NAMES = { zalo: "Zalo", facebook: "Facebook", fb: "Facebook", linkedin: "LinkedIn", threads: "Threads", email: "Email",
                    google: "Google", github: "GitHub", x: "X", twitter: "X", tiktok: "TikTok", youtube: "YouTube" };
const HOSTS = [[/(^|\.)google\./, "Google"], [/(^|\.)bing\.com$/, "Bing"], [/(^|\.)duckduckgo\.com$/, "DuckDuckGo"],
               [/(^|\.)coccoc\.com$/, "Cốc Cốc"], [/(^|\.)(facebook\.com|fb\.com|fb\.me)$/, "Facebook"],
               [/(^|\.)(linkedin\.com|lnkd\.in)$/, "LinkedIn"], [/(^|\.)zalo\.(me|vn)$/, "Zalo"],
               [/(^|\.)threads\.(net|com)$/, "Threads"], [/(^|\.)github\.com$/, "GitHub"], [/(^|\.)(x\.com|twitter\.com|t\.co)$/, "X"],
               [/(^|\.)(chatgpt\.com|openai\.com)$/, "ChatGPT"], [/(^|\.)perplexity\.ai$/, "Perplexity"], [/(^|\.)claude\.ai$/, "Claude"],
               [/(^|\.)youtube\.com$/, "YouTube"], [/(^|\.)tiktok\.com$/, "TikTok"], [/(^|\.)behance\.net$/, "Behance"],
               [/(^|\.)dribbble\.com$/, "Dribbble"], [/(^|\.)figma\.com$/, "Figma"]];

function sourceOf(utm, referrer) {
  const u = utm.trim().toLowerCase().slice(0, 40);
  if (u) return UTM_NAMES[u] || u;
  if (!referrer) return "Không rõ nguồn";
  let ref;
  try { ref = new URL(referrer); } catch { return "Không rõ nguồn"; }
  const host = ref.hostname.replace(/^www\./, "");
  if (host === "uucreative.co") {
    if (/^\/(en\/)?design-system/.test(ref.pathname)) return "Từ landing UU DS";
    if (ref.pathname.startsWith("/uu-ds")) return "Từ Storybook";
    return "Từ trang chủ & blog";
  }
  for (const [re, name] of HOSTS) if (re.test(host)) return name;
  return host.slice(0, 60);
}

