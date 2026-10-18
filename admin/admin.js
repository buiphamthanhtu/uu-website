// Portal quản lý blog ÚÙ — đọc/ghi posts/*.md qua Cloudflare Worker (worker/blog-api.js).
// Không có API_BASE trong config.js → chế độ thử: đọc bài thật, không lưu gì.
(() => {
  "use strict";

  const CFG = window.UU_PORTAL || {};
  const DEMO = !CFG.API_BASE;
  const ICONS = "../assets/icons.svg";
  const SITE = (CFG.SITE || "https://uucreative.co").replace(/\/$/, "");
  const SIZES = [["400", "Nhỏ"], ["600", "Vừa"], ["800", "Lớn"], ["full", "Tràn khung"]];
  const BLOCK_LABEL = { paragraph: "Đoạn văn", heading: "Tiêu đề mục", subheading: "Tiêu đề nhỏ", list: "Danh sách",
                        image: "Hình ảnh", summary: "Hộp tóm tắt", table: "Bảng thông tin", html: "Khối HTML" };

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (name, cls = "") => `<svg class="uu-icon ${cls}" aria-hidden="true"><use href="${ICONS}#${name}"/></svg>`;
  const plainTitle = (t) => String(t || "").replace(/[“”"']/g, "").trim();
  const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);

  const state = { token: null, email: null, posts: [], filter: "all", query: "", editor: null };
  const localPreview = {};      // path ảnh vừa tải → objectURL, để xem ngay khi website chưa build xong
  const main = $("#main");

  // =====================================================================
  // Đăng nhập (Google Identity Services, token client)
  // =====================================================================
  const SESSION_KEY = "uu-portal-session";
  const store = {
    get(k) { try { return JSON.parse(sessionStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch {} },
    del(k) { try { sessionStorage.removeItem(k); } catch {} },
  };
  const backup = {
    key: (slug) => `uu-portal-backup:${slug || "_new"}`,
    get(slug) { try { return JSON.parse(localStorage.getItem(this.key(slug))); } catch { return null; } },
    set(slug, v) { try { localStorage.setItem(this.key(slug), JSON.stringify(v)); } catch {} },
    del(slug) { try { localStorage.removeItem(this.key(slug)); } catch {} },
  };

  let tokenClient = null;
  function loadGis() {
    return new Promise((resolve, reject) => {
      if (window.google?.accounts?.oauth2) return resolve();
      const s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.async = true;
      s.onload = resolve;
      s.onerror = () => reject(new Error("Không tải được Google Sign-In, kiểm tra mạng rồi thử lại"));
      document.head.appendChild(s);
    });
  }

  function showLoginError(msg) {
    const el = $("#loginError");
    el.textContent = msg || "";
    el.hidden = !msg;
  }

  async function login() {
    showLoginError("");
    if (DEMO) { state.email = "Chế độ thử"; return startApp(); }
    if (!CFG.GOOGLE_CLIENT_ID) return showLoginError("Portal chưa được cấu hình GOOGLE_CLIENT_ID.");
    try { await loadGis(); } catch (e) { return showLoginError(e.message); }
    tokenClient = tokenClient || google.accounts.oauth2.initTokenClient({
      client_id: CFG.GOOGLE_CLIENT_ID,
      scope: "openid email",
      callback: async (resp) => {
        if (resp.error) return showLoginError("Đăng nhập chưa thành công, thử lại nhé.");
        state.token = resp.access_token;
        try {
          const me = await api("GET", "/me");
          state.email = me.email;
          store.set(SESSION_KEY, { token: resp.access_token, email: me.email, exp: Date.now() + (Number(resp.expires_in) || 3600) * 1000 - 60000 });
          startApp();
        } catch (e) {
          state.token = null;
          showLoginError(e.message);
        }
      },
    });
    tokenClient.requestAccessToken();
  }

  function logout() {
    store.del(SESSION_KEY);
    if (state.token && window.google?.accounts?.oauth2) google.accounts.oauth2.revoke(state.token, () => {});
    state.token = null;
    showScreen("login");
  }

  function showScreen(name) {
    $("#screenLogin").hidden = name !== "login";
    $("#screenApp").hidden = name !== "app";
  }

  // =====================================================================
  // API
  // =====================================================================
  class SessionExpired extends Error {}

  async function api(method, path, body) {
    if (DEMO) return demoApi(method, path, body);
    const res = await fetch(CFG.API_BASE.replace(/\/$/, "") + path, {
      method,
      headers: { Authorization: `Bearer ${state.token}`, ...(body ? { "Content-Type": "application/json" } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    let data = {};
    try { data = await res.json(); } catch {}
    if (res.status === 401) { store.del(SESSION_KEY); throw new SessionExpired(data.error || "Phiên đăng nhập đã hết"); }
    if (!res.ok) throw new Error(data.error || `Lỗi ${res.status}`);
    return data;
  }

  const demoStore = {};
  async function demoApi(method, path, body) {
    if (path === "/me") return { email: "Chế độ thử" };
    if (method === "GET" && path === "/posts") {
      let names = [];
      try {
        const html = await (await fetch("../posts/")).text();
        names = [...html.matchAll(/href="([a-z0-9-]+\.md)"/g)].map((m) => m[1]);
      } catch {}
      if (!names.length) {
        const r = await fetch(`https://api.github.com/repos/${CFG.REPO}/contents/posts?ref=${CFG.BRANCH}`);
        if (r.ok) names = (await r.json()).filter((f) => f.name.endsWith(".md")).map((f) => f.name);
      }
      const posts = [];
      for (const n of names) {
        const p = `posts/${n}`;
        if (p in demoStore) { if (demoStore[p]) posts.push({ path: p, sha: "demo", content: demoStore[p] }); continue; }
        const local = await fetch(`../${p}`);
        const content = local.ok ? await local.text()
          : await (await fetch(`https://raw.githubusercontent.com/${CFG.REPO}/${CFG.BRANCH}/${p}`)).text();
        posts.push({ path: p, sha: "demo", content });
      }
      for (const [p, c] of Object.entries(demoStore)) if (c && !names.includes(p.slice(6))) posts.push({ path: p, sha: "demo", content: c });
      return { posts };
    }
    if (method === "PUT" && path === "/file") { if (body.path.endsWith(".md")) demoStore[body.path] = body.content; return { path: body.path, sha: "demo" }; }
    if (method === "DELETE" && path === "/file") { demoStore[body.path] = null; return { ok: true }; }
    throw new Error("Không có đường dẫn này");
  }

  // =====================================================================
  // Markdown ⇄ dữ liệu bài (cùng quy ước với build.py)
  // =====================================================================
  function parseYamlScalar(v) {
    if (v === "") return "";
    if (v[0] === '"' && v.endsWith('"')) return v.slice(1, -1).replace(/\\(["\\nt])/g, (_, c) => ({ n: "\n", t: "\t" }[c] || c));
    if (v[0] === "'" && v.endsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
    if (v === "true") return true;
    if (v === "false") return false;
    return v;
  }

  function parseFrontMatter(text) {
    const m = text.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!m) return { meta: {}, body: text };
    const meta = {};
    for (const line of m[1].split("\n")) {
      const kv = line.match(/^([A-Za-z_][\w-]*):\s?(.*)$/);
      if (kv) meta[kv[1]] = parseYamlScalar(kv[2].trim());
    }
    return { meta, body: m[2] };
  }

  const yamlString = (s) => `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  function toFrontMatter(meta) {
    const lines = ["---"];
    for (const k of ["title", "series", "episode", "date", "description", "cover", "cover_alt", "next_note"]) {
      const v = meta[k];
      if (v === undefined || v === null || String(v).trim() === "") continue;
      lines.push(k === "date" ? `date: ${v}` : `${k}: ${yamlString(String(v).trim())}`);
    }
    lines.push(`draft: ${meta.draft ? "true" : "false"}`, "---");
    return lines.join("\n") + "\n";
  }

  // --- chữ trong dòng: **đậm**, *nghiêng*, [link](url), xuống dòng ---
  function mdInlineToHtml(md) {
    let s = esc(md).replace(/\\\*/g, "\u0001");
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${u}">${t}</a>`);
    s = s.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, "$1<em>$2</em>");
    s = s.replace(/(^|[^\w])_([^_\s][^_]*?)_(?!\w)/g, "$1<em>$2</em>");
    return s.replace(/\u0001/g, "*").replace(/\n/g, "<br>");
  }

  function wrap(marker, inner) {
    const m = inner.match(/^(\s*)([\s\S]*?)(\s*)$/);
    return m[2] ? `${m[1]}${marker}${m[2]}${marker}${m[3]}` : inner;
  }

  function htmlToMdInline(el) {
    let out = "";
    for (const n of el.childNodes) {
      if (n.nodeType === Node.TEXT_NODE) { out += n.nodeValue.replace(/\u00a0/g, " ").replace(/\*/g, "\\*"); continue; }
      if (n.nodeType !== Node.ELEMENT_NODE) continue;
      const tag = n.tagName;
      if (tag === "BR") out += "\n";
      else if (tag === "STRONG" || tag === "B") out += wrap("**", htmlToMdInline(n));
      else if (tag === "EM" || tag === "I") out += wrap("*", htmlToMdInline(n));
      else if (tag === "A") out += `[${htmlToMdInline(n)}](${n.getAttribute("href") || ""})`;
      else if (tag === "DIV" || tag === "P") out += (out && !out.endsWith("\n") ? "\n" : "") + htmlToMdInline(n);
      else out += htmlToMdInline(n);
    }
    return out;
  }

  // Dòng bắt đầu bằng ký tự Markdown (#, -, 1.) mà người viết gõ như chữ thường thì phải thoát
  const escapeLineStart = (line) => line.replace(/^(\s*)(\d+)([.)]\s)/, "$1$2\\$3").replace(/^(\s*)([#>+\-*]\s)/, "$1\\$2");
  const cleanText = (md) => md.split("\n").map((l) => escapeLineStart(l.replace(/\s+$/, ""))).join("\n").trim();
  const unescapeLineStart = (s) => s.replace(/^(\d+)\\([.)])/, "$1$2").replace(/^\\([#>+\-*])/, "$1");

  function parseInfoTable(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const root = doc.body.firstElementChild;
    if (!root || !root.classList.contains("info-table") || doc.body.children.length !== 1) return null;
    return $$(":scope > .row", root).map((row) => {
      const key = row.querySelector("strong");
      const items = $$("li", row);
      const values = items.length ? items.map((li) => htmlToMdInline(li).trim())
        : $$("p", row).map((p) => htmlToMdInline(p).trim());
      return { key: key ? htmlToMdInline(key).trim() : "", values };
    });
  }

  function parseBody(md) {
    const lines = md.replace(/\r\n/g, "\n").split("\n");
    const blocks = [];
    const blank = (l) => !l.trim();
    let i = 0;
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t) { i++; continue; }
      if (t.startsWith(":::summary")) {
        const title = t.replace(/^:::summary\s*/, "").trim();
        const body = [];
        i++;
        while (i < lines.length && lines[i].trim() !== ":::") body.push(lines[i++].replace(/\s+$/, ""));
        i++;
        blocks.push({ type: "summary", title, text: body.join("\n").trim() });
        continue;
      }
      if (t.startsWith("<")) {
        const buf = [];
        while (i < lines.length && !blank(lines[i])) buf.push(lines[i++]);
        const html = buf.join("\n");
        const rows = parseInfoTable(html);
        blocks.push(rows ? { type: "table", rows } : { type: "html", html });
        continue;
      }
      const h = t.match(/^(#{1,6})\s+(.*)$/);
      if (h) { blocks.push({ type: h[1].length >= 3 ? "subheading" : "heading", text: h[2].trim() }); i++; continue; }
      const img = t.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
      if (img) {
        const [alt, size] = img[1].split("|");
        blocks.push({ type: "image", alt: (alt || "").trim(), size: (size || "full").trim() || "full", src: img[2] });
        i++;
        continue;
      }
      const ordered = /^\d+[.)]\s+/.test(t);
      if (ordered || /^[-*+]\s+/.test(t)) {
        const items = [];
        while (i < lines.length && !blank(lines[i])) {
          const l = lines[i++].trim();
          const m = l.match(ordered ? /^\d+[.)]\s+(.*)$/ : /^[-*+]\s+(.*)$/);
          if (m) items.push(m[1]); else if (items.length) items[items.length - 1] += " " + l;
        }
        blocks.push({ type: "list", ordered, items });
        continue;
      }
      const buf = [];
      while (i < lines.length && !blank(lines[i]) && (!buf.length || !/^(#{1,6}\s|!\[|:::|<|[-*+]\s|\d+[.)]\s)/.test(lines[i].trim()))) {
        buf.push(lines[i++].replace(/\s+$/, ""));
      }
      blocks.push({ type: "paragraph", text: buf.map((l, k) => (k === 0 ? unescapeLineStart(l) : l)).join("\n") });
    }
    return blocks;
  }

  function tableHtml(rows) {
    const out = ['<div class="info-table">'];
    for (const r of rows) {
      const values = r.values.map((v) => v.trim()).filter(Boolean);
      if (!r.key.trim() && !values.length) continue;
      out.push('<div class="row">', `<strong>${mdInlineToHtml(r.key.trim())}</strong>`);
      if (values.length === 1) out.push(`<p>${mdInlineToHtml(values[0])}</p>`);
      else if (values.length) out.push(`<ul>${values.map((v) => `<li>${mdInlineToHtml(v)}</li>`).join("")}</ul>`);
      out.push("</div>");
    }
    out.push("</div>");
    return out.join("\n");
  }

  function serializeBody(blocks) {
    const parts = blocks.map((b) => {
      switch (b.type) {
        case "paragraph": { const t = cleanText(b.text); return t ? t.split("\n").join("  \n") : null; }
        case "heading": return b.text.trim() ? `## ${b.text.trim().replace(/\n+/g, " ")}` : null;
        case "subheading": return b.text.trim() ? `### ${b.text.trim().replace(/\n+/g, " ")}` : null;
        case "list": {
          const items = b.items.map((x) => x.replace(/\s*\n\s*/g, " ").trim()).filter(Boolean);
          return items.length ? items.map((x, k) => (b.ordered ? `${k + 1}. ${x}` : `- ${x}`)).join("\n") : null;
        }
        case "image": return b.src ? `![${(b.alt || "").replace(/[\]|]/g, " ").trim()}|${b.size || "full"}](${b.src})` : null;
        case "summary": return (b.title.trim() || b.text.trim()) ? `:::summary ${b.title.trim() || "Tóm tắt"}\n${cleanText(b.text)}\n:::` : null;
        case "table": return b.rows.some((r) => r.key.trim() || r.values.some((v) => v.trim())) ? tableHtml(b.rows) : null;
        case "html": return b.html.trim() || null;
        default: return null;
      }
    });
    return parts.filter(Boolean).join("\n\n") + "\n";
  }

  function postFromFile(file) {
    const { meta, body } = parseFrontMatter(file.content);
    const slug = file.path.replace(/^posts\//, "").replace(/\.md$/, "");
    return { slug, path: file.path, sha: file.sha, meta, body, raw: file.content };
  }

  // =====================================================================
  // Tiện ích
  // =====================================================================
  const slugify = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[đĐ]/g, "d")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  function makeSlug(title, episode) {
    const base = slugify(plainTitle(title)) || "bai-viet";
    const num = String(episode || "").match(/\d+/);
    const slug = num ? `${base}-${num[0]}` : (slugify(`${plainTitle(title)} ${episode || ""}`) || base);
    let s = slug, k = 2;
    while (state.posts.some((p) => p.slug === s)) s = `${slug}-${k++}`;
    return s;
  }
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
  const fmtDate = (d) => { const m = String(d || "").match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? `${m[3]}/${m[2]}/${m[1]}` : "—"; };
  const timeNow = () => new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
  const isLocalHost = ["localhost", "127.0.0.1"].includes(location.hostname);
  function resolveSrc(path) {
    if (!path) return "";
    if (/^(https?:|blob:|data:)/.test(path)) return path;
    if (localPreview[path]) return localPreview[path];
    return isLocalHost ? `../${path}` : `https://raw.githubusercontent.com/${CFG.REPO}/${CFG.BRANCH}/${path}`;
  }
  const postUrl = (slug) => `${SITE}/blog-${slug}.html`;
  const postLabel = (m) => `${cap(plainTitle(m.title)) || "Bài chưa đặt tên"}${m.episode ? " — " + cap(m.episode) : ""}`;

  // =====================================================================
  // Toast, Dialog
  // =====================================================================
  let toastTimer = null;
  function toast(text, { type = "neutral", actionText, actionHref } = {}) {
    const box = $("#toastBox");
    box.className = `uu-toast uu-toast--${type}`;
    $("#toastText").textContent = text;
    const a = $("#toastAction");
    a.hidden = !actionText;
    if (actionText) { a.textContent = actionText; a.href = actionHref; }
    $("#toast").hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => ($("#toast").hidden = true), type === "negative" ? 9000 : 6000);
  }

  function confirmDialog({ title, text, ok = "Đồng ý", cancel = "Huỷ", danger = false }) {
    return new Promise((resolve) => {
      const d = $("#dialog");
      $("#dialogTitle").textContent = title;
      $("#dialogText").textContent = text;
      $("#dialogOk").textContent = ok;
      $("#dialogOk").className = `uu-btn uu-btn--lg uu-interactive ${danger ? "tb-danger-solid" : "tb-accent-solid"}`;
      $("#dialogCancel").textContent = cancel;
      d.hidden = false;
      $("#dialogCancel").focus();
      const done = (v) => { d.hidden = true; d.onclick = null; document.removeEventListener("keydown", onKey); resolve(v); };
      const onKey = (e) => { if (e.key === "Escape") done(false); };
      document.addEventListener("keydown", onKey);
      d.onclick = (e) => {
        if (e.target === d) return done(false);
        const b = e.target.closest("[data-dialog]");
        if (b) done(b.dataset.dialog === "ok");
      };
    });
  }

  function handleError(e) {
    if (e instanceof SessionExpired) {
      toast("Phiên đăng nhập đã hết. Đăng nhập lại để tiếp tục — phần đang viết vẫn được giữ trên máy này.", { type: "negative" });
      showScreen("login");
      return;
    }
    toast(e.message || "Có lỗi xảy ra, thử lại nhé", { type: "negative" });
  }

  // =====================================================================
  // Danh sách bài
  // =====================================================================
  async function loadPosts() {
    const { posts } = await api("GET", "/posts");
    state.posts = posts.map(postFromFile);
  }

  function sortedPosts() {
    return [...state.posts].sort((a, b) => {
      if (!!a.meta.draft !== !!b.meta.draft) return a.meta.draft ? -1 : 1;
      return String(b.meta.date || "").localeCompare(String(a.meta.date || ""));
    });
  }

  function renderList() {
    state.editor = null;
    const all = sortedPosts();
    const published = all.filter((p) => !p.meta.draft);
    const drafts = all.filter((p) => p.meta.draft);
    const q = slugify(state.query);
    const rows = all.filter((p) => (state.filter === "all" || (state.filter === "draft") === !!p.meta.draft)
      && (!q || slugify(`${p.meta.title} ${p.meta.episode} ${p.meta.series}`).includes(q)));
    const latest = published[0];

    main.innerHTML = `
      <div class="page">
        <div class="page-head">
          <div>
            <h1 class="text-heading-lg">Bài viết</h1>
            <p class="text-body">Viết, sửa và đăng bài lên uucreative.co. Bài mới nhất tự lên đầu trang chủ.</p>
          </div>
          <a class="uu-btn uu-btn--base uu-interactive tb-accent-solid" href="#/new">${icon("plus")} Viết bài mới</a>
        </div>
        <div class="kpi-row">
          <div class="uu-kpi"><span class="uu-kpi__label text-caption">Đã đăng</span><span class="uu-kpi__value text-heading-base">${published.length} bài</span></div>
          <div class="uu-kpi"><span class="uu-kpi__label text-caption">Bản nháp</span><span class="uu-kpi__value text-heading-base">${drafts.length} bài</span></div>
          <div class="uu-kpi"><span class="uu-kpi__label text-caption">Đăng gần nhất</span><span class="uu-kpi__value text-heading-base">${latest ? fmtDate(latest.meta.date) : "—"}</span></div>
        </div>
        <div class="toolbar">
          <div class="uu-fieldset">
            <label class="uu-field" aria-label="Tìm bài viết">
              ${icon("magnifier")}
              <input type="search" id="search" placeholder="Tìm theo tên bài" value="${esc(state.query)}">
            </label>
          </div>
          <div class="chips" role="group" aria-label="Lọc theo trạng thái">
            ${[["all", "Tất cả"], ["published", "Đã đăng"], ["draft", "Bản nháp"]].map(([v, l]) =>
              `<button class="uu-chip uu-interactive" data-filter="${v}" aria-pressed="${state.filter === v}">${l}</button>`).join("")}
          </div>
        </div>
        <div class="table-card">
          ${rows.length ? `
          <table class="uu-table">
            <thead><tr>
              <th class="uu-th">Bài viết</th><th class="uu-th">Trạng thái</th>
              <th class="uu-th"><span class="uu-th__inner" style="color:var(--object-primary)">Ngày đăng ${icon("arrow-down", "uu-icon--16")}</span></th>
              <th class="uu-th"><span class="sr-only">Thao tác</span></th>
            </tr></thead>
            <tbody>${rows.map((p) => `
              <tr>
                <td class="uu-td"><div class="post-cell">
                  ${p.meta.cover ? `<img src="${esc(resolveSrc(p.meta.cover))}" alt="">` : `<img alt="">`}
                  <div class="post-cell__title"><strong class="text-title-base">${esc(postLabel(p.meta))}</strong><span class="text-caption">${esc(cap(p.meta.series || ""))}</span></div>
                </div></td>
                <td class="uu-td">${p.meta.draft ? `<span class="uu-status uu-status--neutral">Bản nháp</span>` : `<span class="uu-status uu-status--success">Đã đăng</span>`}</td>
                <td class="uu-td uu-td--secondary">${p.meta.draft ? "—" : fmtDate(p.meta.date)}</td>
                <td class="uu-td uu-td--actions"><span class="uu-td__actions">
                  <a class="uu-btn uu-btn--sm uu-interactive tb-accent-ghost" href="#/edit/${p.slug}">${p.meta.draft ? "Viết tiếp" : "Sửa"}</a>
                  <button class="uu-btn uu-iconbtn uu-iconbtn--sm uu-interactive tb-neutral-ghost" aria-label="Thêm thao tác cho ${esc(postLabel(p.meta))}" aria-haspopup="menu" data-row-menu="${p.slug}">${icon("dots-vertical")}</button>
                </span></td>
              </tr>`).join("")}
            </tbody>
          </table>` : `<p class="empty text-body">${state.posts.length ? "Không có bài nào khớp." : "Chưa có bài nào. Bấm “Viết bài mới” để bắt đầu."}</p>`}
        </div>
      </div>`;

    $("#search").addEventListener("input", (e) => {
      state.query = e.target.value;
      const pos = e.target.selectionStart;
      renderList();
      const s = $("#search"); s.focus(); s.setSelectionRange(pos, pos);
    });
  }

  function openRowMenu(btn, slug) {
    const p = state.posts.find((x) => x.slug === slug);
    const menu = $("#rowMenu");
    menu.innerHTML = `
      ${p.meta.draft ? "" : `<a class="uu-menuitem uu-interactive" role="menuitem" href="${postUrl(slug)}" target="_blank" rel="noopener">${icon("external-link")}Xem trên website</a>`}
      <button class="uu-menuitem uu-interactive" role="menuitem" data-act="duplicate">${icon("copy")}Nhân bản thành bài mới</button>
      ${p.meta.draft ? "" : `<button class="uu-menuitem uu-interactive" role="menuitem" data-act="unpublish">${icon("eye-slash")}Gỡ khỏi web, giữ nháp</button>`}
      <button class="uu-menuitem uu-interactive" role="menuitem" data-act="delete">${icon("trash")}Xoá bài</button>`;
    menu.dataset.slug = slug;
    menu.hidden = false;
    const r = btn.getBoundingClientRect();
    const w = menu.offsetWidth, h = menu.offsetHeight;
    menu.style.left = `${Math.max(8, r.right - w)}px`;
    menu.style.top = `${r.bottom + h + 8 > innerHeight ? r.top - h - 4 : r.bottom + 4}px`;
    menu.querySelector(".uu-menuitem").focus();
  }
  const closeRowMenu = () => ($("#rowMenu").hidden = true);

  async function rowAction(act, slug) {
    closeRowMenu();
    const p = state.posts.find((x) => x.slug === slug);
    try {
      if (act === "duplicate") {
        sessionDraft = { meta: { ...p.meta, episode: "", date: "", draft: true }, body: p.body };
        location.hash = "#/new";
      } else if (act === "unpublish") {
        const ok = await confirmDialog({ title: `Gỡ “${postLabel(p.meta)}” khỏi website?`,
          text: "Bài sẽ biến khỏi trang chủ và trang Blog sau khoảng 1 phút, nhưng vẫn nằm ở đây dạng bản nháp để đăng lại sau.", ok: "Gỡ khỏi web" });
        if (!ok) return;
        const content = toFrontMatter({ ...p.meta, draft: true }) + p.body.replace(/^\n+/, "");
        const res = await api("PUT", "/file", { path: p.path, content, sha: p.sha, message: `Gỡ bài ${slug} về nháp` });
        Object.assign(p, postFromFile({ path: p.path, sha: res.sha, content }));
        renderList();
        toast("Đã gỡ bài khỏi website. Bài vẫn ở đây dạng bản nháp.");
      } else if (act === "delete") {
        const ok = await confirmDialog({ title: `Xoá bài “${postLabel(p.meta)}”?`,
          text: "Bài bị gỡ khỏi website và xoá khỏi danh sách. Không hoàn tác được. Muốn tạm ẩn thì chọn “Gỡ khỏi web, giữ nháp”.",
          ok: "Xoá bài", danger: true });
        if (!ok) return;
        await api("DELETE", "/file", { path: p.path, sha: p.sha });
        state.posts = state.posts.filter((x) => x !== p);
        renderList();
        toast("Đã xoá bài.");
      }
    } catch (e) { handleError(e); }
  }

  // =====================================================================
  // Trình soạn bài
  // =====================================================================
  let sessionDraft = null; // nội dung mồi cho bài mới (nhân bản)

  function newPostSeed() {
    if (sessionDraft) { const s = sessionDraft; sessionDraft = null; return s; }
    const last = sortedPosts().find((p) => !p.meta.draft) || state.posts[0];
    const meta = { title: last?.meta.title || "", series: last?.meta.series || "", episode: "", date: "", description: "", cover: "", next_note: "", draft: true };
    const n = String(last?.meta.episode || "").match(/\d+/);
    if (n) meta.episode = String(last.meta.episode).replace(/\d+/, String(Number(n[0]) + 1));
    return { meta, body: "" };
  }

  async function openEditor(slug) {
    let ed;
    if (slug) {
      const p = state.posts.find((x) => x.slug === slug);
      if (!p) { toast("Không tìm thấy bài này", { type: "negative" }); location.hash = "#/"; return; }
      ed = { isNew: false, slug: p.slug, path: p.path, sha: p.sha, meta: { ...p.meta }, blocks: parseBody(p.body), savedRaw: p.raw };
    } else {
      const seed = newPostSeed();
      ed = { isNew: true, slug: "", path: "", sha: null, meta: seed.meta, blocks: seed.body ? parseBody(seed.body) : [{ type: "paragraph", text: "" }], savedRaw: null };
    }
    ed.mode = "edit";
    ed.selected = -1;
    ed.dirty = false;
    ed.savedAt = null;
    ed.errors = {};
    state.editor = ed;

    const bk = backup.get(ed.slug);
    if (bk && bk.content && bk.content !== currentContent()) {
      const ok = await confirmDialog({ title: "Khôi phục phần đang viết dở?",
        text: `Máy này còn giữ một bản chưa lưu lên website lúc ${bk.time}. Khôi phục để viết tiếp?`, ok: "Khôi phục", cancel: "Bỏ bản đó" });
      if (ok) {
        const { meta, body } = parseFrontMatter(bk.content);
        ed.meta = { ...ed.meta, ...meta };
        ed.blocks = parseBody(body);
        ed.dirty = true;
      } else backup.del(ed.slug);
    }
    renderEditor();
  }

  const currentContent = () => toFrontMatter(state.editor.meta) + serializeBody(state.editor.blocks);

  function fieldHtml({ id, label, value = "", placeholder = "", suffix = "", hint = "", type = "text", list = "", maxlength = "", error = "" }) {
    return `<div class="uu-fieldset ${error ? "is-error" : ""}">
      <label class="uu-label" for="${id}">${label}${suffix ? ` <span class="uu-label__suffix">∙ ${suffix}</span>` : ""}</label>
      <div class="uu-field"><input id="${id}" type="${type}" value="${esc(value)}" placeholder="${esc(placeholder)}" ${list ? `list="${list}"` : ""} ${maxlength ? `maxlength="${maxlength}"` : ""}>
        ${type === "date" ? icon("calendar-days", "uu-field__icon") : ""}</div>
      ${error ? `<span class="uu-error" role="alert">${esc(error)}</span>` : hint ? `<span class="hint text-caption">${hint}</span>` : ""}
    </div>`;
  }

  function editorStatus(ed) {
    const base = ed.isNew ? "Bài mới chưa lưu" : ed.meta.draft ? "Bản nháp" : "Đã đăng";
    const detail = ed.dirty ? "có thay đổi chưa lưu" : ed.savedAt ? `đã lưu ${ed.savedAt}` : "";
    const tone = !ed.isNew && !ed.meta.draft && !ed.dirty ? "success" : "neutral";
    return `<span class="uu-status uu-status--${tone}" id="edStatus">${base}${detail ? " · " + detail : ""}</span>`;
  }

  function renderEditor() {
    const ed = state.editor;
    const m = ed.meta;
    const published = !ed.isNew && !m.draft;
    const seriesList = [...new Set(state.posts.map((p) => p.meta.series).filter(Boolean))];
    const urlSlug = ed.slug || (m.title ? makeSlug(m.title, m.episode) : "");

    main.innerHTML = `
      <div class="editor-bar">
        <a class="uu-btn uu-iconbtn uu-iconbtn--sm uu-interactive tb-neutral-ghost" href="#/" aria-label="Về danh sách bài">${icon("arrow-left")}</a>
        <nav class="uu-breadcrumb" aria-label="Vị trí">
          <a class="uu-crumb uu-interactive" href="#/">Bài viết</a><span class="uu-crumb-sep" aria-hidden="true">/</span>
          <span class="uu-crumb" aria-current="page">${esc(postLabel(m))}</span>
        </nav>
        ${editorStatus(ed)}
        <span class="editor-bar__spacer"></span>
        <div class="uu-segmented" role="tablist" aria-label="Chế độ">
          <button class="uu-segment ${ed.mode === "edit" ? "uu-is-active" : ""}" role="tab" aria-selected="${ed.mode === "edit"}" data-mode="edit">${icon("pen")}Soạn</button>
          <button class="uu-segment ${ed.mode === "preview" ? "uu-is-active" : ""}" role="tab" aria-selected="${ed.mode === "preview"}" data-mode="preview">${icon("eye")}Xem trước</button>
        </div>
        ${published
          ? `<a class="uu-btn uu-btn--base uu-interactive tb-neutral-outline" href="${postUrl(ed.slug)}" target="_blank" rel="noopener">${icon("external-link")}Xem trên web</a>
             <button class="uu-btn uu-btn--base uu-interactive tb-accent-solid" data-save="update">${icon("check")}Cập nhật bài</button>`
          : `<button class="uu-btn uu-btn--base uu-interactive tb-neutral-outline" data-save="draft">Lưu nháp</button>
             <button class="uu-btn uu-btn--base uu-interactive tb-accent-solid" data-save="publish">${icon("paper-plane")}Đăng bài</button>`}
      </div>
      <div class="editor-body">
        <div class="canvas-wrap">
          <div class="canvas ${ed.mode === "preview" ? "is-preview" : ""}" id="canvas">
            <p class="canvas__meta text-title-sm">${esc(cap(m.series || "Chưa có series"))}${m.episode ? " · " + esc(m.episode) : ""}</p>
            ${ed.mode === "preview"
              ? `<h1 class="title-input" style="text-transform:uppercase">${esc(m.title || "")}</h1>`
              : `<input class="title-input" id="fTitle" value="${esc(m.title || "")}" aria-label="Tiêu đề bài viết" placeholder="Tiêu đề bài viết">
                 ${ed.errors.title ? `<span class="uu-error" role="alert">${esc(ed.errors.title)}</span>` : ""}`}
            ${ed.blocks.map((b, i) => (ed.mode === "preview" ? blockPreview(b) : blockEdit(b, i))).join("")}
            ${ed.mode === "preview" && m.next_note ? `<p class="text-body" style="color:var(--object-secondary)">${esc(m.next_note)}</p>` : ""}
            ${ed.mode === "edit" ? `
            <div class="inserter">
              <span class="inserter__label text-caption">${ed.selected >= 0 ? "Thêm khối dưới khối đang chọn:" : "Thêm khối:"}</span>
              ${[["paragraph", "text", "Đoạn văn"], ["heading", "", "Tiêu đề mục"], ["subheading", "", "Tiêu đề nhỏ"], ["image", "image", "Hình ảnh"],
                 ["list", "bullet-list", "Danh sách"], ["table", "list-checkbox", "Bảng thông tin"], ["summary", "sparkle", "Hộp tóm tắt"]]
                .map(([t, ic, l]) => `<button class="uu-btn uu-btn--sm uu-interactive tb-neutral-outline" data-insert="${t}">${ic ? icon(ic) : ""}${l}</button>`).join("")}
            </div>` : ""}
          </div>
        </div>
        <aside class="uu-sidesheet" aria-label="Thông tin bài viết">
          <div class="uu-sidesheet__header"><h2 class="uu-sidesheet__title text-heading-sm">Thông tin bài viết</h2></div>
          <div class="uu-sidesheet__body">
            <div class="uu-fieldset ${ed.errors.cover ? "is-error" : ""}">
              <span class="uu-label">Ảnh bìa <span class="uu-label__suffix">∙ Bắt buộc khi đăng</span></span>
              <div class="dropzone" data-drop="cover">
                ${m.cover ? `<img src="${esc(resolveSrc(m.cover))}" alt="Ảnh bìa hiện tại">` : `<div class="dropzone__empty"><button class="uu-btn uu-btn--base uu-interactive tb-neutral-outline" data-pick="cover">${icon("upload")}Chọn ảnh bìa</button></div>`}
                ${m.cover ? `<div class="dropzone__actions"><button class="uu-btn uu-btn--sm uu-interactive tb-neutral-solid-inv" data-pick="cover">${icon("upload")}Đổi ảnh bìa</button></div>` : ""}
              </div>
              ${ed.errors.cover ? `<span class="uu-error" role="alert">${esc(ed.errors.cover)}</span>` : `<span class="hint text-caption">Kéo thả ảnh vào khung. Nên dùng ảnh ngang, tỉ lệ 3:2.</span>`}
            </div>
            ${fieldHtml({ id: "fSeries", label: "Series", value: m.series, placeholder: "Ví dụ: Hơi thở designer, thức thứ nhất", list: "seriesList" })}
            <datalist id="seriesList">${seriesList.map((s) => `<option value="${esc(s)}">`).join("")}</datalist>
            ${fieldHtml({ id: "fEpisode", label: "Hồi", value: m.episode, placeholder: "Ví dụ: Hồi 4", error: ed.errors.episode })}
            ${fieldHtml({ id: "fDate", label: "Ngày đăng", type: "date", value: m.date, hint: "Để trống thì lấy ngày bấm Đăng bài." })}
            <div class="uu-fieldset">
              <label class="uu-label" for="fDesc">Mô tả trên Google</label>
              <div class="uu-field uu-field--area">
                <textarea id="fDesc" rows="3" maxlength="160" placeholder="Một hai câu tóm tắt bài, hiện dưới tiêu đề khi tìm trên Google">${esc(m.description || "")}</textarea>
                <span class="uu-field__counter" id="descCount">(${String(m.description || "").length}/160)</span>
              </div>
            </div>
            ${fieldHtml({ id: "fNext", label: "Lời hẹn cuối bài", value: m.next_note, suffix: "Không bắt buộc", placeholder: "Ví dụ: Hẹn bạn hồi 5 nói về…" })}
            <span class="hint text-caption">Địa chỉ bài: ${urlSlug ? esc(`uucreative.co/blog-${urlSlug}.html`) : "tạo sau khi đặt tiêu đề"}</span>
          </div>
        </aside>
      </div>`;
  }

  function contentEditable(tag, field, html, placeholder, extra = "") {
    return `<${tag} contenteditable="true" data-field="${field}" data-placeholder="${esc(placeholder)}" ${extra}>${html}</${tag}>`;
  }

  function blockTools(i) {
    const n = state.editor.blocks.length;
    return `<div class="block__tools">
      <button class="uu-btn uu-iconbtn uu-iconbtn--sm uu-interactive tb-neutral-ghost" data-move="-1" aria-label="Đưa khối lên" ${i === 0 ? "disabled" : ""}>${icon("arrow-up")}</button>
      <button class="uu-btn uu-iconbtn uu-iconbtn--sm uu-interactive tb-neutral-ghost" data-move="1" aria-label="Đưa khối xuống" ${i === n - 1 ? "disabled" : ""}>${icon("arrow-down")}</button>
      <button class="uu-btn uu-iconbtn uu-iconbtn--sm uu-interactive tb-neutral-ghost" data-remove aria-label="Xoá khối">${icon("trash")}</button>
    </div>`;
  }

  function blockEdit(b, i) {
    const sel = state.editor.selected === i ? "is-selected" : "";
    const head = `<div class="block ${sel}" data-i="${i}"><span class="block__tag text-title-xs">${BLOCK_LABEL[b.type]}</span>${blockTools(i)}`;
    switch (b.type) {
      case "paragraph": return `${head}${contentEditable("p", "text", mdInlineToHtml(b.text), "Viết nội dung… (Enter để sang đoạn mới, Ctrl/⌘+B in đậm)", 'class="text-body"')}</div>`;
      case "heading": return `${head}${contentEditable("h2", "text", esc(b.text), "Tiêu đề mục")}</div>`;
      case "subheading": return `${head}${contentEditable("h3", "text", esc(b.text), "Tiêu đề nhỏ")}</div>`;
      case "list": {
        const tag = b.ordered ? "ol" : "ul";
        const items = (b.items.length ? b.items : [""]).map((x) => `<li>${mdInlineToHtml(x)}</li>`).join("");
        return `${head}<${tag} class="text-body" contenteditable="true" data-field="items">${items}</${tag}></div>`;
      }
      case "image": {
        const sizeSeg = SIZES.map(([v, l]) => {
          const on = (b.size === v) || (v === "400" && b.size === "200") || (v === "600" && b.size === "500");
          return `<button class="uu-segment ${on ? "uu-is-active" : ""}" role="tab" aria-selected="${on}" data-size="${v}">${l}</button>`;
        }).join("");
        const pct = { 200: "25%", 400: "50%", 500: "62%", 600: "75%", 800: "100%", full: "100%" }[b.size] || "100%";
        return `${head}
          ${b.src ? `<figure><img src="${esc(resolveSrc(b.src))}" alt="${esc(b.alt)}" style="max-width:${pct}"></figure>`
                  : `<div class="img-empty" data-drop="image">${icon("image")}<span class="text-body">Kéo thả ảnh vào đây hoặc</span>
                       <button class="uu-btn uu-btn--base uu-interactive tb-neutral-outline" data-pick="image">${icon("upload")}Chọn ảnh</button></div>`}
          ${b.src ? `<div class="img-options">
            <div class="uu-fieldset"><span class="uu-label">Cỡ ảnh</span><div class="uu-segmented" role="tablist" aria-label="Cỡ ảnh">${sizeSeg}</div></div>
            <div class="uu-fieldset"><label class="uu-label" for="alt${i}">Mô tả ảnh <span class="uu-label__suffix">∙ cho Google và người khiếm thị</span></label>
              <div class="uu-field"><input id="alt${i}" data-field="alt" value="${esc(b.alt)}" placeholder="Ảnh này nói về gì?"></div></div>
            <button class="uu-btn uu-btn--base uu-interactive tb-neutral-outline" data-pick="image">${icon("upload")}Đổi ảnh</button>
          </div>` : ""}
        </div>`;
      }
      case "summary": return `${head}<div class="summary-box text-body">
          ${contentEditable("strong", "title", esc(b.title), "Tiêu đề hộp, ví dụ Tóm tắt hồi 4", 'class="text-title-base"')}
          ${contentEditable("p", "text", mdInlineToHtml(b.text), "Viết tóm tắt ngắn gọn ở đây…")}
        </div></div>`;
      case "table": return `${head}<div class="info-edit">
          ${b.rows.map((r, k) => `<div class="info-edit__row" data-row="${k}">
            <div class="uu-field"><input data-col="key" value="${esc(r.key)}" placeholder="Tên mục" aria-label="Tên mục hàng ${k + 1}"></div>
            <div class="uu-field uu-field--area"><textarea data-col="values" rows="2" placeholder="Mỗi dòng một ý" aria-label="Nội dung hàng ${k + 1}">${esc(r.values.join("\n"))}</textarea></div>
            <button class="uu-btn uu-iconbtn uu-iconbtn--sm uu-interactive tb-neutral-ghost" data-row-remove="${k}" aria-label="Xoá hàng ${k + 1}">${icon("circle-minus")}</button>
          </div>`).join("")}
          <div><button class="uu-btn uu-btn--sm uu-interactive tb-neutral-ghost" data-row-add>${icon("circle-plus")}Thêm hàng</button></div>
        </div></div>`;
      case "html": return `${head}<div class="html-block"><span class="hint text-caption">Khối nâng cao (HTML). Chỉ sửa nếu biết mình đang làm gì.</span>
          <textarea data-field="html" spellcheck="false">${esc(b.html)}</textarea></div></div>`;
      default: return "";
    }
  }

  function blockPreview(b) {
    switch (b.type) {
      case "paragraph": return b.text.trim() ? `<div class="block"><p class="text-body">${mdInlineToHtml(b.text)}</p></div>` : "";
      case "heading": return b.text.trim() ? `<div class="block"><h2>${esc(b.text)}</h2></div>` : "";
      case "subheading": return b.text.trim() ? `<div class="block"><h3>${esc(b.text)}</h3></div>` : "";
      case "list": { const t = b.ordered ? "ol" : "ul"; return `<div class="block"><${t} class="text-body">${b.items.filter((x) => x.trim()).map((x) => `<li>${mdInlineToHtml(x)}</li>`).join("")}</${t}></div>`; }
      case "image": { const pct = { 200: "25%", 400: "50%", 500: "62%", 600: "75%" }[b.size] || "100%"; return b.src ? `<div class="block"><figure><img src="${esc(resolveSrc(b.src))}" alt="${esc(b.alt)}" style="max-width:${pct}"></figure></div>` : ""; }
      case "summary": return `<div class="block"><div class="summary-box text-body"><strong class="text-title-base">${esc(b.title || "Tóm tắt")}</strong><p>${mdInlineToHtml(b.text)}</p></div></div>`;
      case "table": return `<div class="block text-body">${tableHtml(b.rows)}</div>`;
      case "html": return `<div class="block">${b.html}</div>`;
      default: return "";
    }
  }

  // Đọc lại mọi thứ người dùng đã gõ từ DOM vào state.editor
  function collect() {
    const ed = state.editor;
    if (!ed || ed.mode !== "edit") return;
    const val = (id) => ($("#" + id) ? $("#" + id).value : undefined);
    const m = ed.meta;
    if (val("fTitle") !== undefined) m.title = val("fTitle");
    m.series = val("fSeries") ?? m.series;
    m.episode = val("fEpisode") ?? m.episode;
    m.date = val("fDate") ?? m.date;
    m.description = val("fDesc") ?? m.description;
    m.next_note = val("fNext") ?? m.next_note;
    $$("#canvas .block").forEach((el) => {
      const b = ed.blocks[Number(el.dataset.i)];
      if (!b) return;
      const f = (name) => el.querySelector(`[data-field="${name}"]`);
      if (b.type === "paragraph") b.text = htmlToMdInline(f("text")).replace(/\n+$/, "");
      else if (b.type === "heading" || b.type === "subheading") b.text = f("text").textContent.trim();
      else if (b.type === "list") b.items = $$("li", f("items")).map((li) => htmlToMdInline(li).replace(/\n/g, " ").trim());
      else if (b.type === "image" && f("alt")) b.alt = f("alt").value;
      else if (b.type === "summary") { b.title = f("title").textContent.trim(); b.text = htmlToMdInline(f("text")).trim(); }
      else if (b.type === "table") b.rows = $$(".info-edit__row", el).map((r) => ({
        key: r.querySelector('[data-col="key"]').value,
        values: r.querySelector('[data-col="values"]').value.split("\n").map((x) => x.trim()).filter(Boolean),
      }));
      else if (b.type === "html") b.html = f("html").value;
    });
  }

  function markDirty() {
    const ed = state.editor;
    if (!ed) return;
    ed.dirty = true;
    const st = $("#edStatus");
    if (st) st.outerHTML = editorStatus(ed);
    scheduleBackup();
  }

  let backupTimer = null;
  function scheduleBackup() {
    clearTimeout(backupTimer);
    backupTimer = setTimeout(() => {
      const ed = state.editor;
      if (!ed || !ed.dirty) return;
      collect();
      backup.set(ed.slug, { content: currentContent(), time: timeNow() });
    }, 1500);
  }

  function rerender(focusIndex) {
    renderEditor();
    if (focusIndex !== undefined) {
      const el = $(`#canvas .block[data-i="${focusIndex}"] [contenteditable], #canvas .block[data-i="${focusIndex}"] input, #canvas .block[data-i="${focusIndex}"] textarea`);
      if (el) { el.focus(); placeCaretAtStart(el); }
    }
  }

  function placeCaretAtStart(el) {
    if (!el.isContentEditable) return;
    const r = document.createRange();
    r.setStart(el, 0);
    r.collapse(true);
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }

  function newBlock(type) {
    switch (type) {
      case "list": return { type, ordered: false, items: [""] };
      case "image": return { type, alt: "", size: "full", src: "" };
      case "summary": return { type, title: state.editor.meta.episode ? `Tóm tắt ${state.editor.meta.episode.toLowerCase()}` : "Tóm tắt", text: "" };
      case "table": return { type, rows: [{ key: "", values: [] }, { key: "", values: [] }] };
      default: return { type, text: "" };
    }
  }

  function insertBlock(type, after) {
    collect();
    const ed = state.editor;
    const at = after >= 0 ? after + 1 : ed.blocks.length;
    ed.blocks.splice(at, 0, newBlock(type));
    ed.selected = at;
    markDirty();
    rerender(at);
    if (type === "image") pickFor({ kind: "image", index: at });
  }

  // --- ảnh ---
  function pickFile() {
    return new Promise((resolve) => {
      const fp = $("#filePicker");
      fp.value = "";
      fp.onchange = () => resolve(fp.files[0] || null);
      fp.click();
    });
  }

  async function prepareImage(file) {
    const ext0 = { "image/png": "png", "image/gif": "gif", "image/webp": "webp" }[file.type] || "jpg";
    if (ext0 === "gif") return { blob: file, ext: "gif" };
    const bmp = await createImageBitmap(file);
    const MAX = 1600;
    if (bmp.width <= MAX && file.size <= 800 * 1024) return { blob: file, ext: ext0 };
    const scale = Math.min(1, MAX / bmp.width);
    const c = document.createElement("canvas");
    c.width = Math.round(bmp.width * scale);
    c.height = Math.round(bmp.height * scale);
    c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
    const type = ext0 === "png" ? "image/png" : "image/jpeg";
    const blob = await new Promise((r) => c.toBlob(r, type, 0.85));
    return { blob, ext: type === "image/png" ? "png" : "jpg" };
  }

  const blobToBase64 = (blob) => new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(",")[1]);
    r.onerror = () => reject(new Error("Không đọc được ảnh"));
    r.readAsDataURL(blob);
  });

  async function uploadImage(file) {
    if (!file) return null;
    if (!/^image\/(png|jpeg|webp|gif)$/.test(file.type)) throw new Error("Chỉ nhận ảnh PNG, JPG, WebP hoặc GIF");
    const ed = state.editor;
    const { blob, ext } = await prepareImage(file);
    if (blob.size > 4 * 1024 * 1024) throw new Error("Ảnh vẫn lớn hơn 4 MB sau khi thu nhỏ, chọn ảnh khác nhé");
    const base = ed.slug || slugify(plainTitle(ed.meta.title)) || "anh";
    const path = `assets/uploads/${base}-${Date.now().toString(36)}.${ext}`;
    toast("Đang tải ảnh lên…");
    if (!DEMO) await api("PUT", "/file", { path, base64: await blobToBase64(blob), message: `Tải ảnh ${path.split("/").pop()}` });
    localPreview[path] = URL.createObjectURL(blob);
    toast(DEMO ? "Chế độ thử: ảnh chỉ hiện trên máy này." : "Đã tải ảnh lên.", { type: "positive" });
    return path;
  }

  async function pickFor(target, file) {
    try {
      const f = file || (await pickFile());
      if (!f) return;
      collect();
      const path = await uploadImage(f);
      if (!path) return;
      const ed = state.editor;
      if (target.kind === "cover") {
        ed.meta.cover = path;
        if (!ed.meta.cover_alt) ed.meta.cover_alt = postLabel(ed.meta);
        delete ed.errors.cover;
      } else {
        const b = ed.blocks[target.index];
        b.src = path;
        if (!b.alt) b.alt = f.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
      }
      markDirty();
      renderEditor();
    } catch (e) { handleError(e); }
  }

  // --- lưu ---
  function validate(publishing) {
    const m = state.editor.meta;
    const errors = {};
    if (!plainTitle(m.title)) errors.title = "Nhập tiêu đề bài viết";
    if (publishing) {
      if (!String(m.episode || "").trim()) errors.episode = "Nhập hồi, ví dụ Hồi 4";
      if (!m.cover) errors.cover = "Chọn ảnh bìa trước khi đăng";
    }
    state.editor.errors = errors;
    return !Object.keys(errors).length;
  }

  async function save(kind) {
    collect();
    const ed = state.editor;
    const publishing = kind === "publish" || kind === "update";
    if (!validate(publishing)) {
      renderEditor();
      toast("Còn vài ô cần điền trước khi " + (publishing ? "đăng" : "lưu") + ".", { type: "negative" });
      return;
    }
    if (kind === "publish") {
      const ok = await confirmDialog({ title: "Đăng bài lên website?",
        text: `“${postLabel(ed.meta)}” sẽ hiện trên uucreative.co sau khoảng 1 phút, ở đầu trang chủ và trang Blog.`, ok: "Đăng bài", cancel: "Để sau" });
      if (!ok) return;
    }
    const m = ed.meta;
    if (ed.isNew) { ed.slug = makeSlug(m.title, m.episode); ed.path = `posts/${ed.slug}.md`; }
    if (kind === "publish") { m.draft = false; if (!m.date) m.date = today(); }
    if (kind === "draft") m.draft = true;
    if (!m.cover_alt && m.cover) m.cover_alt = postLabel(m);

    const content = currentContent();
    const label = postLabel(m);
    const message = kind === "publish" ? `Đăng bài ${label}` : kind === "update" ? `Cập nhật bài ${label}` : `Lưu nháp ${label}`;
    $$(".editor-bar [data-save]").forEach((b) => (b.disabled = true));
    try {
      const res = await api("PUT", "/file", { path: ed.path, content, sha: ed.sha || undefined, message });
      const wasNew = ed.isNew;
      ed.sha = res.sha;
      ed.isNew = false;
      ed.dirty = false;
      ed.savedAt = timeNow();
      backup.del(wasNew ? "" : ed.slug);
      backup.del(ed.slug);
      const fresh = postFromFile({ path: ed.path, sha: res.sha, content });
      const idx = state.posts.findIndex((p) => p.slug === ed.slug);
      if (idx >= 0) state.posts[idx] = fresh; else state.posts.push(fresh);
      if (wasNew) history.replaceState(null, "", `#/edit/${ed.slug}`);
      renderEditor();
      if (kind === "draft") toast(DEMO ? "Chế độ thử: đã lưu tạm trên máy, chưa lên website." : "Đã lưu nháp. Bài chưa hiện trên website.");
      else toast(DEMO ? "Chế độ thử: không đăng thật." : kind === "publish" ? "Đã đăng! Bài sẽ hiện trên web sau khoảng 1 phút." : "Đã cập nhật! Website đổi sau khoảng 1 phút.",
        { type: "positive", actionText: DEMO ? "" : "Xem bài", actionHref: postUrl(ed.slug) });
    } catch (e) {
      $$(".editor-bar [data-save]").forEach((b) => (b.disabled = false));
      handleError(e);
    }
  }

  // =====================================================================
  // Sự kiện
  // =====================================================================
  document.addEventListener("click", async (e) => {
    const t = e.target;
    if (!t.closest("#rowMenu") && !t.closest("[data-row-menu]")) closeRowMenu();
    if (t.closest("#toastClose")) { $("#toast").hidden = true; return; }

    const rm = t.closest("[data-row-menu]");
    if (rm) { const menu = $("#rowMenu"); if (!menu.hidden && menu.dataset.slug === rm.dataset.rowMenu) closeRowMenu(); else openRowMenu(rm, rm.dataset.rowMenu); return; }
    const act = t.closest("#rowMenu [data-act]");
    if (act) { rowAction(act.dataset.act, $("#rowMenu").dataset.slug); return; }

    const chip = t.closest("[data-filter]");
    if (chip) { state.filter = chip.dataset.filter; renderList(); return; }

    // điều hướng ra khỏi trình soạn khi còn thay đổi chưa lưu
    const link = t.closest('a[href^="#/"]');
    if (link && state.editor) {
      collect();
      if (state.editor.dirty) {
        e.preventDefault();
        const ok = await confirmDialog({ title: "Rời trang khi chưa lưu?", text: "Thay đổi vẫn được giữ trên máy này và sẽ được hỏi khôi phục khi mở lại bài.", ok: "Rời trang", cancel: "Ở lại" });
        if (ok) { state.editor.dirty = false; location.hash = link.getAttribute("href"); }
        return;
      }
    }

    const ed = state.editor;
    if (!ed) return;
    const mode = t.closest("[data-mode]");
    if (mode) { collect(); ed.mode = mode.dataset.mode; renderEditor(); return; }
    const sv = t.closest("[data-save]");
    if (sv) { save(sv.dataset.save); return; }
    const ins = t.closest("[data-insert]");
    if (ins) { insertBlock(ins.dataset.insert, ed.selected); return; }
    const pk = t.closest("[data-pick]");
    if (pk) {
      const blockEl = pk.closest(".block");
      pickFor(pk.dataset.pick === "cover" ? { kind: "cover" } : { kind: "image", index: Number(blockEl.dataset.i) });
      return;
    }

    const blockEl = t.closest("#canvas .block");
    if (!blockEl) return;
    const i = Number(blockEl.dataset.i);
    const b = ed.blocks[i];
    if (t.closest("[data-move]")) {
      collect();
      const j = i + Number(t.closest("[data-move]").dataset.move);
      if (j < 0 || j >= ed.blocks.length) return;
      [ed.blocks[i], ed.blocks[j]] = [ed.blocks[j], ed.blocks[i]];
      ed.selected = j;
      markDirty();
      renderEditor();
      return;
    }
    if (t.closest("[data-remove]")) {
      collect();
      const hasContent = serializeBody([b]).trim();
      if (hasContent && !(await confirmDialog({ title: `Xoá khối ${BLOCK_LABEL[b.type].toLowerCase()} này?`, text: "Nội dung trong khối sẽ mất.", ok: "Xoá khối", danger: true }))) return;
      ed.blocks.splice(i, 1);
      if (!ed.blocks.length) ed.blocks.push({ type: "paragraph", text: "" });
      ed.selected = Math.min(i, ed.blocks.length - 1);
      markDirty();
      renderEditor();
      return;
    }
    const size = t.closest("[data-size]");
    if (size) { collect(); b.size = size.dataset.size; markDirty(); renderEditor(); return; }
    if (t.closest("[data-row-add]")) { collect(); b.rows.push({ key: "", values: [] }); markDirty(); rerender(); return; }
    const rr = t.closest("[data-row-remove]");
    if (rr) { collect(); b.rows.splice(Number(rr.dataset.rowRemove), 1); markDirty(); renderEditor(); return; }

    if (ed.selected !== i) {
      ed.selected = i;
      $$("#canvas .block.is-selected").forEach((x) => x.classList.remove("is-selected"));
      blockEl.classList.add("is-selected");
      const lbl = $(".inserter__label");
      if (lbl) lbl.textContent = "Thêm khối dưới khối đang chọn:";
    }
  });

  document.addEventListener("focusin", (e) => {
    const blockEl = e.target.closest && e.target.closest("#canvas .block");
    if (!blockEl || !state.editor) return;
    const i = Number(blockEl.dataset.i);
    if (state.editor.selected === i) return;
    state.editor.selected = i;
    $$("#canvas .block.is-selected").forEach((x) => x.classList.remove("is-selected"));
    blockEl.classList.add("is-selected");
  });

  document.addEventListener("input", (e) => {
    if (!state.editor || !e.target.closest(".editor-body")) return;
    if (e.target.id === "fDesc") $("#descCount").textContent = `(${e.target.value.length}/160)`;
    markDirty();
  });

  // Dán: chỉ lấy chữ thuần, không kéo theo định dạng lạ từ Word/Google Docs
  document.addEventListener("paste", (e) => {
    const ce = e.target.closest && e.target.closest("#canvas [contenteditable]");
    if (!ce) return;
    const file = [...(e.clipboardData?.files || [])].find((f) => f.type.startsWith("image/"));
    if (file) { e.preventDefault(); toast("Muốn chèn ảnh thì dùng khối Hình ảnh nhé."); return; }
    e.preventDefault();
    document.execCommand("insertText", false, e.clipboardData.getData("text/plain"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeRowMenu();
    const ed = state.editor;
    if (!ed) return;
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      save(!ed.isNew && !ed.meta.draft ? "update" : "draft");
      return;
    }
    const ce = e.target.closest && e.target.closest("#canvas [contenteditable]");
    if (!ce || e.key !== "Enter" || e.shiftKey) return;
    const blockEl = ce.closest(".block");
    const i = Number(blockEl.dataset.i);
    const b = ed.blocks[i];
    if (b.type === "heading" || b.type === "subheading") {
      e.preventDefault();
      insertBlock("paragraph", i);
    } else if (b.type === "paragraph") {
      e.preventDefault();
      // tách đoạn tại vị trí con trỏ: phần sau con trỏ thành đoạn mới
      const sel = getSelection();
      const r = sel.getRangeAt(0);
      const tail = document.createRange();
      tail.setStart(r.endContainer, r.endOffset);
      tail.setEnd(ce, ce.childNodes.length);
      const holder = document.createElement("div");
      holder.appendChild(tail.extractContents());
      collect();
      ed.blocks.splice(i + 1, 0, { type: "paragraph", text: htmlToMdInline(holder).replace(/^\s+/, "") });
      ed.selected = i + 1;
      markDirty();
      rerender(i + 1);
    }
  });

  document.addEventListener("dragover", (e) => {
    const dz = e.target.closest && e.target.closest("[data-drop]");
    if (!dz) return;
    e.preventDefault();
    dz.classList.add("is-dragover");
  });
  document.addEventListener("dragleave", (e) => { const dz = e.target.closest && e.target.closest("[data-drop]"); if (dz) dz.classList.remove("is-dragover"); });
  document.addEventListener("drop", (e) => {
    const dz = e.target.closest && e.target.closest("[data-drop]");
    if (!dz) return;
    e.preventDefault();
    dz.classList.remove("is-dragover");
    const file = e.dataTransfer.files[0];
    if (!file) return;
    pickFor(dz.dataset.drop === "cover" ? { kind: "cover" } : { kind: "image", index: Number(dz.closest(".block").dataset.i) }, file);
  });

  addEventListener("beforeunload", (e) => {
    if (state.editor && state.editor.dirty) { e.preventDefault(); e.returnValue = ""; }
  });

  // =====================================================================
  // Điều hướng
  // =====================================================================
  async function route() {
    if ($("#screenApp").hidden) return;
    closeRowMenu();
    const h = location.hash || "#/";
    const edit = h.match(/^#\/edit\/([a-z0-9-]+)$/);
    if (edit) return openEditor(edit[1]);
    if (h === "#/new") return openEditor(null);
    renderList();
  }
  addEventListener("hashchange", route);

  async function startApp() {
    showScreen("app");
    $("#accountEmail").textContent = state.email || "";
    $("#logoutBtn").hidden = DEMO;
    main.innerHTML = `<p class="loading-line text-body">Đang tải danh sách bài…</p>`;
    try {
      await loadPosts();
      route();
    } catch (e) {
      handleError(e);
      main.innerHTML = `<div class="page"><p class="empty text-body">Chưa tải được danh sách bài. <button class="uu-btn uu-btn--sm uu-interactive tb-accent-ghost" id="retry">${icon("arrow-rotate-clockwise")}Thử lại</button></p></div>`;
      $("#retry").onclick = startApp;
    }
  }

  $("#loginBtn").addEventListener("click", login);
  $("#logoutBtn").addEventListener("click", logout);
  $("#demoBanner").hidden = !DEMO;

  const saved = store.get(SESSION_KEY);
  if (DEMO) { state.email = "Chế độ thử"; startApp(); }
  else if (saved && saved.exp > Date.now()) { state.token = saved.token; state.email = saved.email; startApp(); }
  else showScreen("login");

  // cho kiểm thử round-trip Markdown từ console
  window.__uuPortal = { parseBody, serializeBody, parseFrontMatter, toFrontMatter, mdInlineToHtml, htmlToMdInline };
})();
