// main.js (đã sửa)

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

// --- Gộp DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
  initCounters();

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
  if (lightboxOverlay && lightboxImage) {
    document.querySelectorAll(".lightbox-trigger").forEach(img => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxOverlay.classList.remove("hidden");
      });
    });

    lightboxOverlay.addEventListener("click", () => {
      lightboxOverlay.classList.add("hidden");
    });
  }

  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  });

  // Tabs (Our Mission / Vision / Value)
  const tabButtons = document.querySelectorAll('#tab-buttons button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabButtons.length && tabPanes.length) {
    const defaultTab = tabButtons[0].getAttribute('data-tab');

    tabButtons.forEach((btn) => {
      const tab = btn.getAttribute('data-tab');
      const pane = document.querySelector(`.tab-pane[data-tab="${tab}"]`);
      if (tab === defaultTab) {
        btn.classList.add('bg-gradient-to-r', 'from-[#20CFCF]', 'to-[#1ab2b2]', 'text-white');
        pane?.classList.remove('hidden');
      } else {
        btn.classList.remove('bg-gradient-to-r', 'from-[#20CFCF]', 'to-[#1ab2b2]', 'text-white');
        pane?.classList.add('hidden');
      }
    });

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => b.classList.remove('bg-gradient-to-r', 'from-[#20CFCF]', 'to-[#1ab2b2]', 'text-white'));
        btn.classList.add('bg-gradient-to-r', 'from-[#20CFCF]', 'to-[#1ab2b2]', 'text-white');

        tabPanes.forEach(pane => {
          if (pane.getAttribute('data-tab') === tab) {
            pane.classList.remove('hidden');
          } else {
            pane.classList.add('hidden');
          }
        });
      });
    });
  }

  // AOS
  AOS.init({ duration: 1000, once: true });

  // VanillaTilt
  VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });

  // Particles
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

  // Swiper
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
});

//animation hand robot & human
window.addEventListener("scroll", () => {
  const section = document.getElementById("hand-scroll-section");
  const left = document.getElementById("leftHand");
  const right = document.getElementById("rightHand");

  if (!section || !left || !right) return;

  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

  if (inView) {
    left.classList.remove("-translate-x-full");
    right.classList.remove("translate-x-full");
  } else {
    left.classList.add("-translate-x-full");
    right.classList.add("translate-x-full");
  }
});

//vuốt slider tuyển dụng
new Swiper(".cultureSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});