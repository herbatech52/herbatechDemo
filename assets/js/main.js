/*const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID_USER = 'YOUR_TEMPLATE_ID_USER';
const EMAILJS_TEMPLATE_ID_COMPANY = 'YOUR_TEMPLATE_ID_COMPANY';
const COMPANY_INBOX = 'contact@herbatech.vn';

const BRAND = {
  name: 'Herbatech',
  site: 'https://www.herbatech.vn',
  logo_url: 'https://www.herbatech.vn/img/logo/Herbatech_logo.png',
  support_email: 'contact@herbatech.vn',
  hotline: '+84 000 000 000',
  address: 'Địa chỉ công ty, Quận/Huyện, Tỉnh/TP, Việt Nam'
};


function animateCounter(el) {
  const t = +el.getAttribute('data-target'), p = el.getAttribute('data-type') === "percent", s = 200, i = Math.ceil(t / s);
  let c = 0;
  (function u() {
    c += i;
    el.textContent = p ? (c >= t ? `${t}%` : `${c}%`) : (c >= t ? `${t}+` : `${c}+`);
    if (c < t) requestAnimationFrame(u);
  })();
}
function initCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    new IntersectionObserver((e, o) => {
      e.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 }).observe(counter);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  initCounters();
  document.querySelectorAll(".fade-in-up").forEach(el => {
    new IntersectionObserver(e => {
      e.forEach(entry => entry.isIntersecting && entry.target.classList.add("show"));
    }, { threshold: 0.1 }).observe(el);
  });
  const lightboxOverlay = document.getElementById("lightboxOverlay"), lightboxImage = document.getElementById("lightboxImage");
  if (lightboxOverlay && lightboxImage) {
    document.querySelectorAll(".lightbox-trigger").forEach(img => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxOverlay.classList.remove("hidden");
      });
    });
    lightboxOverlay.addEventListener("click", () => lightboxOverlay.classList.add("hidden"));
  }
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('shadow-lg', window.scrollY > 50);
  });
  const tabButtons = document.querySelectorAll('#tab-buttons button'), tabPanes = document.querySelectorAll('.tab-pane');
  if (tabButtons.length && tabPanes.length) {
    const defaultTab = tabButtons[0].getAttribute('data-tab');
    tabButtons.forEach(btn => {
      const tab = btn.getAttribute('data-tab'), pane = document.querySelector(`.tab-pane[data-tab="${tab}"]`);
      btn.classList.toggle('bg-gradient-to-r', tab === defaultTab);
      btn.classList.toggle('from-[#20CFCF]', tab === defaultTab);
      btn.classList.toggle('to-[#1ab2b2]', tab === defaultTab);
      btn.classList.toggle('text-white', tab === defaultTab);
      if (pane) {
        pane.classList.toggle('hidden', tab !== defaultTab);
      }
    });
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        tabButtons.forEach(b => {
          b.classList.remove('bg-gradient-to-r', 'from-[#20CFCF]', 'to-[#1ab2b2]', 'text-white');
        });
        btn.classList.add('bg-gradient-to-r', 'from-[#20CFCF]', 'to-[#1ab2b2]', 'text-white');
        tabPanes.forEach(pane => pane.classList.toggle('hidden', pane.getAttribute('data-tab') !== tab));
      });
    });
  }
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 1000, once: true });
  }
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
  }
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: { value: 40 },
        color: { value: "#20CFCF" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 4 },
        line_linked: { enable: true, distance: 120, color: "#20CFCF", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100 } }
      }
    });
  }
  if (typeof Swiper !== 'undefined') {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      simulateTouch: true,
      allowTouchMove: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
    new Swiper(".cultureSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 24,
      loop: true,
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });
  }
  const toggleBtn = document.getElementById('menu-toggle'), mobileMenu = document.getElementById('mobile-menu'), submenuToggle = document.getElementById('submenu-toggle'), submenu = document.getElementById('submenu');
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }
  if (submenuToggle && submenu) {
    submenuToggle.addEventListener('click', () => submenu.classList.toggle('hidden'));
  }
  const modal = document.getElementById("infoModal"), open = document.getElementById("openModal"), close = document.getElementById("closeModal");
  if (open && modal && close) {
    open.addEventListener("click", () => modal.classList.remove("hidden"));
    close.addEventListener("click", () => modal.classList.add("hidden"));
    window.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });
  }
  const section = document.getElementById("hand-scroll-section"), left = document.getElementById("leftHand"), right = document.getElementById("rightHand");
  if (section && left && right) {
    window.addEventListener("scroll", () => {
      const r = section.getBoundingClientRect(), v = r.top < window.innerHeight * 0.8 && r.bottom > 0;
      left.classList.toggle("-translate-x-full", !v);
      right.classList.toggle("translate-x-full", !v);
      
    });
  }
});
*/

