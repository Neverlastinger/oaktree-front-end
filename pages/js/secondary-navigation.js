(function() {
  const element = document.getElementById('investors-navigation');
  const submenu = document.getElementById('investors-navigation-content');

  const openMenu = () => {
    submenu.style.display = 'block';
  }

  const closeMenu = () => {
    submenu.style.display = 'none';
  }

  element.addEventListener('focus', () => {
    openMenu();
  });

  element.addEventListener('blur', () => {
    setTimeout(() => {
      closeMenu();
    }, 200);
  });
})();
