/* Gerado pelo Otimizador ASRarchive - Menu, Barra de Títulos H1/H2 e Modo Escuro */
(function () {
  const PAGINAS = [
  {
    "nome": "indexsite",
    "arquivo": "indexsite.html"
  },
  {
    "nome": "1980s",
    "arquivo": "1980s.html"
  },
  {
    "nome": "1990s",
    "arquivo": "1990s.html"
  },
  {
    "nome": "2000s",
    "arquivo": "2000s.html"
  },
  {
    "nome": "DERBY",
    "arquivo": "DERBY.html"
  },
  {
    "nome": "ÍDOLOS",
    "arquivo": "IDOLOS.html"
  },
  {
    "nome": "JOGADORES",
    "arquivo": "JOGADORES.html"
  }
];
  const DARK_MODE_KEY = 'asrarchive-dark-mode';

  const navCss = `
    :root {
      --nav-bg-bar: #ffffff;
      --nav-bg-toc: #fafafa;
      --nav-bg-sidebar: #ffffff;
      --nav-bg-hover: #f0f1f4;
      --nav-bg-active: #fdf2f4;
      --nav-text: #111827;
      --nav-muted: #6b7280;
      --nav-border: #e5e7eb;
      --nav-accent: #7a1c2e;
      --nav-accent-sec: #c2591b;
      --nav-shadow: 0 10px 25px rgba(0, 0, 0, 0.14);
      --nav-backdrop: rgba(0, 0, 0, 0.45);
    }
    body.nav-dark-mode {
      --nav-bg-bar: #121214;
      --nav-bg-toc: #17171a;
      --nav-bg-sidebar: #161619;
      --nav-bg-hover: #25252b;
      --nav-bg-active: #2d161b;
      --nav-text: #f3f4f6;
      --nav-muted: #9ca3af;
      --nav-border: #2c2c34;
      --nav-accent: #8f2237;
      --nav-accent-sec: #d96b27;
      --nav-shadow: 0 12px 30px rgba(0, 0, 0, 0.55);
      --nav-backdrop: rgba(0, 0, 0, 0.68);
    }
    .asr-top-header {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--nav-bg-bar);
      border-bottom: 1px solid var(--nav-border);
      z-index: 9990;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .asr-topbar {
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 10px;
    }
    .asr-menu-btn {
      width: 36px;
      height: 36px;
      border: 1px solid var(--nav-border);
      background: transparent;
      color: var(--nav-text);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      flex-shrink: 0;
    }
    .asr-menu-btn span {
      display: block;
      width: 17px;
      height: 2px;
      background-color: currentColor;
      border-radius: 2px;
    }
    .asr-current-title {
      font-size: 15px;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--nav-text);
      flex: 1;
    }
    .asr-toc-bar {
      background-color: var(--nav-bg-toc);
      border-top: 1px solid var(--nav-border);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 6px;
      padding: 7px 12px;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
    }
    .asr-toc-bar:empty { display: none; }
    .asr-toc-item {
      flex-shrink: 0;
      background-color: var(--nav-bg-bar);
      border: 1px solid var(--nav-border);
      border-radius: 6px;
      color: var(--nav-text);
      cursor: pointer;
      padding: 5px 11px;
      line-height: 1.3;
      white-space: nowrap;
      font-family: inherit;
    }
    .asr-toc-item.active {
      background-color: var(--nav-bg-active);
      border-color: var(--nav-accent);
    }
    .asr-toc-item.level-h1 {
      font-size: 13px;
      font-weight: 700;
      border-left: 3px solid var(--nav-accent);
    }
    .asr-toc-item.level-h2 {
      font-size: 12.5px;
      font-weight: 400;
      color: var(--nav-muted);
    }
    .asr-toc-item.level-h2.active { color: var(--nav-text); }
    .asr-backdrop {
      position: fixed;
      inset: 0;
      background-color: var(--nav-backdrop);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.22s ease, visibility 0.22s ease;
      z-index: 9995;
    }
    .asr-backdrop.open { opacity: 1; visibility: visible; }
    .asr-sidebar {
      position: fixed;
      top: 0; left: 0; bottom: 0;
      width: min(310px, 84vw);
      background-color: var(--nav-bg-sidebar);
      border-right: 1px solid var(--nav-border);
      box-shadow: var(--nav-shadow);
      transform: translateX(-100%);
      transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .asr-sidebar.open { transform: translateX(0); }
    .asr-sidebar-header {
      height: 48px;
      padding: 0 16px;
      border-bottom: 1px solid var(--nav-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--nav-text);
    }
    .asr-sidebar-title { font-size: 16px; font-weight: 700; }
    .asr-close-btn {
      width: 34px; height: 34px; border: none; background: transparent;
      color: var(--nav-text); font-size: 22px; border-radius: 50%; cursor: pointer;
    }
    .asr-sidebar-actions {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nav-border);
    }
    .asr-dark-row {
      display: flex; align-items: center; justify-content: space-between;
      font-size: 13.5px; font-weight: 500; color: var(--nav-text); cursor: pointer;
    }
    .asr-switch {
      position: relative; width: 40px; height: 22px;
      background-color: var(--nav-border); border-radius: 999px; transition: 0.2s;
    }
    .asr-switch::after {
      content: ""; position: absolute; top: 2px; left: 2px;
      width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: 0.2s;
    }
    body.nav-dark-mode .asr-switch { background-color: var(--nav-accent); }
    body.nav-dark-mode .asr-switch::after { transform: translateX(18px); }
    .asr-page-list {
      list-style: none; padding: 8px; overflow-y: auto; flex: 1;
    }
    .asr-page-link {
      display: block; padding: 10px 12px; border-radius: 8px;
      text-decoration: none; font-size: 14.5px; font-weight: 700;
      color: var(--nav-text); margin-bottom: 2px;
    }
    .asr-page-link:hover { background-color: var(--nav-bg-hover); }
    .asr-page-link.active {
      background-color: var(--nav-bg-active);
      color: var(--nav-accent);
    }
    body.nav-dark-mode .asr-page-link.active { color: var(--nav-accent-sec); }
  `;

  function init() {
    const styleEl = document.createElement('style');
    styleEl.textContent = navCss;
    document.head.appendChild(styleEl);

    const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const isHome = currentFile === '' || currentFile === 'index.html';
    const currentObj = PAGINAS.find(p => p.arquivo.toLowerCase() === currentFile);
    const pageTitle = isHome ? 'Início' : (currentObj ? currentObj.nome : document.title || currentFile);

    const linksHtml = [
      { nome: 'INÍCIO', arquivo: 'index.html', active: isHome },
      ...PAGINAS.map(p => ({
        nome: p.nome,
        arquivo: p.arquivo,
        active: p.arquivo.toLowerCase() === currentFile
      }))
    ].map(item =>
      `<li><a class="asr-page-link ${item.active ? 'active' : ''}" href="${item.arquivo}">${item.nome}</a></li>`
    ).join('');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <header class="asr-top-header" id="asr-top-header">
        <div class="asr-topbar">
          <button type="button" class="asr-menu-btn" id="asr-open-btn" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <div class="asr-current-title">${pageTitle}</div>
        </div>
        <nav class="asr-toc-bar" id="asr-toc-bar"></nav>
      </header>
      <div class="asr-backdrop" id="asr-backdrop"></div>
      <aside class="asr-sidebar" id="asr-sidebar">
        <div class="asr-sidebar-header">
          <span class="asr-sidebar-title">Páginas</span>
          <button type="button" class="asr-close-btn" id="asr-close-btn">×</button>
        </div>
        <div class="asr-sidebar-actions">
          <div class="asr-dark-row" id="asr-dark-toggle">
            <span>Modo escuro (menus)</span>
            <div class="asr-switch"></div>
          </div>
        </div>
        <ul class="asr-page-list">${linksHtml}</ul>
      </aside>
    `;

    document.body.insertBefore(wrapper, document.body.firstChild);

        // Redireciona imagens para a branch fernandofagundes27-patch-1
    const BASE_RAW = 'https://raw.githubusercontent.com/fernandofagundes27/asrtest/fernandofagundes27-patch-1/';
    document.querySelectorAll('img[src^="img/"]').forEach((img) => {
    img.src = BASE_RAW + img.getAttribute('src').replace(/^img\//, '');
    });
    

    // Modo escuro persistente
    const darkToggle = document.getElementById('asr-dark-toggle');
    function setDark(on) {
      document.body.classList.toggle('nav-dark-mode', on);
      try { localStorage.setItem(DARK_MODE_KEY, on ? '1' : '0'); } catch (_) {}
    }
    try {
      if (localStorage.getItem(DARK_MODE_KEY) === '1') setDark(true);
    } catch (_) {}
    darkToggle.addEventListener('click', () => {
      setDark(!document.body.classList.contains('nav-dark-mode'));
    });

    // Gaveta lateral
    const sidebar = document.getElementById('asr-sidebar');
    const backdrop = document.getElementById('asr-backdrop');
    document.getElementById('asr-open-btn').addEventListener('click', () => {
      sidebar.classList.add('open');
      backdrop.classList.add('open');
    });
    const closeMenu = () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
    };
    document.getElementById('asr-close-btn').addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    // Barra horizontal de H1 e H2
    const tocBar = document.getElementById('asr-toc-bar');
    const topHeader = document.getElementById('asr-top-header');
    if (!isHome) {
      const headings = Array.from(document.querySelectorAll('h1, h2')).filter(
        el => !el.closest('#asr-top-header') && el.textContent.trim().length > 0
      );
      headings.forEach((h, idx) => {
        if (!h.id) h.id = 'sec-' + idx;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'asr-toc-item level-' + h.tagName.toLowerCase();
        btn.textContent = h.textContent.trim();
        btn.addEventListener('click', () => {
          tocBar.querySelectorAll('.active').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          const offset = topHeader.offsetHeight + 10;
          const y = h.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          history.replaceState(null, '', '#' + h.id);
        });
        tocBar.appendChild(btn);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
