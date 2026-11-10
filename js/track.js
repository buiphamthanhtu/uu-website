// Đếm lượt xem cho uucreative.co (trang chủ, blog, landing UU DS, Storybook /uu-ds/).
// Chỉ gửi: đường dẫn trang, trang trước đó (referrer), utm_source, tên nút được bấm.
// Không cookie, không định danh người xem. Worker cộng 1 vào bộ đếm theo ngày (worker/blog-api.js).
// Không đếm: máy chủ khác uucreative.co, trình duyệt tự động, người đã mở portal (localStorage "uu-stats-off").
(function () {
  var ENDPOINT = 'https://uu-blog-api.tu-b13.workers.dev/hit';
  if (location.hostname !== 'uucreative.co' || navigator.webdriver) return;
  try { if (localStorage.getItem('uu-stats-off') === '1') return; } catch (e) {}

  function send(data) {
    var body = JSON.stringify(data);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, body)) return;
    } catch (e) {}
    try { fetch(ENDPOINT, { method: 'POST', body: body, keepalive: true, mode: 'no-cors' }); } catch (e) {}
  }
  var utm = '';
  try { utm = new URLSearchParams(location.search).get('utm_source') || ''; } catch (e) {}

  // ---- Storybook: một trang HTML, đổi trang bằng ?path=… ----
  if (location.pathname.indexOf('/uu-ds') === 0) {
    var last = null, first = true;
    var current = function () {
      try { return new URLSearchParams(location.search).get('path') || ''; } catch (e) { return ''; }
    };
    var check = function () {
      var p = current();
      if (p === last) return;
      last = p;
      send(first ? { k: 'v', p: location.pathname, sb: p, r: document.referrer, u: utm } : { k: 'v', p: location.pathname, sb: p, i: 1 });
      first = false;
    };
    ['pushState', 'replaceState'].forEach(function (m) {
      var orig = history[m];
      history[m] = function () { var r = orig.apply(this, arguments); setTimeout(check, 300); return r; };
    });
    addEventListener('popstate', function () { setTimeout(check, 300); });
    // Storybook tự chuyển tới trang mặc định lúc mở → chờ một nhịp rồi mới đếm trang đầu
    setTimeout(check, 1200);
    return;
  }

  // ---- Trang thường ----
  send({ k: 'v', p: location.pathname, r: document.referrer, u: utm });

  // ---- Landing UU DS: đếm lượt bấm ----
  if (!/^\/(en\/)?design-system/.test(location.pathname)) return;
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('a, button');
    if (!el) return;
    var label = el.getAttribute('data-track');
    if (!label) {
      var href = el.getAttribute('href') || '';
      if (el.hasAttribute('data-brand')) label = 'Đổi brand UU / Default';
      else if (el.closest('.ds-links')) label = 'Link trong danh mục component';
      else if (href.indexOf('uu-ds') !== -1) label = 'Link “' + el.textContent.replace(/\s+/g, ' ').trim().slice(0, 40) + '”';
    }
    if (label) send({ k: 'c', p: location.pathname, l: label });
  }, true);
})();
