// assets/js/menu.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn   = document.getElementById('menu-toggle');   // nút ☰
  const mobileMenu= document.getElementById('mobile-menu');    // khối menu mobile
  const subBtn    = document.getElementById('submenu-toggle'); // nút GIẢI PHÁP
  const submenu   = document.getElementById('submenu');        // danh sách con

  if (!menuBtn || !mobileMenu) return; // thiếu id thì thoát sớm

  // Mở/đóng menu mobile
  function openMenu() {
    mobileMenu.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded','true');
  }
  function closeMenu() {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded','false');
  }

  // Toggle khi bấm ☰
  menuBtn.setAttribute('aria-controls','mobile-menu');
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
  });

  // Toggle submenu “GIẢI PHÁP”
  if (subBtn && submenu) {
    subBtn.setAttribute('aria-controls','submenu');
    subBtn.setAttribute('aria-expanded','false');

    subBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !submenu.classList.contains('hidden');
      submenu.classList.toggle('hidden');

      if (!isOpen) {
        // mở: đo chiều cao để animate mượt
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        subBtn.setAttribute('aria-expanded','true');
      } else {
        // đóng
        submenu.style.maxHeight = '0px';
        subBtn.setAttribute('aria-expanded','false');
      }
    });
  }

  // Đóng menu khi bấm ra ngoài header
  document.addEventListener('click', (e) => {
    const header = document.querySelector('header');
    if (header && !header.contains(e.target)) closeMenu();
  });

  // Đóng bằng phím Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    
  });
