(()=>{async function n(){try{let s=await(await fetch("assets/data/slides.json",{cache:"no-store"})).json(),r=document.getElementById("culture-slides");if(!r)return;r.innerHTML=s.slides.map(t=>`
      <div class="swiper-slide">
        <!-- Khung c\u1ED1 \u0111\u1ECBnh, m\u1ECDi slide b\u1EB1ng nhau -->
        <div class="h-[500px] w-full 
                    rounded-xl border-4 border-[#20CFCF] overflow-hidden shadow-md">
          <img src="${t.src}" 
               alt="${t.alt||"Culture"}" loading="lazy"
               class="w-full h-full object-cover 
                      transition-transform duration-300 ease-in-out hover:scale-105">
        </div>
      </div>
    `).join(""),new Swiper(".cultureSwiper",{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".cultureSwiper .swiper-button-next",prevEl:".cultureSwiper .swiper-button-prev"}})}catch(e){console.error("Kh\xF4ng load \u0111\u01B0\u1EE3c slides:",e)}}document.addEventListener("DOMContentLoaded",n);})();
