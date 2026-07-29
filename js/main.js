// Mobile menu overlay (clone của trang /menu trong Figma)
(function () {
  var menu = document.getElementById('menu');
  var openBtn = document.querySelector('[data-menu-open]');
  var closeBtn = document.querySelector('[data-menu-close]');
  if (!menu || !openBtn || !closeBtn) return;

  function open() {
    menu.classList.add('is-open');
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function close() {
    menu.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) close();
  });
  // Đóng menu khi chọn một link
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });
})();
