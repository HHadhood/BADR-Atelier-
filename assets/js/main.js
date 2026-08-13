(() => {
  const cfg = window.BADR_CONFIG || {};
  const html = document.documentElement;
  const page = document.body.dataset.page || '';

  const labels = {
    en: {
      home: 'Home', developers: 'For Developers', projects: 'Projects', bim: 'BIM + Digital', about: 'Studio', services: 'Services', process: 'Process', contact: 'Contact',
      enquire: 'Start a project', language: 'AR', studio: 'Architecture • Planning • Design • BIM', rights: 'All rights reserved.'
    },
    ar: {
      home: 'الرئيسية', developers: 'للمطورين', projects: 'المشاريع', bim: 'BIM + رقمنة', about: 'عن الاستوديو', services: 'الخدمات', process: 'منهج العمل', contact: 'تواصل',
      enquire: 'ابدأ مشروعك', language: 'EN', studio: 'عمارة • تخطيط • تصميم • BIM', rights: 'جميع الحقوق محفوظة.'
    }
  };

  function currentLang() {
    return localStorage.getItem('badr-lang') || (navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en');
  }

  function setLang(lang) {
    localStorage.setItem('badr-lang', lang);
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-ar', lang === 'ar');
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      el.innerHTML = el.dataset[lang];
    });
    const btn = document.querySelector('[data-lang-toggle]');
    if (btn) btn.textContent = labels[lang].language;
    document.querySelectorAll('[data-location]').forEach(el => el.textContent = lang === 'ar' ? cfg.locationAr : cfg.locationEn);
  }

  function navLink(key, href) {
    const active = page === key ? ' is-active' : '';
    return `<a class="nav-link${active}" href="${href}" data-nav="${key}"><span data-en="${labels.en[key]}" data-ar="${labels.ar[key]}">${labels.en[key]}</span></a>`;
  }

  function renderHeader() {
    const mount = document.getElementById('site-header');
    if (!mount) return;
    mount.innerHTML = `
      <header class="site-header" data-header>
        <div class="shell nav-shell">
          <a class="brand" href="index.html" aria-label="BADR Atelier home">
            <img src="assets/img/badr-logo.png" alt="BADR Atelier" />
          </a>
          <button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" data-menu-toggle>
            <span></span><span></span>
          </button>
          <nav class="main-nav" data-menu>
            ${navLink('home','index.html')}
            ${navLink('developers','developers.html')}
            ${navLink('projects','projects.html')}
            ${navLink('bim','bim-digital.html')}
            ${navLink('about','about.html')}
            ${navLink('services','services.html')}
            ${navLink('contact','contact.html')}
          </nav>
          <div class="nav-actions">
            <button class="lang-toggle" type="button" data-lang-toggle>AR</button>
            <a class="button button-small button-dark" href="contact.html"><span data-en="${labels.en.enquire}" data-ar="${labels.ar.enquire}">${labels.en.enquire}</span></a>
          </div>
        </div>
      </header>`;
  }

  function renderFooter() {
    const mount = document.getElementById('site-footer');
    if (!mount) return;
    mount.innerHTML = `
      <footer class="site-footer">
        <div class="shell footer-grid">
          <div>
            <img class="footer-logo" src="assets/img/badr-logo.png" alt="BADR Atelier" />
            <p class="footer-tag" data-en="${labels.en.studio}" data-ar="${labels.ar.studio}">${labels.en.studio}</p>
          </div>
          <div class="footer-col">
            <strong data-en="Studio" data-ar="الاستوديو">Studio</strong>
            <a href="developers.html" data-en="For Developers" data-ar="للمطورين العقاريين">For Developers</a><a href="about.html" data-en="About" data-ar="عن بدر">About</a>
            <a href="services.html" data-en="Services" data-ar="الخدمات">Services</a>
            <a href="process.html" data-en="Process" data-ar="منهج العمل">Process</a>
          </div>
          <div class="footer-col">
            <strong data-en="Work" data-ar="الأعمال">Work</strong>
            <a href="projects.html" data-en="Selected projects" data-ar="مشاريع مختارة">Selected projects</a>
            <a href="project-al-rehab.html" data-en="Al Rehab Oasis" data-ar="واحة الرحاب">Al Rehab Oasis</a>
            <a href="bim-digital.html" data-en="BIM + Digital" data-ar="BIM + الرقمنة">BIM + Digital</a>
          </div>
          <div class="footer-col">
            <strong data-en="Contact" data-ar="تواصل">Contact</strong>
            <a href="mailto:${cfg.email}">${cfg.email}</a>
            <span data-location>${cfg.locationEn}</span><a href="tel:${cfg.phone}">${cfg.phone}</a>
            <span>${cfg.website}</span>
          </div>
        </div>
        <div class="shell footer-bottom">
          <span>© ${cfg.copyrightYear} ${cfg.brand}. <span data-en="${labels.en.rights}" data-ar="${labels.ar.rights}">${labels.en.rights}</span></span>
          <span data-en="Designed as a premium static website — easy to edit and deploy." data-ar="موقع ثابت فاخر — سهل التعديل والرفع على الاستضافة.">Designed as a premium static website — easy to edit and deploy.</span>
        </div>
      </footer>`;
  }

  function bindMenu() {
    const btn = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));
  }

  function bindHeader() {
    const header = document.querySelector('[data-header]');
    if (!header) return;
    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
    update(); window.addEventListener('scroll', update, { passive: true });
  }

  function bindReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('is-visible')); return; }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -4% 0px' });
    items.forEach(i => obs.observe(i));
  }

  function bindLanguage() {
    document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => setLang(currentLang() === 'en' ? 'ar' : 'en'));
    setLang(currentLang());
  }

  function bindFilters() {
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const key = btn.dataset.filter;
        document.querySelectorAll('[data-project-card]').forEach(card => {
          const tags = (card.dataset.tags || '').split(' ');
          card.hidden = key !== 'all' && !tags.includes(key);
        });
      });
    });
  }

  function bindInquiryForm() {
    const form = document.querySelector('[data-inquiry-form]');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      if (cfg.formEndpoint) return;
      e.preventDefault();
      const fd = new FormData(form);
      const subject = `BADR Atelier enquiry — ${fd.get('project') || 'New Project'}`;
      const body = [
        `Name: ${fd.get('name') || ''}`,
        `Company: ${fd.get('company') || ''}`,
        `Email: ${fd.get('email') || ''}`,
        `Phone: ${fd.get('phone') || ''}`,
        `Project type: ${fd.get('type') || ''}`,
        `Location: ${fd.get('location') || ''}`,
        `Approx. area: ${fd.get('area') || ''}`,
        `Message: ${fd.get('message') || ''}`
      ].join('\n');
      window.location.href = `mailto:${cfg.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  function bindCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = Number(el.dataset.count || 0); let started = false;
      const obs = new IntersectionObserver(entries => {
        if (!started && entries[0].isIntersecting) {
          started = true; const start = performance.now();
          const run = now => { const p = Math.min(1, (now-start)/900); el.textContent = Math.round(target*(1-Math.pow(1-p,3))).toLocaleString(); if (p<1) requestAnimationFrame(run); };
          requestAnimationFrame(run); obs.disconnect();
        }
      }); obs.observe(el);
    });
  }

  renderHeader(); renderFooter(); bindMenu(); bindHeader(); bindLanguage(); bindReveal(); bindFilters(); bindInquiryForm(); bindCounters();
})();
