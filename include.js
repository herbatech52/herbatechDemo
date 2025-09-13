async function injectFragment(targetId, url) {
  const host = document.getElementById(targetId);
  if (!host) return null;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    host.innerHTML = html;
    return host;
  } catch (e) {
    console.error("Không load được", url, e);
    return null;
  }
}

function wireHeaderInteractions(root = document) {
  const openBtn = root.querySelector('#menu-toggle');
  const closeBtn = root.querySelector('#menu-close');
  const drawer = root.querySelector('#mobile-drawer');
  const backdrop = root.querySelector('#mobile-backdrop');

  const subBtn = root.querySelector('#submenu-toggle-mobile');
  const submenu = root.querySelector('#submenu-mobile');
  const caret = root.querySelector('#submenu-caret-mobile');

  if (openBtn && drawer) {
    const open = () => {
      drawer.classList.remove('translate-x-full');
      backdrop && backdrop.classList.remove('hidden');
    };
    const close = () => {
      drawer.classList.add('translate-x-full');
      backdrop && backdrop.classList.add('hidden');
    };

    openBtn.addEventListener('click', open, { passive: true });
    closeBtn && closeBtn.addEventListener('click', close, { passive: true });
    backdrop && backdrop.addEventListener('click', close, { passive: true });
  }

  if (subBtn && submenu) {
    subBtn.addEventListener('click', () => {
      submenu.classList.toggle('hidden');
      caret && caret.classList.toggle('rotate-180');
    }, { passive: true });
  }
}

(async () => {
  const headerHost = await injectFragment('header', '/include/header.html');
  if (headerHost) wireHeaderInteractions(headerHost);

  await injectFragment('footer', '/include/footer.html');
})();