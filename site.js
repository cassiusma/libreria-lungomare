// ── La Libre — Shared site behaviour ──────────────────────────────────────
// Handles: language persistence across pages, applying translations,
// rewriting internal links to carry the language, and the mobile burger menu.

(function () {
  const STORAGE_KEY = 'lalibre_lang';

  function getLang() {
    const url = new URLSearchParams(window.location.search);
    const fromUrl = url.get('lang');
    if (fromUrl === 'it' || fromUrl === 'en') {
      sessionStorage.setItem(STORAGE_KEY, fromUrl);
      return fromUrl;
    }
    return sessionStorage.getItem(STORAGE_KEY) || 'it';
  }

  function setLang(lang) {
    sessionStorage.setItem(STORAGE_KEY, lang);
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[data-it]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text) el.innerHTML = text;
    });
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = lang === 'it' ? '🇬🇧' : '🇮🇹';
    document.documentElement.lang = lang;
  }

  // Rewrite every internal link (nav, see-all, back-link, breadcrumb, logo)
  // so navigating preserves the current language.
  function rewriteInternalLinks(lang) {
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      // skip external, mailto, tel, whatsapp, and pure-hash links
      if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;

      const [path, hash] = href.split('#');
      if (!path) return; // safety

      try {
        const u = new URL(path, window.location.href);
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname.split('/').pop() + '?' + u.searchParams.toString() + (hash ? '#' + hash : ''));
      } catch (e) { /* ignore malformed */ }
    });
  }

  function initLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const current = getLang();
      const next = current === 'it' ? 'en' : 'it';
      setLang(next);
      applyTranslations(next);
      rewriteInternalLinks(next);
      // update the URL bar without reloading
      const u = new URL(window.location.href);
      u.searchParams.set('lang', next);
      window.history.replaceState({}, '', u);
    });
  }

  function initBurger() {
    const burger = document.getElementById('burger-toggle');
    const panel = document.getElementById('mobile-menu');
    if (!burger || !panel) return;
    burger.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        panel.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  }

  function initSite() {
    const lang = getLang();
    applyTranslations(lang);
    rewriteInternalLinks(lang);
    initLangToggle();
    initBurger();
  }

  // Expose for pages that render product cards dynamically (need to re-rewrite
  // links and translations after their own render() runs)
  window.LaLibreSite = { getLang, setLang, applyTranslations, rewriteInternalLinks, initSite };

  document.addEventListener('DOMContentLoaded', initSite);
})();