/**
 * main.optimized.js
 * - Giảm lag khi cuộn (passive + rAF throttle)
 * - Gom IntersectionObserver dùng chung
 * - Nhẹ hóa AOS, Particles, Swiper
 * - Không thay đổi hành vi tính năng
 */

// ==== Helpers ====
const on = (el, evt, handler, opts) => el && el.addEventListener(evt, handler, opts || false);
const qs  = (sel, ctx=document) => ctx.querySelector(sel);
const qsa = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// rAF throttle cho scroll
function withRAF(fn){
  let ticking = false;
  return function(...args){
    if (!ticking){
      requestAnimationFrame(() => { fn.apply(this, args); ticking = false; });
      ticking = true;
    }
  };
}

// ==== Counters ====
function animateCounter(el){
  const target = +el.getAttribute('data-target');
  const isPercent = el.getAttribute('data-type') === "percent";
  const steps = 200;
  const inc = Math.ceil(target / steps);
  let cur = 0;
  (function step(){
    cur += inc;
    el.textContent = isPercent
      ? (cur >= target ? `${target}%` : `${cur}%`)
      : (cur >= target ? `${target}+` : `${cur}+`);
    if (cur < target) requestAnimationFrame(step);
  })();
}

function initCounters(){
  const counters = qsa('.counter');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach(el => io.observe(el));
}

// ==== Fade-in elements ====
function initFadeIn(){
  const els = qsa('.fade-in-up');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('show');
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

// ==== Navbar shadow on scroll (throttled) ====
function initNavbarShadow(){
  const navbar = qs('#navbar');
  if (!navbar) return;
  const onScroll = withRAF(() => {
    navbar.classList.toggle('shadow-lg', window.scrollY > 50);
  });
  on(window, 'scroll', onScroll, { passive: true });
}

// ==== Tabs ====
function initTabs(){
  const tabButtons = qsa('#tab-buttons button');
  const tabPanes   = qsa('.tab-pane');
  if (!tabButtons.length || !tabPanes.length) return;

  const setActive = (tab) => {
    tabButtons.forEach(b => b.classList.remove('bg-gradient-to-r','from-[#20CFCF]','to-[#1ab2b2]','text-white'));
    const btn = tabButtons.find(b => b.getAttribute('data-tab') === tab);
    if (btn) btn.classList.add('bg-gradient-to-r','from-[#20CFCF]','to-[#1ab2b2]','text-white');
    tabPanes.forEach(p => p.classList.toggle('hidden', p.getAttribute('data-tab') !== tab));
  };

  const defaultTab = tabButtons[0].getAttribute('data-tab');
  setActive(defaultTab);
  tabButtons.forEach(btn => on(btn, 'click', () => setActive(btn.getAttribute('data-tab'))));
}

// ==== AOS ====
function initAOS(){
  if (typeof AOS === 'undefined') return;
  AOS.init({
    duration: 450,
    easing: 'ease-out',
    offset: 80,
    once: true
    // disable: () => window.innerWidth < 768,
  });
}

// ==== VanillaTilt ====
function initTilt(){
  if (typeof VanillaTilt === 'undefined') return;
  VanillaTilt.init(qsa('.tilt-card'), {
    max: 12,
    speed: 400,
    glare: true,
    'max-glare': 0.15
  });
}

// ==== Particles ====
function initParticles(){
  if (typeof particlesJS === 'undefined') return;
  const container = qs('#particles-js');
  if (!container) return;
  particlesJS('particles-js', {
    particles: {
      number: { value: 35 },
      color: { value: '#20CFCF' },
      shape: { type: 'circle' },
      opacity: { value: 0.25 },
      size: { value: 3 },
      line_linked: { enable: true, distance: 110, color: '#20CFCF', opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1.6 }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 100 } }
    },
    retina_detect: true
  });
}

