
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn   = document.getElementById('menu-toggle');  
  const mobileMenu= document.getElementById('mobile-menu');   
  const subBtn    = document.getElementById('submenu-toggle'); 
  const submenu   = document.getElementById('submenu');       

  if (!menuBtn || !mobileMenu) return; 
  function openMenu() {
    mobileMenu.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded','true');
  }
  function closeMenu() {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded','false');
  }

  menuBtn.setAttribute('aria-controls','mobile-menu');
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
  });

  if (subBtn && submenu) {
    subBtn.setAttribute('aria-controls','submenu');
    subBtn.setAttribute('aria-expanded','false');

    subBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !submenu.classList.contains('hidden');
      submenu.classList.toggle('hidden');

      if (!isOpen) {
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        subBtn.setAttribute('aria-expanded','true');
      } else {
        submenu.style.maxHeight = '0px';
        subBtn.setAttribute('aria-expanded','false');
      }
    });
  }

  document.addEventListener('click', (e) => {
    const header = document.querySelector('header');
    if (header && !header.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    
  });
