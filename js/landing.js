// Landing UU Design System: chuyển động, đổi brand cả trang, dải tên chạy chéo, giải phẫu component.
// Người dùng bật "giảm chuyển động" thì không thêm .ds-motion, mọi thứ hiện tĩnh.
(function () {
  var motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (motion) document.documentElement.classList.add('ds-motion');

  // ---------- Hiện dần + đếm số khi cuộn tới ----------
  function countUp(el) {
    var end = Number(el.dataset.count), start = performance.now(), dur = 1200;
    function step(t) {
      var p = Math.min(1, (t - start) / dur), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var seen = function (el) {
    el.classList.add('is-in');
    if (motion) el.querySelectorAll('[data-count]').forEach(countUp);
  };
  var watch = document.querySelectorAll('.ds-reveal, [data-observe]');
  if ('IntersectionObserver' in window && motion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { seen(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    watch.forEach(function (el) { io.observe(el); });
  } else {
    watch.forEach(function (el) { el.classList.add('is-in'); });
  }

  // ---------- Dải tên chạy chéo: nhân bản hàng do build.py sinh thành hàng chữ viền chạy ngược ----------
  var row = document.querySelector('.ds-band__row');
  if (row) {
    var row2 = row.cloneNode(true);
    row2.classList.add('ds-band__row--outline');
    row.parentNode.appendChild(row2);
  }

  // ---------- Đổi brand cả trang: chỉ đổi data-theme trên <html>, component không sửa gì ----------
  var root = document.documentElement;
  var CONTRAST = { uu: { name: 'UU', ratio: '7.49:1', pct: '35.7%', aaa: true }, default: { name: 'Default', ratio: '6.29:1', pct: '30%', aaa: false } };
  var setBrand = function (brand) {
    var c = CONTRAST[brand];
    if (motion) { root.classList.add('ds-brand-anim'); setTimeout(function () { root.classList.remove('ds-brand-anim'); }, 500); }
    root.dataset.theme = brand;
    document.querySelectorAll('[data-brand]').forEach(function (b) {
      var on = b.dataset.brand === brand;
      b.setAttribute('aria-selected', on); b.classList.toggle('uu-is-active', on);
    });
    document.querySelectorAll('[data-brand-name]').forEach(function (n) { n.textContent = c.name; });
    document.querySelectorAll('[data-ratio]').forEach(function (n) { n.textContent = c.ratio; });
    document.querySelectorAll('[data-meter]').forEach(function (n) { n.style.width = c.pct; });
    document.querySelectorAll('[data-aaa]').forEach(function (n) { n.hidden = !c.aaa; });
  };
  document.addEventListener('click', function (e) {
    var seg = e.target.closest('[data-brand]');
    if (seg) { setBrand(seg.dataset.brand); return; }
    var t = e.target.closest('[data-toggle]');
    if (t) { var attr = 'aria-' + t.dataset.toggle; t.setAttribute(attr, t.getAttribute(attr) !== 'true'); }
  });

  // ---------- Giải phẫu component: đo component thật rồi vẽ số + đường đo ----------
  var SVG = 'http://www.w3.org/2000/svg';
  var SPECS = {
    button: {
      pins: [['.a-root', 'left', 'tl'], ['.a-label', 'top', 't'], ['.a-icon', 'top', 'tr'], ['.a-root', 'right', 'br']],
      boxes: ['.a-root'],
      dims: [['v', '.a-root', null, 'left'], ['h', '.a-root:left', '.a-label:left', 'below'], ['h', '.a-label:right', '.a-icon:left', 'below']],
    },
    input: {
      pins: [['.a-labeltext', 'top', 'tl'], ['.a-suffix', 'top', 'tr'], ['.a-field', 'right', 'r'], ['.a-icon', 'left', 'l', 78], ['.a-error', 'bottom', 'b']],
      boxes: ['.a-field', '.a-error'],
      dims: [['v', '.a-field', null, 'left', 420], ['vgap', '.a-label', '.a-field', 'right'], ['vgap', '.a-field', '.a-error', 'right']],
    },
    switch: {
      pins: [['.a-root', 'left', 'l'], ['.a-knob', 'top', 't', 100], ['.a-icon', 'bottom', 'b', 100]],
      boxes: ['.a-root', '.a-knob'],
      dims: [['v', '.a-root', null, 'right'], ['hsize', '.a-root', null, 'below'], ['hsize', '.a-knob', null, 'above']],
    },
  };

  function el(tag, attrs, parent) {
    var n = document.createElementNS(SVG, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    parent.appendChild(n);
    return n;
  }

  function drawAnatomy(panel) {
    var stage = panel.querySelector('.ds-stage'), svg = stage.querySelector('.ds-stage__svg'), zoomEl = stage.querySelector('.ds-stage__zoom');
    var spec = SPECS[panel.dataset.anatPanel];
    if (!spec || !stage.offsetWidth) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var S = stage.getBoundingClientRect(), z = parseFloat(getComputedStyle(zoomEl).zoom) || 1, d = 0;
    // khoảng cách đường đo / đường dẫn co theo độ phóng (2× desktop, nhỏ hơn trên mobile)
    var k = Math.max(0.6, Math.min(1, z / 2)), G = 22 * k;
    var rect = function (sel) { var a = stage.querySelector(sel).getBoundingClientRect(); return { x: a.left - S.left, y: a.top - S.top, w: a.width, h: a.height }; };
    // ':inner' = mép trong của viền (lề trong của ô nhập tính từ trong viền 1px, như spec)
    var edge = function (ref) {
      var p = ref.split(':'), r = rect(p[0]);
      if (p[1] === 'right') return r.x + r.w;
      if (p[1] === 'inner') return r.x + (parseFloat(getComputedStyle(stage.querySelector(p[0])).borderLeftWidth) || 0) * z;
      return r.x;
    };
    var px = function (len) { return Math.round(len / z); };
    var label = function (x, y, text) {
      var g = el('g', { style: '--d:' + d++ }, svg);
      el('rect', { class: 'dim-bg', x: x - 13, y: y - 9, width: 26, height: 18, rx: 4 }, g);
      el('text', { class: 'dim-text', x: x, y: y }, g).textContent = text;
    };
    // khung nét đứt quanh phần chính
    spec.boxes.forEach(function (sel) {
      var r = rect(sel);
      el('rect', { class: 'box', x: r.x - 4, y: r.y - 4, width: r.w + 8, height: r.h + 8, rx: 8, style: '--d:' + d++ }, svg);
    });
    // đường đo
    spec.dims.forEach(function (dm) {
      if (dm[4] && S.width < dm[4]) return; // khung hẹp hơn mức này thì bỏ đường đo, chú thích bên cạnh vẫn có số
      var g = el('g', { style: '--d:' + d++ }, svg), r, x, y, x1, x2, y1, y2;
      if (dm[0] === 'v') {
        r = rect(dm[1]); x = dm[3] === 'left' ? r.x - G : r.x + r.w + G; y1 = r.y; y2 = r.y + r.h;
        el('line', { class: 'dim', x1: x, y1: y1, x2: x, y2: y2 }, g);
        el('line', { class: 'dim', x1: x - 5, y1: y1, x2: x + 5, y2: y1 }, g);
        el('line', { class: 'dim', x1: x - 5, y1: y2, x2: x + 5, y2: y2 }, g);
        label(dm[3] === 'left' ? x : x + 16, (y1 + y2) / 2, px(r.h));
      } else if (dm[0] === 'vgap') {
        var a = rect(dm[1]), b = rect(dm[2]); x = Math.max(a.x + a.w, b.x + b.w) + G; y1 = a.y + a.h; y2 = b.y;
        el('line', { class: 'dim', x1: x - 5, y1: y1, x2: x + 5, y2: y1 }, g);
        el('line', { class: 'dim', x1: x - 5, y1: y2, x2: x + 5, y2: y2 }, g);
        label(x + 16 * k + 4, (y1 + y2) / 2, px(y2 - y1));
      } else if (dm[0] === 'h' || dm[0] === 'hsize') {
        if (dm[0] === 'h') { x1 = edge(dm[1]); x2 = edge(dm[2]); r = rect(dm[1].split(':')[0]); }
        else { r = rect(dm[1]); x1 = r.x; x2 = r.x + r.w; }
        y = dm[3] === 'below' ? r.y + r.h + G : r.y - G;
        el('line', { class: 'dim', x1: x1, y1: y, x2: x2, y2: y }, g);
        el('line', { class: 'dim', x1: x1, y1: y - 5, x2: x1, y2: y + 5 }, g);
        el('line', { class: 'dim', x1: x2, y1: y - 5, x2: x2, y2: y + 5 }, g);
        label((x1 + x2) / 2, y + (dm[3] === 'below' ? 14 : -14), px(Math.abs(x2 - x1)));
      }
    });
    // ghim đánh số + đường dẫn tới bộ phận
    spec.pins.forEach(function (pin, i) {
      var r = rect(pin[0]), side = pin[1], ax, ay, off = (pin[3] || 46) * k;
      var pt = { tl: [r.x, r.y], t: [r.x + r.w / 2, r.y], tr: [r.x + r.w, r.y], br: [r.x + r.w, r.y + r.h], r: [r.x + r.w, r.y + r.h / 2],
                 l: [r.x, r.y + r.h / 2], b: [r.x + r.w / 2, r.y + r.h] }[pin[2]];
      ax = pt[0]; ay = pt[1];
      var dir = { left: [-1, 0], right: [1, 0], top: [0, -1], bottom: [0, 1] }[side];
      var cx = ax + dir[0] * off + (side === 'top' || side === 'bottom' ? (pin[2] === 'tl' ? -14 * k : pin[2] === 'tr' ? 14 * k : 0) : 0);
      var cy = ay + dir[1] * off;
      // luôn giữ ghim trong khung, kể cả khi khung hẹp trên mobile
      cx = Math.min(Math.max(cx, 14), S.width - 14); cy = Math.min(Math.max(cy, 14), S.height - 14);
      var g = el('g', { class: 'pin', style: '--d:' + d++ }, svg);
      el('line', { class: 'lead', x1: ax, y1: ay, x2: cx, y2: cy }, g);
      el('circle', { class: 'dot', cx: ax, cy: ay, r: 3 }, g).setAttribute('class', 'dot');
      el('circle', { cx: cx, cy: cy, r: 12 }, g);
      el('text', { x: cx, y: cy }, g).textContent = i + 1;
    });
  }

  var anatomy = document.getElementById('anatomy');
  if (anatomy) {
    var panels = anatomy.querySelectorAll('[data-anat-panel]');
    var active = function () { return anatomy.querySelector('[data-anat-panel]:not([hidden])'); };
    anatomy.querySelector('[role="tablist"]').addEventListener('click', function (e) {
      var b = e.target.closest('[data-anat]'); if (!b) return;
      anatomy.querySelectorAll('[data-anat]').forEach(function (x) { var on = x === b; x.setAttribute('aria-selected', on); x.classList.toggle('uu-is-active', on); });
      panels.forEach(function (p) { p.hidden = p.dataset.anatPanel !== b.dataset.anat; });
      drawAnatomy(active());
    });
    var redraw = function () { drawAnatomy(active()); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(redraw); else redraw();
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(redraw, 150); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) redraw(); }); }, { threshold: 0.3 }).observe(anatomy);
    }
  }
})();