// ==== Swiper ====
function initSwipers(){
  if (typeof Swiper === 'undefined') return;

  if (document.querySelector('.mySwiper')){
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      lazy: true,
      breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
  }

  if (document.querySelector('.cultureSwiper')){
    new Swiper('.cultureSwiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      lazy: true
    });
  }
}

// ==== Mobile menu / submenu ====
function initMenus(){
  const toggleBtn = qs('#menu-toggle');
  const mobileMenu = qs('#mobile-menu');
  const submenuToggle = qs('#submenu-toggle');
  const submenu = qs('#submenu');

  on(toggleBtn, 'click', () => mobileMenu && mobileMenu.classList.toggle('hidden'));
  on(submenuToggle, 'click', () => submenu && submenu.classList.toggle('hidden'));
}

// ==== Modal ====
function initModal(){
  const modal = qs('#infoModal'), openBtn = qs('#openModal'), closeBtn = qs('#closeModal');
  if (!modal || !openBtn || !closeBtn) return;
  on(openBtn, 'click', () => modal.classList.remove('hidden'));
  on(closeBtn, 'click', () => modal.classList.add('hidden'));
  on(window, 'click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
}

// ==== Hand scroll section (throttled) ====
function initHandScroll(){
  const section = qs('#hand-scroll-section');
  const left = qs('#leftHand');
  const right = qs('#rightHand');
  if (!section || !left || !right) return;

  const handler = withRAF(() => {
    const r = section.getBoundingClientRect();
    const visible = r.top < window.innerHeight * 0.8 && r.bottom > 0;
    left.classList.toggle('-translate-x-full', !visible);
    right.classList.toggle('translate-x-full', !visible);
  });
  on(window, 'scroll', handler, { passive: true });
}

// ==== Init ====
document.addEventListener('DOMContentLoaded', () => {
  initCounters();
  initFadeIn();
  initNavbarShadow();
  initTabs();
  initAOS();
  initTilt();
  initParticles();
  initSwipers();
  initMenus();
  initModal();
  initHandScroll();
});
// ==== Mobile menu / submenu ====
(function () {
  const body = document.body;
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const subBtn = document.getElementById('submenu-toggle');
  const submenu = document.getElementById('submenu');

  if (!btn || !menu) return;

  const openMenu = () => {
    menu.classList.remove('hidden');
    body.classList.add('overflow-hidden'); // khóa scroll nền
    btn.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    menu.classList.add('hidden');
    body.classList.remove('overflow-hidden');
    btn.setAttribute('aria-expanded', 'false');
  };
  const toggleMenu = () => menu.classList.contains('hidden') ? openMenu() : closeMenu();

  // Toggle mobile menu
  btn.addEventListener('click', toggleMenu, { passive: true });

  // Đóng khi bấm ngoài (click vào nền trắng overlay)
  menu.addEventListener('click', (e) => {
    // nếu bấm trực tiếp vào overlay (không phải link/button)
    if (e.target === menu) closeMenu();
  });

  // Đóng bằng phím ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Toggle submenu
  if (subBtn && submenu) {
    subBtn.addEventListener('click', () => {
      submenu.classList.toggle('hidden');
      // đổi icon nếu muốn:
      // subBtn.querySelector('i')?.classList.toggle('rotate-180');
    }, { passive: true });
  }
})();



(function () {
  const body     = document.body;
  const btnOpen  = document.getElementById('menu-toggle');
  const btnClose = document.getElementById('menu-close');
  const drawer   = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');

  const subBtn   = document.getElementById('submenu-toggle-mobile');
  const submenu  = document.getElementById('submenu-mobile');
  const caret    = document.getElementById('submenu-caret-mobile');

  if (!btnOpen || !drawer) return;

  const openMenu = () => {
    backdrop.classList.remove('hidden');
    drawer.classList.remove('translate-x-full');
    body.classList.add('overflow-hidden');
    btnOpen.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    body.classList.remove('overflow-hidden');
    btnOpen.setAttribute('aria-expanded', 'false');
  };

  btnOpen.addEventListener('click', openMenu,  { passive: true });
  btnClose?.addEventListener('click', closeMenu, { passive: true });
  backdrop?.addEventListener('click', closeMenu, { passive: true });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  if (subBtn && submenu) {
    subBtn.addEventListener('click', () => {
      submenu.classList.toggle('hidden');
      caret?.classList.toggle('rotate-180');
    }, { passive: true });
  }
})();