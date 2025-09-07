const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
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