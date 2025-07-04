//con số ấn tượng
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const isPercent = el.getAttribute('data-type') === "percent";

  const speed = 200;
  const increment = Math.ceil(target / speed);
  let count = 0;

  function update() {
    count += increment;
    if (count >= target) {
      el.textContent = isPercent ? `${target}%` : `${target}+`;
    } else {
      el.textContent = isPercent ? `${count}%` : `${count}+`;
      requestAnimationFrame(update);
    }
  }

  update();
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCounters();
});


 // Scroll-triggered animation
  const fadeElements = document.querySelectorAll(".fade-in-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));

  // Lightbox
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxImage = document.getElementById("lightboxImage");

  document.querySelectorAll(".lightbox-trigger").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightboxOverlay.classList.remove("hidden");
    });
  });

  lightboxOverlay.addEventListener("click", () => {
    lightboxOverlay.classList.add("hidden");
  });

  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  });

//introduce
  const faders = document.querySelectorAll('.fade-in-up');
      const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      }, { threshold: 0.2 });

      faders.forEach(el => appearOnScroll.observe(el));

// AOS: Scroll animation
AOS.init({ duration: 1000, once: true });

// VanillaTilt: 3D Tilt
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

// Particles.js: Nền động
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 40 },
    "color": { "value": "#20CFCF" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3 },
    "size": { "value": 4 },
    "line_linked": { "enable": true, "distance": 120, "color": "#20CFCF", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" } },
    "modes": { "repulse": { "distance": 100 } }
  }
});

//phản hồi khách hàng
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,          
  simulateTouch: true,       
  allowTouchMove: true,     
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});