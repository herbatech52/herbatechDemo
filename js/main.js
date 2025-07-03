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