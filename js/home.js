// Trang chủ: hiện dần khi cuộn tới, chữ About sáng từng từ, dải component hai brand.
// Người dùng chọn giảm chuyển động thì không bật .hm-motion, mọi thứ hiện tĩnh.
(function () {
  var root = document.documentElement;
  var motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!motion) return;
  root.classList.add('hm-motion', 'ds-motion');

  // tách đoạn About thành từng từ
  document.querySelectorAll('.hm-words').forEach(function (p) {
    var words = p.textContent.trim().split(/\s+/);
    p.setAttribute('aria-label', p.textContent.trim());
    p.textContent = '';
    words.forEach(function (w, i) {
      var s = document.createElement('span');
      s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--i', i);
      s.textContent = w;
      p.appendChild(s);
      p.appendChild(document.createTextNode(' '));
    });
  });

  // gắn hiệu ứng hiện dần theo nhóm, so le trong nhóm
  [['.intro-grid .card'], ['.hm-ds'], ['.about'], ['.project-grid > *']].forEach(function (g) {
    document.querySelectorAll(g[0]).forEach(function (el, i) {
      el.classList.add('hm-reveal');
      el.style.setProperty('--d', i);
    });
  });

  // dải component: nhân bản một lượt để trượt -50% là vòng lại liền mạch
  document.querySelectorAll('.hm-ds .ds-fl__track').forEach(function (t) {
    Array.prototype.slice.call(t.children).forEach(function (n) { t.appendChild(n.cloneNode(true)); });
  });

  var watch = document.querySelectorAll('.hm-reveal');
  if (!('IntersectionObserver' in window)) { watch.forEach(function (el) { el.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  watch.forEach(function (el) { io.observe(el); });
})();
