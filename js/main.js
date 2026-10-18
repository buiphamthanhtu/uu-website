// Menu mobile = Menu Platform=Sheet của UU DS (bottom sheet + scrim)
(function () {
  var sheet = document.getElementById('menuSheet');
  var openBtn = document.querySelector('[data-menu-open]');
  var closeBtn = document.querySelector('[data-menu-close]');
  if (!sheet || !openBtn || !closeBtn) return;

  function open() {
    sheet.hidden = false;
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function close() {
    if (sheet.hidden) return;
    sheet.hidden = true;
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  // Chạm vào nền mờ ngoài tấm sheet thì đóng
  sheet.addEventListener('click', function (e) { if (e.target === sheet) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  sheet.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
})();
