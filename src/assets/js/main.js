(function menuManagement () {
  const nav = document.getElementById('nav');
  
  function closeMenu () {
    nav.classList.remove('page-nav--open');
  }
  
  function toggleMenu () {
    if (nav.classList.contains('page-nav--open')) {
      closeMenu();
    } else {
      nav.classList.add('page-nav--open');
    }
  }
  
  document.getElementById('nav-open').addEventListener('click', toggleMenu);
  document.getElementById('page-wrapper').addEventListener('click', closeMenu);
})();