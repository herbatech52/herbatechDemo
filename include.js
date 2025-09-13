document.addEventListener("DOMContentLoaded", async () => {
  const inject = async (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(`include/${id}.html`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Load include/${id}.html lỗi: ${res.status}`);
    el.innerHTML = await res.text();
  };

  try {
    await Promise.all([inject("header"), inject("footer")]);

    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const drawer = document.getElementById("mobile-drawer");
    const backdrop = document.getElementById("mobile-backdrop");
    const submenuBtn = document.getElementById("submenu-toggle-mobile");
    const submenu = document.getElementById("submenu-mobile");
    const caret = document.getElementById("submenu-caret-mobile");

    const openDrawer = () => {
      if (!drawer || !backdrop) return;
      drawer.classList.remove("translate-x-full");
      backdrop.classList.remove("hidden");
    };
    const closeDrawer = () => {
      if (!drawer || !backdrop) return;
      drawer.classList.add("translate-x-full");
      backdrop.classList.add("hidden");
    };

    if (menuToggle) menuToggle.addEventListener("click", openDrawer);
    if (menuClose) menuClose.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    if (submenuBtn && submenu) {
      submenuBtn.addEventListener("click", () => {
        const hidden = submenu.classList.contains("hidden");
        submenu.classList.toggle("hidden", !hidden === false); 
        submenu.classList.toggle("hidden"); 
        if (caret) caret.classList.toggle("rotate-180");
      });
    }

    window.dispatchEvent(new Event("headerLoaded"));
  } catch (e) {
    console.error(e);
  }
});