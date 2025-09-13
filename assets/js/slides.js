// assets/js/slides.js
async function loadCultureSlides() {
  try {
    const res = await fetch("assets/data/slides.json", { cache: "no-store" });
    const data = await res.json();
    const wrapper = document.getElementById("culture-slides");

    if (!wrapper) return;

    wrapper.innerHTML = data.slides.map(s => `
      <div class="swiper-slide">
        <!-- Khung cố định, mọi slide bằng nhau -->
        <div class="h-[500px] w-full 
                    rounded-xl border-4 border-[#20CFCF] overflow-hidden shadow-md">
          <img src="${s.src}" 
               alt="${s.alt || 'Culture'}" loading="lazy"
               class="w-full h-full object-cover 
                      transition-transform duration-300 ease-in-out hover:scale-105">
        </div>
      </div>
    `).join("");

    new Swiper(".cultureSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".cultureSwiper .swiper-button-next",
        prevEl: ".cultureSwiper .swiper-button-prev",
      },
    });
  } catch (err) {
    console.error("Không load được slides:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadCultureSlides);
