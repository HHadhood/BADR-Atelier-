(() => {
  const cfg = window.BADR_CONFIG || {};
  const html = document.documentElement;
  const page = document.body.dataset.page || '';
  const labels = {
    en:{home:'Home',developers:'For Developers',investors:'For Investors',projects:'Projects',bim:'BIM + Digital',services:'Services',about:'Studio',team:'Team',careers:'Careers',contact:'Contact',enquire:'Test the Opportunity',language:'AR',rights:'All rights reserved.'},
    ar:{home:'الرئيسية',developers:'للمطورين',investors:'للمستثمرين',projects:'المشاريع',bim:'BIM + رقمنة',services:'الخدمات',about:'الاستوديو',team:'الفريق',careers:'الوظائف',contact:'تواصل',enquire:'اختبر الفرصة',language:'EN',rights:'جميع الحقوق محفوظة.'}
  };
  const currentLang=()=>localStorage.getItem('badr-lang') || (navigator.language&&navigator.language.startsWith('ar')?'ar':'en');
  function setLang(lang){
    localStorage.setItem('badr-lang',lang); html.lang=lang; html.dir=lang==='ar'?'rtl':'ltr'; document.body.classList.toggle('is-ar',lang==='ar');
    document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang]});
    const btn=document.querySelector('[data-lang-toggle]'); if(btn)btn.textContent=labels[lang].language;
    document.querySelectorAll('[data-location]').forEach(el=>el.textContent=lang==='ar'?cfg.locationAr:cfg.locationEn);
    document.querySelectorAll('[data-location-eg]').forEach(el=>el.textContent=lang==='ar'?cfg.locationEgyptAr:cfg.locationEgyptEn);
    document.querySelectorAll('[data-location-sa]').forEach(el=>el.textContent=lang==='ar'?cfg.locationSaudiAr:cfg.locationSaudiEn);
  }
  function navLink(key,href){const active=page===key?' is-active':'';return `<a class="nav-link${active}" href="${href}"><span data-en="${labels.en[key]}" data-ar="${labels.ar[key]}">${labels.en[key]}</span></a>`}
  function renderHeader(){const mount=document.getElementById('site-header');if(!mount)return;mount.innerHTML=`<header class="site-header" data-header><div class="shell nav-shell"><div class="brand-block"><a class="brand" href="index.html" aria-label="BADR Atelier home"><img src="assets/img/badr-logo.png" alt="BADR Atelier"/></a><div class="brand-tagline"><b data-en="Strategic Development Partner" data-ar="شريكك الاستراتيجي في التطوير">Strategic Development Partner</b><span data-en="Strategy • Architecture • Engineering • BIM" data-ar="استراتيجية • عمارة • هندسة • BIM">Strategy • Architecture • Engineering • BIM</span></div></div><button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" data-menu-toggle><span></span><span></span></button><nav class="main-nav" data-menu>${navLink('home','index.html')}${navLink('developers','developers.html')}${navLink('investors','investors.html')}${navLink('projects','projects.html')}${navLink('bim','bim-digital.html')}${navLink('services','services.html')}${navLink('about','about.html')}${navLink('team','team.html')}${navLink('careers','careers.html')}${navLink('contact','contact.html')}</nav><div class="nav-actions"><button class="lang-toggle" type="button" data-lang-toggle>AR</button><a class="button button-small button-dark" href="contact.html"><span data-en="${labels.en.enquire}" data-ar="${labels.ar.enquire}">${labels.en.enquire}</span></a></div></div><div class="scroll-progress"><i data-scroll-progress></i></div></header>`}
  function iconSvg(name){
    const icons={
      linkedin:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.1 3.5A2.1 2.1 0 1 1 5.1 7.7 2.1 2.1 0 0 1 5.1 3.5ZM3.3 9h3.6v11.5H3.3V9Zm5.8 0h3.4v1.6h.05c.47-.9 1.63-1.95 3.35-1.95 3.58 0 4.24 2.35 4.24 5.4v6.45h-3.58v-5.72c0-1.36-.03-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.02v5.82H9.1V9Z"/></svg>`,
      x:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.7 3H22l-7.2 8.2L23.2 21h-6.6l-5.2-6.8L5.5 21H2.2l7.7-8.8L1.8 3h6.8l4.7 6.2L18.7 3Zm-1.2 16h1.8L7.6 4.9H5.7L17.5 19Z"/></svg>`,
      whatsapp:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a9.6 9.6 0 0 0-8.2 14.6L2.5 21.5l5-1.3A9.7 9.7 0 1 0 12 2Zm0 17.5c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A7.7 7.7 0 1 1 12 19.5Zm4.2-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.2 6.2 0 0 1-3.1-2.7c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.2-.5s0-.3-.1-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.5-.3Z"/></svg>`,
      youtube:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12s0-3.2-.4-4.7a2.8 2.8 0 0 0-2-2C18.1 5 12 5 12 5s-6.1 0-7.6.3a2.8 2.8 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.8 2.8 0 0 0 2 2C5.9 19 12 19 12 19s6.1 0 7.6-.3a2.8 2.8 0 0 0 2-2C22 15.2 22 12 22 12Zm-12 3.2V8.8l5.5 3.2-5.5 3.2Z"/></svg>`,
      facebook:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.4Z"/></svg>`,
      instagram:`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.45" cy="6.75" r="1.15" fill="currentColor"/></svg>`,
      pinterest:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.03 2 11c0 3.82 2.31 7.21 5.86 8.46-.08-.65-.15-1.65.03-2.36l1.17-4.96s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.82 1.48 1.82 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.19-4.08-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.79.75 2.29.08.1.09.18.07.28l-.28 1.15c-.05.19-.15.23-.35.14-1.31-.61-2.13-2.52-2.13-4.05 0-3.3 2.4-6.33 6.91-6.33 3.63 0 6.45 2.59 6.45 6.04 0 3.6-2.27 6.5-5.42 6.5-1.06 0-2.06-.55-2.4-1.2l-.65 2.49c-.24.91-.87 2.05-1.3 2.75.98.3 2.01.46 3.08.46 5.52 0 10-4.48 10-10S17.52 2 12 2Z"/></svg>`,
      behance:`<svg viewBox="0 0 24 24" aria-hidden="true"><text x="2.2" y="16.2" fill="currentColor" font-size="13.2" font-weight="900" font-family="Arial,Helvetica,sans-serif">Bē</text><rect x="13.8" y="5.2" width="6.7" height="1.45" rx=".7" fill="currentColor"/></svg>`
    };
    return icons[name]||'';
  }
  function socialMarkup(){
    const items=[
      ['linkedin',cfg.linkedin,'LinkedIn'],
      ['instagram',cfg.instagram,'Instagram'],
      ['youtube',cfg.youtube,'YouTube'],
      ['facebook',cfg.facebook,'Facebook'],
      ['pinterest',cfg.pinterest,'Pinterest'],
      ['behance',cfg.behance,'Behance'],
      ['x',cfg.x,'X'],
      ['whatsapp',`https://wa.me/${(cfg.whatsapp||'').replace(/\D/g,'')}`,'WhatsApp']
    ];
    return `<div class="social-links social-links-official" aria-label="BADR Atelier social media">${items.map(([cls,url,label])=>url
      ?`<a class="social-link ${cls}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="BADR Atelier on ${label}" data-network="${label}"><span class="social-icon" aria-hidden="true">${iconSvg(cls)}</span><span class="sr-only">${label}</span></a>`
      :`<span class="social-link ${cls} is-disabled" aria-label="${label}"><span class="social-icon" aria-hidden="true">${iconSvg(cls)}</span><span class="sr-only">${label}</span></span>`
    ).join('')}</div>`;
  }
  function renderSocials(){document.querySelectorAll('[data-social-links]').forEach(el=>el.innerHTML=socialMarkup())}
  function renderFooter(){
    const mount=document.getElementById('site-footer');if(!mount)return;
    const egWa=`https://wa.me/${(cfg.phoneEgypt||'').replace(/\D/g,'')}`;
    const saWa=`https://wa.me/${(cfg.phoneSaudi||'').replace(/\D/g,'')}`;
    mount.innerHTML=`<footer class="site-footer"><div class="shell footer-grid"><div><div class="brand-block footer-brand-block"><img class="footer-logo" src="assets/img/badr-logo.png" alt="BADR Atelier"/><div class="brand-tagline"><b data-en="Strategic Development Partner" data-ar="شريكك الاستراتيجي في التطوير">Strategic Development Partner</b><span style="color:#aaa397" data-en="Strategy • Architecture • Engineering • BIM" data-ar="استراتيجية • عمارة • هندسة • BIM">Strategy • Architecture • Engineering • BIM</span></div></div><p class="footer-tag" data-en="From Vision to Built Value." data-ar="من الرؤية إلى قيمة مبنية.">From Vision to Built Value.</p><div class="footer-social-heading" data-en="Connect with BADR Atelier" data-ar="تابع BADR Atelier">Connect with BADR Atelier</div><div data-social-links></div></div><div class="footer-col"><strong data-en="Advisory" data-ar="الاستشارات">Advisory</strong><a href="developers.html" data-en="Development advisory" data-ar="استشارات التطوير">Development advisory</a><a href="investors.html" data-en="Investor dashboard" data-ar="لوحة المستثمر">Investor dashboard</a><a href="project-al-rehab.html" data-en="Development case study" data-ar="دراسة تطوير">Development case study</a></div><div class="footer-col"><strong data-en="Work" data-ar="الأعمال">Work</strong><a href="projects.html" data-en="Projects + Capability Proof" data-ar="المشروعات + إثبات القدرات">Projects + Capability Proof</a><a href="services.html" data-en="Services + linked proof" data-ar="الخدمات + المشروعات المرتبطة">Services + linked proof</a><a href="bim-digital.html" data-en="BIM + Digital" data-ar="BIM + رقمنة">BIM + Digital</a><a href="team.html" data-en="Team" data-ar="فريق العمل">Team</a><a href="careers.html" data-en="Careers" data-ar="انضم إلى فريقنا">Careers</a></div><div class="footer-col footer-offices"><strong data-en="Studios + Contact" data-ar="المكاتب + التواصل">Studios + Contact</strong><a href="mailto:${cfg.email}">${cfg.email}</a><a class="phone-wa-link" href="${egWa}" target="_blank" rel="noopener">${iconSvg('whatsapp')}<span>${cfg.phoneEgyptDisplay}</span></a><a class="phone-wa-link" href="${saWa}" target="_blank" rel="noopener">${iconSvg('whatsapp')}<span>${cfg.phoneSaudiDisplay}</span></a><span class="footer-office"><b data-en="Cairo Studio" data-ar="استوديو القاهرة">Cairo Studio</b><em data-location-eg>${cfg.locationEgyptEn}</em></span><span class="footer-office"><b data-en="Jeddah Studio" data-ar="استوديو جدة">Jeddah Studio</b><em data-location-sa>${cfg.locationSaudiEn}</em></span><span>${cfg.website}</span></div></div><div class="shell footer-bottom"><span>© ${cfg.copyrightYear} ${cfg.brand}. <span data-en="${labels.en.rights}" data-ar="${labels.ar.rights}">${labels.en.rights}</span></span><span data-en="Cairo + Jeddah • Strategy, architecture, engineering and BIM around one development decision" data-ar="القاهرة + جدة • استراتيجية وعمارة وهندسة وBIM حول قرار تطوير واحد">Cairo + Jeddah • Strategy, architecture, engineering and BIM around one development decision</span></div></footer><a class="floating-whatsapp" href="${saWa}" target="_blank" rel="noopener" aria-label="WhatsApp BADR Atelier"><span class="floating-wa-icon">${iconSvg('whatsapp')}</span></a>`;
    renderSocials();
  }
  function bindMenu(){const btn=document.querySelector('[data-menu-toggle]'),menu=document.querySelector('[data-menu]');if(!btn||!menu)return;btn.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');btn.setAttribute('aria-expanded',String(open))});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')))}
  function bindHeader(){const header=document.querySelector('[data-header]'),progress=document.querySelector('[data-scroll-progress]');const update=()=>{if(header)header.classList.toggle('is-scrolled',window.scrollY>30);if(progress){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%'}};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update)}
  function bindReveal(){const items=document.querySelectorAll('[data-reveal]');if(!('IntersectionObserver'in window)){items.forEach(i=>i.classList.add('is-visible'));return}const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -4% 0px'});items.forEach(i=>obs.observe(i))}
  function bindLanguage(){document.querySelector('[data-lang-toggle]')?.addEventListener('click',()=>setLang(currentLang()==='en'?'ar':'en'));setLang(currentLang())}
  function bindFilters(){document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');const key=btn.dataset.filter;document.querySelectorAll('[data-project-card]').forEach(card=>{const tags=(card.dataset.tags||'').split(' ');card.hidden=key!=='all'&&!tags.includes(key)})}))}
  function bindInquiryForm(){const form=document.querySelector('[data-inquiry-form]');if(!form)return;form.addEventListener('submit',e=>{if(cfg.formEndpoint)return;e.preventDefault();const fd=new FormData(form);const subject=`BADR Atelier development enquiry — ${fd.get('project')||'New Project'}`;const body=[`Name: ${fd.get('name')||''}`,`Company: ${fd.get('company')||''}`,`Email: ${fd.get('email')||''}`,`Phone: ${fd.get('phone')||''}`,`Stage: ${fd.get('type')||''}`,`Location: ${fd.get('location')||''}`,`Approx. site/GFA/units: ${fd.get('area')||''}`,`Decision / request: ${fd.get('message')||''}`].join('\n');window.location.href=`mailto:${cfg.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`})}
  function bindCarousels(){document.querySelectorAll('[data-carousel]').forEach(carousel=>{const slides=[...carousel.querySelectorAll('.carousel-slide')],dots=[...carousel.querySelectorAll('[data-carousel-dot]')];if(!slides.length)return;let idx=0,timer;const show=n=>{idx=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('is-active',i===idx));dots.forEach((d,i)=>d.classList.toggle('is-active',i===idx))};const start=()=>{clearInterval(timer);timer=setInterval(()=>show(idx+1),4800)};carousel.querySelector('[data-carousel-prev]')?.addEventListener('click',()=>{show(idx-1);start()});carousel.querySelector('[data-carousel-next]')?.addEventListener('click',()=>{show(idx+1);start()});dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);start()}));carousel.addEventListener('mouseenter',()=>clearInterval(timer));carousel.addEventListener('mouseleave',start);start()})}
  function bindCounters(){document.querySelectorAll('[data-count]').forEach(el=>{const target=parseFloat(el.dataset.count);let done=false;const run=()=>{if(done)return;done=true;const start=performance.now(),dur=1100;const step=now=>{const t=Math.min(1,(now-start)/dur);const val=target*(1-Math.pow(1-t,3));el.textContent=(target%1?val.toFixed(1):Math.round(val));if(t<1)requestAnimationFrame(step)};requestAnimationFrame(step)};if('IntersectionObserver'in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run();o.disconnect()}}),{threshold:.4});o.observe(el)}else run()})}

  function bindPremiumDynamics(){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const fine=window.matchMedia('(pointer:fine)').matches;
    if(fine){
      document.querySelectorAll('.expertise-tab,.eq-card,.developer-section-visual,.case-card,.project-card,.value-card,.hero-media,.bim-home-stage,.global-map-shell').forEach(card=>{
        card.classList.add('premium-tilt');
        card.addEventListener('pointermove',e=>{
          const r=card.getBoundingClientRect();
          const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
          card.style.setProperty('--ry',`${(px*5.5).toFixed(2)}deg`);
          card.style.setProperty('--rx',`${(-py*4.5).toFixed(2)}deg`);
          card.style.setProperty('--sx',`${((px+.5)*100).toFixed(1)}%`);
          card.style.setProperty('--sy',`${((py+.5)*100).toFixed(1)}%`);
        });
        card.addEventListener('pointerleave',()=>{card.style.setProperty('--ry','0deg');card.style.setProperty('--rx','0deg')});
      });
      document.querySelectorAll('.button').forEach(btn=>{
        btn.addEventListener('pointermove',e=>{
          const r=btn.getBoundingClientRect();
          btn.style.setProperty('--mx',`${(e.clientX-r.left-r.width/2)*.08}px`);
          btn.style.setProperty('--my',`${(e.clientY-r.top-r.height/2)*.08}px`);
        });
        btn.addEventListener('pointerleave',()=>{btn.style.setProperty('--mx','0px');btn.style.setProperty('--my','0px')});
      });
    }
    const parallax=[...document.querySelectorAll('.developer-section-visual img,.hero-media img')];
    const update=()=>{const vh=innerHeight;parallax.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=((r.top+r.height/2)-vh/2)/vh;el.style.setProperty('--parallax',`${(-p*18).toFixed(1)}px`)})};
    update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update);
  }

  const BADR_PROJECT_MAP={
    countries:[
      {name:'Saudi Arabia',ar:'المملكة العربية السعودية',lat:23.9,lng:45.1,count:8,code:'SAU'},
      {name:'United Arab Emirates',ar:'الإمارات العربية المتحدة',lat:24.2,lng:54.4,count:5,code:'ARE'},
      {name:'Oman',ar:'عُمان',lat:20.5,lng:56.0,count:2,code:'OMN'},
      {name:'Qatar',ar:'قطر',lat:25.3,lng:51.2,count:3,code:'QAT'},
      {name:'Kuwait',ar:'الكويت',lat:29.3,lng:47.6,count:4,code:'KWT'},
      {name:'Egypt',ar:'مصر',lat:26.8,lng:30.8,count:9,code:'EGY'},
      {name:'Canada',ar:'كندا',lat:50.0,lng:-99.0,count:5,code:'CAN'},
      {name:'United States',ar:'الولايات المتحدة',lat:39.0,lng:-98.0,count:3,code:'USA'}
    ],
    cities:[
      {city:'Riyadh',ar:'الرياض',lat:24.7136,lng:46.6753,projects:[['Al Noor Grand Mosque','project-al-noor.html'],['Falcon Arena Concept','project-falcon-arena.html']]},
      {city:'Jeddah',ar:'جدة',lat:21.5433,lng:39.1728,projects:[['Al Rehab Oasis','project-al-rehab.html'],['Palm Horizon Compound','project-palm-horizon.html'],['Private Villa & House — Jeddah Reference','project-private-residence.html'],['Pakistan Diplomatic Residential Compound','project-pakistan-diplomatic-jeddah.html']]},
      {city:'Makkah',ar:'مكة',lat:21.3891,lng:39.8579,projects:[['ATHAR Makkah','project-athar-makkah.html'],['ATHAR Makkah Vision','project-athar-makkah.html']]},
      {city:'Dubai',ar:'دبي',lat:25.2048,lng:55.2708,projects:[['Desert Pearl Residences','project-desert-pearl.html'],['Crescent Design Hub — Dubai Edition','project-crescent-hub.html'],['Private Villa & House — Dubai Residence','project-private-residence.html']]},
      {city:'Abu Dhabi',ar:'أبوظبي',lat:24.4539,lng:54.3773,projects:[['Waterfront Lifestyle Center — Abu Dhabi Reference','project-waterfront.html'],['Falcon Arena Executive Suite','project-falcon-arena.html']]},
      {city:'Doha',ar:'الدوحة',lat:25.2854,lng:51.5310,projects:[['Souq Galleria Mall','project-souq-galleria.html'],['Wadi Court Mixed-Use — Doha Reference','project-wadi-court.html'],['Private Villa & House — Doha Residence','project-private-residence.html']]},
      {city:'Muscat',ar:'مسقط',lat:23.5880,lng:58.3829,projects:[['Waterfront Lifestyle Center','project-waterfront.html'],['Palm Horizon Coastal Residence','project-palm-horizon.html']]},
      {city:'Kuwait City',ar:'مدينة الكويت',lat:29.3759,lng:47.9774,projects:[['Wadi Court Mixed-Use','project-wadi-court.html'],['Souq Galleria Retail Annex','project-souq-galleria.html'],['Private Villa & House — Kuwait Residence','project-private-residence.html'],['Desert Pearl Residences — Kuwait Reference','project-desert-pearl.html']]},
      {city:'Cairo',ar:'القاهرة',lat:30.0444,lng:31.2357,projects:[['Aman Towers','project-aman-towers.html'],['Badr Heights Villas','project-badr-heights.html'],['Andalus Courtyard Residences','project-andalus.html'],['Private Villa & House','project-private-residence.html'],['Palm Horizon Residential Cluster','project-palm-horizon.html']]},
      {city:'Alexandria',ar:'الإسكندرية',lat:31.2001,lng:29.9187,projects:[['Waterfront Lifestyle Center — Alexandria Reference','project-waterfront.html'],['Maple Courtyard Homes — Alexandria Reference','project-maple-courtyard.html']]},
      {city:'Mansoura',ar:'المنصورة',lat:31.0409,lng:31.3785,projects:[['ATHAR Makkah — Mansoura Study Reference','project-athar-makkah.html'],['Private Villa & House — Mansoura Residence','project-private-residence.html']]},
      {city:'Toronto',ar:'تورنتو',lat:43.6532,lng:-79.3832,projects:[['Maple Courtyard Homes','project-maple-courtyard.html'],['Crescent Design Hub','project-crescent-hub.html'],['Hudson Urban Lofts — Toronto Reference','project-hudson-lofts.html']]},
      {city:'Ottawa',ar:'أوتاوا',lat:45.4215,lng:-75.6972,projects:[['Andalus Courtyard Residences — Ottawa Reference','project-andalus.html'],['Palm Horizon Compound — Ottawa Reference','project-palm-horizon.html']]},
      {city:'New Jersey',ar:'نيوجيرسي',lat:40.0583,lng:-74.4057,projects:[['Hudson Urban Lofts','project-hudson-lofts.html'],['Private Villa & House — New Jersey Residence','project-private-residence.html']]},
      {city:'New York',ar:'نيويورك',lat:40.7128,lng:-74.0060,projects:[['Crescent Design Hub — New York Reference','project-crescent-hub.html']]}
    ]
  };
  const WM={w:1200,h:560,top:84,bottom:-60};
  function mapXY(lng,lat){return {x:(lng+180)/360*WM.w,y:(WM.top-Math.max(WM.bottom,Math.min(WM.top,lat)))/(WM.top-WM.bottom)*WM.h}}
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function initGlobalMaps(){
    const mounts=[...document.querySelectorAll('[data-global-map]')]; if(!mounts.length)return;
    mounts.forEach(m=>{
      if(m.dataset.mapReady)return; m.dataset.mapReady='1';
      let scale=1,tx=0,ty=0,drag=false,last=null;
      const countryMarkup=BADR_PROJECT_MAP.countries.map(c=>{const p=mapXY(c.lng,c.lat);return `<g class="wm-marker wm-country-marker" data-kind="country" data-name="${escapeHtml(c.name)}" data-ar="${escapeHtml(c.ar)}" data-count="${c.count}" data-x="${p.x}" data-y="${p.y}" transform="translate(${p.x} ${p.y})"><circle r="27"/><circle class="wm-pulse" r="34"/><text class="wm-label" text-anchor="middle" y="-3">${escapeHtml(c.name)}</text><text class="wm-count" text-anchor="middle" y="15">${c.count}</text></g>`}).join('');
      const cityMarkup=BADR_PROJECT_MAP.cities.map((c,i)=>{const p=mapXY(c.lng,c.lat);return `<g class="wm-marker wm-city-marker" data-kind="city" data-index="${i}" data-x="${p.x}" data-y="${p.y}" transform="translate(${p.x} ${p.y})"><circle r="12"/><text text-anchor="middle" y="4">${c.projects.length}</text><text class="wm-city-label" text-anchor="middle" y="-18">${escapeHtml(c.city)}</text></g>`}).join('');
      m.innerHTML=`<div class="offline-map"><svg class="world-svg" viewBox="0 0 ${WM.w} ${WM.h}" role="img" aria-label="BADR Atelier global project map"><defs><radialGradient id="wmGlow"><stop offset="0" stop-color="#d7b35e" stop-opacity=".18"/><stop offset="1" stop-color="#d7b35e" stop-opacity="0"/></radialGradient><filter id="wmSoft"><feGaussianBlur stdDeviation="14"/></filter></defs><rect width="1200" height="560" fill="#0c0d0e"/><g class="wm-grid">${[200,400,600,800,1000].map(x=>`<line x1="${x}" y1="0" x2="${x}" y2="560"/>`).join('')}${[140,280,420].map(y=>`<line x1="0" y1="${y}" x2="1200" y2="${y}"/>`).join('')}</g><g class="wm-transform"><rect x="0" y="0" width="1200" height="560" fill="url(#wmGlow)" opacity=".65"/><g class="wm-countries">${window.BADR_WORLD_MAP_SVG||''}</g><g class="wm-country-layer">${countryMarkup}</g><g class="wm-city-layer">${cityMarkup}</g></g></svg><div class="map-controls"><button type="button" data-map-plus aria-label="Zoom in">+</button><button type="button" data-map-minus aria-label="Zoom out">−</button><button type="button" data-map-reset aria-label="Reset map">⌂</button></div><div class="map-detail" data-map-detail><b data-en="Explore project geography" data-ar="استكشف جغرافيا المشروعات">Explore project geography</b><span data-en="Click a country, then zoom to reveal cities and project counts." data-ar="اضغط على الدولة ثم كبّر الخريطة لإظهار المدن وعدد المشروعات.">Click a country, then zoom to reveal cities and project counts.</span></div></div>`;
      const svg=m.querySelector('.world-svg'),g=m.querySelector('.wm-transform'),detail=m.querySelector('[data-map-detail]');
      const clamp=()=>{const maxX=(scale-1)*WM.w*.52,maxY=(scale-1)*WM.h*.52;tx=Math.max(-maxX,Math.min(maxX,tx));ty=Math.max(-maxY,Math.min(maxY,ty))};
      const update=()=>{clamp();g.setAttribute('transform',`translate(${tx} ${ty}) scale(${scale})`);m.classList.toggle('city-mode',scale>=2.05);m.style.setProperty('--map-scale',scale.toFixed(2))};
      function zoomAt(factor,cx=WM.w/2,cy=WM.h/2){const old=scale;scale=Math.max(1,Math.min(5.2,scale*factor));const k=scale/old;tx=cx-(cx-tx)*k;ty=cy-(cy-ty)*k;update()}
      m.querySelector('[data-map-plus]').onclick=()=>zoomAt(1.45);m.querySelector('[data-map-minus]').onclick=()=>zoomAt(1/1.45);m.querySelector('[data-map-reset]').onclick=()=>{scale=1;tx=ty=0;update()};
      svg.addEventListener('wheel',e=>{e.preventDefault();const r=svg.getBoundingClientRect();const cx=(e.clientX-r.left)/r.width*WM.w,cy=(e.clientY-r.top)/r.height*WM.h;zoomAt(e.deltaY<0?1.18:1/1.18,cx,cy)},{passive:false});
      svg.addEventListener('pointerdown',e=>{drag=true;last={x:e.clientX,y:e.clientY};svg.setPointerCapture(e.pointerId);svg.classList.add('is-dragging')});
      svg.addEventListener('pointermove',e=>{if(!drag)return;const r=svg.getBoundingClientRect();tx+=(e.clientX-last.x)/r.width*WM.w;ty+=(e.clientY-last.y)/r.height*WM.h;last={x:e.clientX,y:e.clientY};update()});
      const endDrag=()=>{drag=false;svg.classList.remove('is-dragging')};svg.addEventListener('pointerup',endDrag);svg.addEventListener('pointercancel',endDrag);
      m.querySelectorAll('.wm-country-marker').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const x=+el.dataset.x,y=+el.dataset.y;scale=2.2;tx=WM.w/2-x*scale;ty=WM.h/2-y*scale;update();detail.innerHTML=`<b>${escapeHtml(el.dataset.name)} / ${escapeHtml(el.dataset.ar)}</b><span>${el.dataset.count} published project${+el.dataset.count===1?'':'s'} on the BADR website</span>`}));
      m.querySelectorAll('.wm-city-marker').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const c=BADR_PROJECT_MAP.cities[+el.dataset.index];detail.innerHTML=`<b>${escapeHtml(c.city)} / ${escapeHtml(c.ar)} · ${c.projects.length}</b><span class="map-project-links">${c.projects.map(p=>`<a href="${p[1]}">${escapeHtml(p[0])}</a>`).join('')}</span>`}));
      update();
    })
  }


  function initGlobalMapsV10(){
    const mounts=[...document.querySelectorAll('[data-global-map]')];
    if(!mounts.length)return;
    mounts.forEach(m=>{
      if(m.dataset.v10Ready)return;
      m.dataset.v10Ready='1';
      const layer=m.querySelector('.map-pan-layer');
      const svg=m.querySelector('.map-overlay');
      const overlay=svg&&svg.querySelector('.map-overlay-layer');
      if(!layer||!svg||!overlay)return; // static SVG remains visible even if enhancement cannot start
      if(m.dataset.mapMode==='pulse'){
        m.classList.add('is-pulse-map');
        const pulseLocations=[
          {city:'Cairo',ar:'القاهرة',lat:30.0444,lng:31.2357,projects:['Andalus Courtyard Residences','Badr Heights Villas']},
          {city:'Riyadh',ar:'الرياض',lat:24.7136,lng:46.6753,projects:['Al Noor Grand Mosque','Falcon Arena Concept']},
          {city:'Jeddah',ar:'جدة',lat:21.5433,lng:39.1728,projects:['Al Rehab Oasis','Jeddah Development Concepts','Pakistan Diplomatic Residential Compound']},
          {city:'Makkah',ar:'مكة',lat:21.3891,lng:39.8579,projects:['ATHAR Makkah']},
          {city:'Dubai',ar:'دبي',lat:25.2048,lng:55.2708,projects:['Desert Pearl Residences']},
          {city:'Doha',ar:'الدوحة',lat:25.2854,lng:51.5310,projects:['Souq Galleria Mall']},
          {city:'Kuwait City',ar:'مدينة الكويت',lat:29.3759,lng:47.9774,projects:['Wadi Court Mixed-Use']},
          {city:'Muscat',ar:'مسقط',lat:23.5880,lng:58.3829,projects:['Waterfront Lifestyle Center']},
          {city:'Toronto',ar:'تورنتو',lat:43.6532,lng:-79.3832,projects:['Maple Courtyard Homes','Crescent Design Hub']},
          {city:'New Jersey',ar:'نيوجيرسي',lat:40.0583,lng:-74.4057,projects:['Hudson Urban Lofts']}
        ];
        const pulseMarkers=pulseLocations.map((c,i)=>{
          const p=mapXY(c.lng,c.lat);
          return `<g class="v363-project-dot" data-city-index="${i}" data-x="${p.x}" data-y="${p.y}" transform="translate(${p.x} ${p.y})"><circle class="halo halo-a" r="9"/><circle class="halo halo-b" r="16"/><circle class="core" r="4.5"/></g>`;
        }).join('');
        overlay.innerHTML=pulseMarkers;
        const total=BADR_PROJECT_MAP.countries.reduce((a,c)=>a+c.count,0);
        const shell=m.closest('.global-map-shell')||m.parentElement;
        const counter=document.createElement('div');
        counter.className='v363-map-counter';
        counter.innerHTML=`<span data-map-count>0</span><div><b data-en="Published Projects" data-ar="مشروعًا منشورًا">Published Projects</b><small data-en="Across multiple markets" data-ar="عبر أسواق متعددة">Across multiple markets</small></div>`;
        shell.appendChild(counter);
        setLang(currentLang());
        const tip=document.createElement('div'); tip.className='v363-map-tooltip'; m.appendChild(tip);
        const countEl=counter.querySelector('[data-map-count]');
        let counted=false;
        const runCount=()=>{if(counted)return;counted=true;const t0=performance.now(),dur=1450;const step=t=>{const k=Math.min(1,(t-t0)/dur);const eased=1-Math.pow(1-k,3);countEl.textContent=Math.round(total*eased);if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
        if('IntersectionObserver' in window){new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting))runCount()},{threshold:.35}).observe(m)}else runCount();
        const dots=[...overlay.querySelectorAll('.v363-project-dot')];
        const show=(el)=>{const c=pulseLocations[+el.dataset.cityIndex];tip.innerHTML=`<b>${escapeHtml(currentLang()==='ar'?c.ar:c.city)} <span>· ${c.projects.length}</span></b><small>${c.projects.map(p=>escapeHtml(p)).join(' · ')}</small>`;tip.classList.add('is-visible')};
        dots.forEach(el=>{el.addEventListener('mouseenter',()=>show(el));el.addEventListener('focus',()=>show(el));el.addEventListener('click',()=>show(el));});
        m.addEventListener('mouseleave',()=>tip.classList.remove('is-visible'));
        let hot=0; if(dots.length){dots[0].classList.add('is-hot');setInterval(()=>{dots[hot]?.classList.remove('is-hot');hot=(hot+1)%dots.length;dots[hot]?.classList.add('is-hot')},1350)}
        return;
      }
      const countryMarkers=BADR_PROJECT_MAP.countries.map(c=>{
        const p=mapXY(c.lng,c.lat);
        return `<g class="v10-country-marker" data-country="${escapeHtml(c.name)}" data-ar="${escapeHtml(c.ar)}" data-count="${c.count}" data-x="${p.x}" data-y="${p.y}" transform="translate(${p.x} ${p.y})"><circle class="pulse" r="31"/><circle r="24"/><text class="label" text-anchor="middle" y="-4">${escapeHtml(c.name)}</text><text class="count" text-anchor="middle" y="14">${c.count}</text></g>`;
      }).join('');
      const cityMarkers=BADR_PROJECT_MAP.cities.map((c,i)=>{
        const p=mapXY(c.lng,c.lat);
        return `<g class="v10-city-marker" data-city-index="${i}" data-x="${p.x}" data-y="${p.y}" transform="translate(${p.x} ${p.y})"><circle class="pulse" r="10"/><circle r="10"/><text class="count" text-anchor="middle" y="4">${c.projects.length}</text><text text-anchor="middle" y="-17">${escapeHtml(c.city)}</text></g>`;
      }).join('');
      overlay.innerHTML=countryMarkers+cityMarkers;
      const controls=document.createElement('div');
      controls.className='v10-map-controls';
      controls.innerHTML='<button type="button" data-v10-plus aria-label="Zoom in">+</button><button type="button" data-v10-minus aria-label="Zoom out">−</button><button type="button" data-v10-reset aria-label="Reset map">⌂</button>';
      m.appendChild(controls);
      const detail=document.createElement('div');
      detail.className='v10-map-detail';
      detail.innerHTML='<b data-en="Explore project geography" data-ar="استكشف جغرافيا المشروعات">Explore project geography</b><span data-en="Click a country to zoom. Cities reveal linked projects and published counts." data-ar="اضغط على الدولة للتكبير، ثم استعرض المدن والمشروعات المرتبطة بها.">Click a country to zoom. Cities reveal linked projects and published counts.</span>';
      m.appendChild(detail);
      let scale=1,tx=0,ty=0,drag=false,last=null;
      const size=()=>({w:m.clientWidth||1,h:m.clientHeight||1});
      const clamp=()=>{const {w,h}=size();const maxX=Math.max(0,(scale-1)*w*.55),maxY=Math.max(0,(scale-1)*h*.55);tx=Math.max(-maxX,Math.min(maxX,tx));ty=Math.max(-maxY,Math.min(maxY,ty));};
      const update=()=>{
        clamp();
        layer.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
        m.classList.toggle('city-mode',scale>=1.85);
        const inv=1/scale;
        overlay.querySelectorAll('.v10-country-marker,.v10-city-marker').forEach(marker=>{
          const x=marker.dataset.x||0,y=marker.dataset.y||0;
          marker.setAttribute('transform',`translate(${x} ${y}) scale(${inv})`);
        });
      };
      function zoomAt(factor,cx,cy){const {w,h}=size();cx=cx==null?w/2:cx;cy=cy==null?h/2:cy;const old=scale;scale=Math.max(1,Math.min(4.6,scale*factor));const k=scale/old;tx=cx-(cx-tx)*k;ty=cy-(cy-ty)*k;update();}
      controls.querySelector('[data-v10-plus]').addEventListener('click',()=>zoomAt(1.38));
      controls.querySelector('[data-v10-minus]').addEventListener('click',()=>zoomAt(1/1.38));
      controls.querySelector('[data-v10-reset]').addEventListener('click',()=>{scale=1;tx=0;ty=0;update();detail.innerHTML='<b>BADR Atelier</b><span>Published project geography · جغرافيا المشروعات المنشورة</span>';});
      svg.addEventListener('wheel',e=>{e.preventDefault();const r=m.getBoundingClientRect();zoomAt(e.deltaY<0?1.16:1/1.16,e.clientX-r.left,e.clientY-r.top);},{passive:false});
      svg.addEventListener('pointerdown',e=>{drag=true;last={x:e.clientX,y:e.clientY};svg.setPointerCapture?.(e.pointerId);m.classList.add('is-dragging');});
      svg.addEventListener('pointermove',e=>{if(!drag)return;tx+=e.clientX-last.x;ty+=e.clientY-last.y;last={x:e.clientX,y:e.clientY};update();});
      const end=()=>{drag=false;m.classList.remove('is-dragging');};svg.addEventListener('pointerup',end);svg.addEventListener('pointercancel',end);svg.addEventListener('pointerleave',()=>{if(drag)end();});
      overlay.querySelectorAll('.v10-country-marker').forEach(el=>el.addEventListener('click',e=>{
        e.stopPropagation();
        const {w,h}=size(),x=(+el.dataset.x/WM.w)*w,y=(+el.dataset.y/WM.h)*h;
        scale=2.05;tx=w/2-x*scale;ty=h/2-y*scale;update();
        detail.innerHTML=`<b>${escapeHtml(el.dataset.country)} / ${escapeHtml(el.dataset.ar)} <strong class="map-detail-count">${el.dataset.count}</strong></b><span>${el.dataset.count} published project${+el.dataset.count===1?'':'s'} · Click a city marker to open linked projects.</span>`;
      }));
      overlay.querySelectorAll('.v10-city-marker').forEach(el=>el.addEventListener('click',e=>{
        e.stopPropagation();const c=BADR_PROJECT_MAP.cities[+el.dataset.cityIndex];
        detail.innerHTML=`<b>${escapeHtml(c.city)} / ${escapeHtml(c.ar)} · ${c.projects.length}</b>${c.projects.map(p=>`<a href="${p[1]}">${escapeHtml(p[0])}</a>`).join('')}`;
      }));
      window.addEventListener('resize',update,{passive:true});
      update();
    });
  }



  function renderMapCountryCards(){
    document.querySelectorAll('.global-map-shell').forEach(shell=>{
      if(shell.querySelector('.map-country-rack'))return;
      const map=shell.querySelector('[data-global-map]');
      if(!map)return;
      const rack=document.createElement('div');
      rack.className='map-country-rack map-country-marquee';
      rack.setAttribute('aria-label','Project counts by country');
      const cardMarkup=BADR_PROJECT_MAP.countries.map((c,i)=>`<button class="map-country-card" type="button" data-country-card="${escapeHtml(c.name)}" data-country-index="${i}"><span data-en="${escapeHtml(c.name)}" data-ar="${escapeHtml(c.ar)}">${escapeHtml(c.name)}</span><b>${c.count}</b><small data-en="projects" data-ar="مشروعات">projects</small></button>`).join('');
      rack.innerHTML=`<div class="map-country-track"><div class="map-country-set">${cardMarkup}</div><div class="map-country-set" aria-hidden="true">${cardMarkup}</div></div>`;
      shell.appendChild(rack);
      const caption=shell.querySelector('.map-caption');
      const allCards=[...rack.querySelectorAll('.map-country-card')];
      const activateCountry=idx=>{
        allCards.forEach(x=>x.classList.toggle('is-active',+x.dataset.countryIndex===idx));
        const c=BADR_PROJECT_MAP.countries[idx];
        if(caption){caption.innerHTML=`<b>${escapeHtml(currentLang()==='ar'?c.ar:c.name)} · ${c.count}</b><br/><span>${currentLang()==='ar'?'مشروعات ممثلة في البورتفوليو الحالي':'projects represented in the current portfolio'}</span>`}
        const marker=[...map.querySelectorAll('.v10-country-marker')].find(x=>x.dataset.country===c.name);
        marker?.dispatchEvent(new MouseEvent('click',{bubbles:true}));
        // Pulse-map pages use city dots rather than country markers. Highlight the matching geography.
        const cityCountry={
          'Cairo':'Egypt','Riyadh':'Saudi Arabia','Jeddah':'Saudi Arabia','Makkah':'Saudi Arabia','Dubai':'United Arab Emirates','Doha':'Qatar','Kuwait City':'Kuwait','Muscat':'Oman','Toronto':'Canada','New Jersey':'United States'
        };
        const dots=[...map.querySelectorAll('.v363-project-dot')];
        dots.forEach(dot=>{
          const city=['Cairo','Riyadh','Jeddah','Makkah','Dubai','Doha','Kuwait City','Muscat','Toronto','New Jersey'][+dot.dataset.cityIndex];
          dot.classList.toggle('is-country-hot',cityCountry[city]===c.name);
        });
      };
      allCards.forEach(card=>card.addEventListener('click',()=>activateCountry(+card.dataset.countryIndex)));
      let active=0,paused=false;
      const cycle=()=>{if(!paused){activateCountry(active);active=(active+1)%BADR_PROJECT_MAP.countries.length}};
      const timer=setInterval(cycle,2200);cycle();
      rack.addEventListener('mouseenter',()=>paused=true);
      rack.addEventListener('mouseleave',()=>paused=false);
      rack.addEventListener('focusin',()=>paused=true);
      rack.addEventListener('focusout',()=>paused=false);
      setLang(currentLang());
    });
  }

  function bindProjectIntelligence(){
    const journey=document.querySelector('[data-journey]');
    if(journey){
      const steps=[...journey.querySelectorAll('[data-journey-step]')], progress=journey.querySelector('[data-journey-progress]');
      const updateJourney=()=>{
        const r=journey.getBoundingClientRect(), vh=innerHeight||800;
        const raw=(vh*.62-r.top)/(Math.max(1,r.height-vh*.25));
        const pct=Math.max(0,Math.min(1,raw));
        if(progress)progress.style.width=`${(pct*100).toFixed(1)}%`;
        const idx=Math.min(steps.length-1,Math.max(0,Math.floor(pct*steps.length)));
        steps.forEach((s,i)=>s.classList.toggle('is-active',i<=idx));
      };
      updateJourney();addEventListener('scroll',updateJourney,{passive:true});addEventListener('resize',updateJourney,{passive:true});
    }
    if(matchMedia('(pointer:fine)').matches){
      document.querySelectorAll('.thinking-card,.flagship-case').forEach(card=>{
        card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--px',`${((e.clientX-r.left)/r.width*100).toFixed(1)}%`);card.style.setProperty('--py',`${((e.clientY-r.top)/r.height*100).toFixed(1)}%`)});
      });
    }
  }


  function bindProofFilters(){
    const buttons=[...document.querySelectorAll('[data-proof-filter]')];
    const cards=[...document.querySelectorAll('[data-proof-card]')];
    if(!buttons.length||!cards.length)return;
    const activate=tag=>{
      const safe=buttons.some(b=>b.dataset.proofFilter===tag)?tag:'all';
      buttons.forEach(b=>b.classList.toggle('is-active',b.dataset.proofFilter===safe));
      cards.forEach(card=>{
        const tags=(card.dataset.proofCard||'').split(/\s+/);
        card.classList.toggle('is-hidden',safe!=='all'&&!tags.includes(safe));
      });
    };
    buttons.forEach(btn=>btn.addEventListener('click',()=>activate(btn.dataset.proofFilter)));
    const preset=new URLSearchParams(window.location.search).get('focus');
    activate(preset||'all');
  }


  function bindLandExplorer(){
    const box=document.querySelector('[data-land-explorer]');
    if(!box)return;
    const area=box.querySelector('#exploreLandArea'),market=box.querySelector('#exploreMarket'),type=box.querySelector('#exploreType'),far=box.querySelector('#exploreFar'),frontage=box.querySelector('#exploreFrontage'),priority=box.querySelector('#explorePriority');
    const dashboardArea=document.getElementById('landArea');
    const fmt=v=>new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(v);
    const cfgs={yield:{far:1.08,eff:.82,unit:128,score:78},balanced:{far:1,eff:.76,unit:155,score:86},premium:{far:.88,eff:.70,unit:190,score:93}};
    const texts={
      residential:{yield:['Efficient Residential','Maximize saleable stock with controlled amenity load and efficient circulation.'],balanced:['Market-Ready Community','Balance product mix, landscape, privacy, identity and phasing.'],premium:['Signature Residential Destination','Trade some density for premium arrival, stronger landscape and perceived value.']},
      mixed:{yield:['Efficient Mixed-Use','Prioritize productive floor area and commercially legible uses.'],balanced:['Lifestyle Mixed-Use','Balance residential, retail, public realm and day-to-night activity.'],premium:['Destination Mixed-Use','Create a stronger address with premium frontage, arrival and placemaking.']},
      hospitality:{yield:['Efficient Hospitality','Prioritize keys, service efficiency and operational clarity.'],balanced:['Lifestyle Hospitality','Balance keys, amenities, F&B and guest experience.'],premium:['Signature Hospitality Destination','Create premium arrival, views, amenities and memorable experience.']},
      commercial:{yield:['Efficient Commercial','Prioritize usable area, floorplate efficiency and access.'],balanced:['Market-Ready Business Hub','Balance leasable efficiency, amenities and brand identity.'],premium:['Landmark Business Address','Use frontage, arrival and architecture to strengthen prestige.']},
      community:{yield:['Efficient Community','Prioritize saleable stock, access and repeatable product logic.'],balanced:['Balanced Residential Community','Combine product mix, landscape, privacy and amenities.'],premium:['Signature Gated Destination','Create premium hierarchy, arrival sequence and placemaking identity.']}
    };
    let syncing=false;
    const syncDashboardArea=land=>{
      if(!dashboardArea||syncing)return;
      const next=String(Math.round(land));
      if(String(dashboardArea.value)!==next){
        syncing=true;
        dashboardArea.value=next;
        dashboardArea.dispatchEvent(new Event('input',{bubbles:true}));
        syncing=false;
      }
    };
    const update=()=>{
      const land=Math.max(0,+area.value||0),baseFar=Math.max(.1,+far.value||0),front=+frontage.value||1,t=type.value,m=market.value;
      box.querySelector('[data-land-summary]').textContent=fmt(land)+' m²';
      box.querySelector('[data-market-summary]').textContent=m;
      document.querySelectorAll('[data-final-land]').forEach(el=>el.textContent=fmt(land)+' m²');
      document.querySelectorAll('[data-final-market]').forEach(el=>el.textContent=`${m} • ${type.options[type.selectedIndex].text}`);
      Object.entries(cfgs).forEach(([key,cfg])=>{
        const gfa=land*baseFar*cfg.far,sell=gfa*cfg.eff,units=Math.max(1,Math.round(sell/cfg.unit)),score=Math.round(Math.min(98,cfg.score+(front-1)*45)),tx=(texts[t]||texts.residential)[key];
        const put=(attr,val)=>{const el=box.querySelector(`[data-${attr}="${key}"]`);if(el)el.textContent=val};
        put('scenario-title',tx[0]);put('scenario-copy',tx[1]);put('scenario-gfa','~'+fmt(gfa)+' m²');put('scenario-sellable','~'+fmt(sell)+' m²');put('scenario-units','~'+fmt(units));put('scenario-score',score+'/100');
        const card=box.querySelector(`[data-scenario-card="${key}"]`);
        card.dataset.land=land;card.dataset.far=(baseFar*cfg.far).toFixed(2);card.dataset.eff=(cfg.eff*100).toFixed(0);
      });
      box.querySelectorAll('[data-scenario-card]').forEach(c=>c.classList.remove('is-recommended'));
      const rec=priority.value==='yield'?'yield':priority.value==='premium'?'premium':'balanced';
      box.querySelector(`[data-scenario-card="${rec}"]`)?.classList.add('is-recommended');
      syncDashboardArea(land);
    };
    [area,market,type,far,frontage,priority].forEach(el=>el.addEventListener('input',update));
    if(dashboardArea){
      dashboardArea.addEventListener('input',()=>{
        if(syncing)return;
        const next=Math.max(0,+dashboardArea.value||0);
        if(String(area.value)!==String(next))area.value=String(next);
        update();
      });
    }
    box.querySelectorAll('[data-use-scenario]').forEach(btn=>btn.addEventListener('click',()=>{
      const card=box.querySelector(`[data-scenario-card="${btn.dataset.useScenario}"]`);
      const a=document.getElementById('landArea'),f=document.getElementById('far'),e=document.getElementById('efficiency');
      if(a)a.value=card.dataset.land;if(f)f.value=card.dataset.far;if(e)e.value=card.dataset.eff;
      [a,f,e].forEach(x=>x&&x.dispatchEvent(new Event('input',{bubbles:true})));
      document.getElementById('dashboard')?.scrollIntoView({behavior:'smooth',block:'start'});
    }));
    update();
  }

  function bindInvestorCalculator(){

    const box=document.querySelector('[data-investor-calculator]');
    if(!box)return;
    const $=sel=>box.querySelector(sel);
    const inputs=[...box.querySelectorAll('input')];
    const output={
      gfa: $('[data-out="gfa"]'), sellable: $('[data-out="sellable"]'), revenue: $('[data-out="revenue"]'), cost: $('[data-out="cost"]'), profit: $('[data-out="profit"]'), roi: $('[data-out="roi"]'), irr: $('[data-out="irr"]'), construction: $('[data-out="construction"]'), financeSoft: $('[data-out="financeSoft"]'), debtAmt: $('[data-out="debtAmt"]'), equityReq: $('[data-out="equityReq"]'), revpsm: $('[data-out="revpsm"]'), costpsm: $('[data-out="costpsm"]'), margin: $('[data-out="margin"]')
    };
    const fmt0=v=>new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(v);
    const compact=v=>{
      const a=Math.abs(v); const sign=v<0?'-':'';
      if(a>=1e9)return `${sign}SAR ${(a/1e9).toFixed(2)}B`;
      if(a>=1e6)return `${sign}SAR ${(a/1e6).toFixed(1)}M`;
      if(a>=1e3)return `${sign}SAR ${(a/1e3).toFixed(0)}K`;
      return `${sign}SAR ${fmt0(a)}`;
    };
    const set=(key,val)=>{ if(output[key]) output[key].textContent=val; };
    const setText=(selector,val)=>{const el=document.querySelector(selector);if(el)el.textContent=val};
    const setAll=(selector,val)=>document.querySelectorAll(selector).forEach(el=>el.textContent=val);
    const normalizeWeights=(arr,total)=>{const sum=arr.reduce((a,b)=>a+b,0)||1;return arr.map(v=>v/sum*total)};

    function updateCashflow({landCost,construction,financeSoft,revenue,equity,profit}){
      const n=37;
      const flows=Array(n).fill(0);
      flows[0]-=landCost;
      const cw=normalizeWeights(Array.from({length:24},(_,i)=>Math.max(.08,Math.sin(Math.PI*(i+1)/25))),construction);
      cw.forEach((v,i)=>flows[i+1]-=v);
      const sw=normalizeWeights(Array.from({length:28},(_,i)=>.5+.5*Math.sin(Math.PI*(i+1)/29)),financeSoft);
      sw.forEach((v,i)=>flows[i+1]-=v);
      const rw=normalizeWeights(Array.from({length:29},(_,i)=>Math.max(.05,Math.sin(Math.PI*(i+1)/30))),revenue);
      rw.forEach((v,i)=>flows[i+8]+=v);
      const cumulative=[];let c=0;flows.forEach(v=>{c+=v;cumulative.push(c)});
      const min=Math.min(...cumulative,0),max=Math.max(...cumulative,0),range=Math.max(1,max-min);
      const x=i=>44+(756*i/(n-1));
      const y=v=>30+(220*(max-v)/range);
      const pts=cumulative.map((v,i)=>[x(i),y(v)]);
      const line=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
      const zeroY=y(0);
      const area=`M ${pts[0][0].toFixed(1)} ${zeroY.toFixed(1)} `+pts.map(p=>`L ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')+` L ${pts[pts.length-1][0].toFixed(1)} ${zeroY.toFixed(1)} Z`;
      const lp=document.querySelector('[data-cashflow-line]'),ap=document.querySelector('[data-cashflow-area]'),zl=document.querySelector('[data-zero-line]');
      if(lp){lp.setAttribute('d',line);lp.classList.remove('is-updating');void lp.offsetWidth;lp.classList.add('is-updating')}
      if(ap)ap.setAttribute('d',area);
      if(zl){zl.setAttribute('y1',zeroY);zl.setAttribute('y2',zeroY)}
      const peak=Math.abs(min);
      let breakEven='> M36';
      for(let i=1;i<cumulative.length;i++){if(cumulative[i]>=0&&Math.min(...cumulative.slice(0,i))<0){breakEven=`M${i}`;break}}
      setText('[data-chart-out="peakFunding"]',compact(peak));
      setText('[data-chart-out="breakEven"]',breakEven);
      setText('[data-chart-out="equityMultiple"]',(equity>0?((equity+Math.max(0,profit))/equity):0).toFixed(2)+'×');
    }

    function updateCostMix({landCost,construction,financeSoft,total}){
      const lp=total>0?landCost/total*100:0,cp=total>0?construction/total*100:0,sp=Math.max(0,100-lp-cp);
      const donut=document.querySelector('[data-cost-donut]');
      if(donut)donut.style.background=`conic-gradient(#d5a541 0 ${lp.toFixed(1)}%,#4f8cff ${lp.toFixed(1)}% ${(lp+cp).toFixed(1)}%,#72c99a ${(lp+cp).toFixed(1)}% 100%)`;
      setText('[data-chart-out="totalCost"]',compact(total));
      setText('[data-chart-out="landPct"]',lp.toFixed(1)+'%');
      setText('[data-chart-out="constructionPct"]',cp.toFixed(1)+'%');
      setText('[data-chart-out="softPct"]',sp.toFixed(1)+'%');
    }

    function updateBridge({revenue,total,profit,roi,margin,eff}){
      const max=Math.max(revenue,total,Math.max(0,profit),1);
      const values={revenue,cost:total,profit:Math.max(0,profit)};
      Object.entries(values).forEach(([k,v])=>{
        setAll(`[data-bridge-out="${k}"]`,compact(k==='profit'?profit:v));
        document.querySelectorAll(`[data-bridge-bar="${k}"]`).forEach(el=>el.style.width=Math.max(0,Math.min(100,v/max*100))+'%');
      });
      setAll('[data-bridge-out="roi"]',roi.toFixed(1)+'%');
      setAll('[data-bridge-out="margin"]',margin.toFixed(1)+'%');
      setAll('[data-bridge-out="efficiency"]',(eff*100).toFixed(0)+'%');
    }

    function updateSensitivity({landCost,construction,financeSoft,revenue}){
      const grid=document.querySelector('[data-sensitivity-grid]');if(!grid)return;
      const deltas=[-10,-5,0,5,10];
      const softBase=Math.max(0,financeSoft);
      let html='<div class="sensitivity-cell head">Δ</div>'+deltas.map(d=>`<div class="sensitivity-cell head">${d>0?'+':''}${d}%</div>`).join('');
      deltas.forEach(cd=>{
        html+=`<div class="sensitivity-cell head">${cd>0?'+':''}${cd}%</div>`;
        deltas.forEach(pd=>{
          const rev=revenue*(1+pd/100);
          const con=construction*(1+cd/100);
          const soft=softBase*(.65*(1+cd/100)+.35*(1+pd/100));
          const total=landCost+con+soft;
          const roi=total>0?(rev-total)/total*100:0;
          const min=-25,max=75,t=Math.max(0,Math.min(1,(roi-min)/(max-min)));
          const hue=10+110*t; const sat=66; const light=91-18*t;
          html+=`<div class="sensitivity-cell" style="background:hsl(${hue} ${sat}% ${light}%);color:${t>.65?'#12351f':'#5b3a23'}" title="Price ${pd}% / Cost ${cd}%">${roi.toFixed(1)}%</div>`;
        });
      });
      grid.innerHTML=html;
    }

    const calc=()=>{
      const land=+$('#landArea').value||0;
      const far=+$('#far').value||0;
      const eff=(+$('#efficiency').value||0)/100;
      const sale=+$('#salePrice').value||0;
      const build=+$('#buildCost').value||0;
      const landCost=+$('#landCost').value||0;
      const debt=(+$('#debt').value||0)/100;
      const incentive=(+$('#incentive').value||0)/100;
      const gfa=land*far;
      const sellable=gfa*eff;
      const revenue=sellable*sale;
      const construction=gfa*build;
      const finance=(construction+landCost)*debt*0.12;
      const soft=(revenue*0.04)+(construction*0.08);
      const financeSoft=finance+soft;
      const total=landCost+construction+financeSoft;
      const profit=revenue-total;
      const roi=total>0?(profit/total)*100:0;
      const debtAmt=total*debt;
      const equity=Math.max(1,total-debtAmt);
      const baseReturn=profit/equity;
      const irr=((Math.pow(1+Math.max(0,baseReturn),1/3)-1)+incentive)*100;
      const revpsm=sellable>0?revenue/sellable:0;
      const costpsm=gfa>0?total/gfa:0;
      const margin=revenue>0?(profit/revenue)*100:0;
      set('gfa',fmt0(gfa)+' m²'); set('sellable',fmt0(sellable)+' m²'); set('revenue','SAR '+fmt0(revenue)); set('cost','SAR '+fmt0(total)); set('profit','SAR '+fmt0(profit)); set('roi',roi.toFixed(1)+'%'); set('irr',irr.toFixed(1)+'%'); set('construction','SAR '+fmt0(construction)); set('financeSoft','SAR '+fmt0(financeSoft)); set('debtAmt','SAR '+fmt0(debtAmt)); set('equityReq','SAR '+fmt0(equity)); set('revpsm','SAR '+fmt0(revpsm)); set('costpsm','SAR '+fmt0(costpsm)); set('margin',margin.toFixed(1)+'%');
      const model={landCost,construction,financeSoft,total,revenue,profit,roi,margin,eff,equity};
      updateCashflow(model); updateCostMix(model); updateBridge(model); updateSensitivity(model);
    };
    inputs.forEach(i=>i.addEventListener('input',calc));
    calc();
  }

  
  function initJourneyPremium(){
    const steps=[...document.querySelectorAll('[data-journey-premium] .journey-step')];
    if(!steps.length)return;
    const clear=()=>steps.forEach(step=>step.classList.remove('is-hot','is-next'));
    steps.forEach((step,index)=>{
      const activate=()=>{clear(); step.classList.add('is-hot'); if(steps[index+1])steps[index+1].classList.add('is-next');};
      step.addEventListener('mouseenter',activate);
      step.addEventListener('focusin',activate);
    });
    document.querySelector('[data-journey-premium]')?.addEventListener('mouseleave',clear);
  }

  function initHoverCounters(){
    const cards=[...document.querySelectorAll('[data-hover-counter]')];
    if(!cards.length)return;
    const animate=node=>{
      const target=Math.max(1,+node.dataset.counterFinal||+node.textContent.replace(/[^0-9]/g,'')||1);
      if(node.dataset.counterBusy==='1')return;
      node.dataset.counterBusy='1';
      const start=1;
      const t0=performance.now();
      const dur=920;
      const step=t=>{
        const p=Math.min(1,(t-t0)/dur);
        const eased=1-Math.pow(1-p,3);
        const value=Math.round(start+(target-start)*eased);
        node.textContent=value;
        if(p<1){requestAnimationFrame(step)}else{node.textContent=target;node.dataset.counterBusy='0';}
      };
      requestAnimationFrame(step);
    };
    cards.forEach(card=>{
      const node=card.querySelector('[data-counter-final]');
      if(!node)return;
      card.addEventListener('mouseenter',()=>animate(node));
      card.addEventListener('focusin',()=>animate(node));
      card.addEventListener('touchstart',()=>animate(node),{passive:true,once:true});
    });
  }

function bindKpiCounters(){
    const nodes=[...document.querySelectorAll('[data-kpi]')]; if(!nodes.length)return;
    const run=el=>{ if(el.dataset.counted)return; el.dataset.counted='1'; const target=+el.dataset.kpi||0; const t0=performance.now(); const dur=1000; const step=t=>{const p=Math.min(1,(t-t0)/dur); const eased=1-Math.pow(1-p,3); el.textContent=Math.round(target*eased); if(p<1)requestAnimationFrame(step)}; requestAnimationFrame(step)};
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target)}}),{threshold:.45});nodes.forEach(n=>io.observe(n));}else nodes.forEach(run);
  }


  function bindPortfolioProgressV365(){
    const widget=document.querySelector('[data-portfolio-progress]');
    const cards=[...document.querySelectorAll('.portfolio-v363-card')];
    if(!widget||!cards.length)return;
    const current=widget.querySelector('[data-portfolio-current]');
    const total=widget.querySelector('[data-portfolio-total]');
    total.textContent=String(cards.length).padStart(2,'0');
    let seen=0;
    const update=()=>{
      const n=Math.max(0,Math.min(cards.length,seen));
      current.textContent=String(n).padStart(2,'0');
      widget.style.setProperty('--portfolio-progress',`${(n/cards.length)*360}deg`);
      widget.classList.toggle('is-complete',n===cards.length);
    };
    if('IntersectionObserver' in window){
      const observed=new WeakSet();
      const io=new IntersectionObserver(entries=>{
        entries.forEach(e=>{
          if(e.isIntersecting&&!observed.has(e.target)){observed.add(e.target);seen++;update();io.unobserve(e.target)}
        });
      },{threshold:.28,rootMargin:'0px 0px -12% 0px'});
      cards.forEach(c=>io.observe(c));
    }else{seen=cards.length;update()}
    const hero=document.querySelector('.portfolio-v363-hero');
    const footer=document.querySelector('.site-footer');
    const vis=()=>{
      const hy=hero?hero.getBoundingClientRect().bottom:0;
      const fy=footer?footer.getBoundingClientRect().top:innerHeight+1;
      widget.classList.toggle('is-visible',hy<innerHeight*.7&&fy>innerHeight*.25);
    };
    addEventListener('scroll',vis,{passive:true});vis();update();
  }

  function protectPortfolioMedia(){
    const selector='img[src*="/projects-v36-3/"],img[src*="/bim-v365/"]';
    document.querySelectorAll(selector).forEach(img=>{img.draggable=false;img.setAttribute('data-badr-protected','1')});
    document.addEventListener('dragstart',e=>{if(e.target?.matches?.(selector))e.preventDefault()});
    document.addEventListener('contextmenu',e=>{if(e.target?.matches?.(selector))e.preventDefault()});
  }

  renderHeader();protectPortfolioMedia();renderFooter();renderSocials();bindMenu();bindHeader();bindLanguage();bindReveal();bindFilters();bindInquiryForm();bindCarousels();bindCounters();bindPremiumDynamics();bindProjectIntelligence();initGlobalMapsV10();renderMapCountryCards();bindPortfolioProgressV365();
  bindProofFilters();
  bindLandExplorer();
  bindInvestorCalculator();
  bindKpiCounters();
  initJourneyPremium();
  initHoverCounters();
})();

/* ===== V36.4 cinematic project gallery ===== */
(() => {
  function initProjectPortfolioCinema(){
    const hero=document.querySelector('.project-v363-hero');
    if(hero && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
      hero.addEventListener('pointermove',e=>{
        const r=hero.getBoundingClientRect();
        const x=((e.clientX-r.left)/r.width-.5)*8;
        const y=((e.clientY-r.top)/r.height-.5)*6;
        hero.style.setProperty('--hero-shift-x',`${x.toFixed(2)}px`);
        hero.style.setProperty('--hero-shift-y',`${y.toFixed(2)}px`);
      });
      hero.addEventListener('pointerleave',()=>{
        hero.style.setProperty('--hero-shift-x','0px');
        hero.style.setProperty('--hero-shift-y','0px');
      });
    }

    const figures=[...document.querySelectorAll('.project-v363-gallery figure')];
    if(!figures.length)return;
    const box=document.createElement('div');
    box.className='project-lightbox';
    box.setAttribute('aria-hidden','true');
    box.innerHTML='<div class="project-lightbox-stage"><button class="project-lightbox-close" type="button" aria-label="Close image">×</button><button class="project-lightbox-prev" type="button" aria-label="Previous image">‹</button><img alt=""/><button class="project-lightbox-next" type="button" aria-label="Next image">›</button></div>';
    document.body.appendChild(box);
    const img=box.querySelector('img');
    let index=0;
    const show=i=>{
      index=(i+figures.length)%figures.length;
      const source=figures[index].querySelector('img');
      if(!source)return;
      img.src=source.currentSrc||source.src;
      img.alt=source.alt||'';
    };
    const open=i=>{show(i);box.classList.add('is-open');box.setAttribute('aria-hidden','false');document.body.classList.add('project-lightbox-open');};
    const close=()=>{box.classList.remove('is-open');box.setAttribute('aria-hidden','true');document.body.classList.remove('project-lightbox-open');};
    figures.forEach((fig,i)=>{
      fig.addEventListener('click',()=>open(i));
      fig.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i)}});
    });
    box.querySelector('.project-lightbox-close').addEventListener('click',close);
    box.querySelector('.project-lightbox-prev').addEventListener('click',e=>{e.stopPropagation();show(index-1)});
    box.querySelector('.project-lightbox-next').addEventListener('click',e=>{e.stopPropagation();show(index+1)});
    box.addEventListener('click',e=>{if(e.target===box)close()});
    document.addEventListener('keydown',e=>{
      if(!box.classList.contains('is-open'))return;
      if(e.key==='Escape')close();
      if(e.key==='ArrowLeft')show(index-1);
      if(e.key==='ArrowRight')show(index+1);
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initProjectPortfolioCinema);else initProjectPortfolioCinema();
})();

/* ===== V36.8 Diplomatic cinematic interactions ===== */
(() => {
  function currentLang(){ return document.documentElement.lang === 'ar' ? 'ar' : 'en'; }
  function setBilingual(el,en,ar){
    if(!el) return;
    el.dataset.en=en; el.dataset.ar=ar; el.innerHTML=currentLang()==='ar'?ar:en;
  }
  function initCinema(){
    document.querySelectorAll('[data-diplomatic-cinema]').forEach(box=>{
      const player=box.querySelector('[data-cinema-player]');
      const source=player?.querySelector('source');
      const title=box.querySelector('[data-cinema-title]');
      const desc=box.querySelector('[data-cinema-desc]');
      const count=box.querySelector('[data-cinema-count]');
      const buttons=[...box.querySelectorAll('[data-video-src]')];
      if(!player||!source||!buttons.length)return;
      const activateFilm=(btn,i)=>{
        buttons.forEach(b=>b.classList.remove('is-active')); btn.classList.add('is-active');
        if(source.src!==new URL(btn.dataset.videoSrc, location.href).href){
          source.src=btn.dataset.videoSrc;
          player.poster=btn.dataset.poster||'';
          player.load();
        }
        player.muted=true;
        const play=player.play(); if(play&&play.catch)play.catch(()=>{});
        setBilingual(title,btn.dataset.titleEn||'',btn.dataset.titleAr||'');
        setBilingual(desc,btn.dataset.descEn||'',btn.dataset.descAr||'');
        if(count)count.textContent=String(i+1).padStart(2,'0')+' / '+String(buttons.length).padStart(2,'0');
      };
      buttons.forEach((btn,i)=>{
        btn.addEventListener('click',()=>activateFilm(btn,i));
        btn.addEventListener('focusin',()=>activateFilm(btn,i));
        if(matchMedia('(pointer:fine)').matches){
          btn.addEventListener('mouseenter',()=>activateFilm(btn,i));
        }
      });
      if('IntersectionObserver' in window){
        const io=new IntersectionObserver(entries=>entries.forEach(e=>{
          if(e.isIntersecting){const p=player.play();if(p&&p.catch)p.catch(()=>{});} else player.pause();
        }),{threshold:.22}); io.observe(player);
      }
      const stage=box.querySelector('[data-cinema-stage]');
      if(stage && matchMedia('(pointer:fine)').matches){
        stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();stage.style.setProperty('--cinema-x',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');stage.style.setProperty('--cinema-y',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')});
      }
    });
  }
  function initDiplomaticNav(){
    const nav=document.querySelector('[data-diplomatic-nav]'); if(!nav)return;
    const links=[...nav.querySelectorAll('[data-section-link]')];
    const pairs=links.map(a=>[a,document.getElementById(a.dataset.sectionLink)]).filter(x=>x[1]);
    if(!pairs.length)return;
    const activate=id=>links.forEach(a=>a.classList.toggle('is-active',a.dataset.sectionLink===id));
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible)activate(visible.target.id);
    },{rootMargin:'-18% 0px -60% 0px',threshold:[0,.15,.35,.6]});
    pairs.forEach(([,s])=>observer.observe(s));
    links.forEach(a=>a.addEventListener('click',()=>activate(a.dataset.sectionLink)));
  }
  function initDiplomaticParallax(){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const main=document.querySelector('body.diplomatic-cinematic main');
    const media=[...document.querySelectorAll('[data-parallax-media]')];
    const facade=document.querySelector('[data-parallax-section]');
    let ticking=false;
    const update=()=>{
      ticking=false; const vh=innerHeight||800;
      if(main) main.style.setProperty('--dip-page-shift',Math.max(-36,Math.min(28,-scrollY*.015)).toFixed(1)+'px');
      media.forEach(el=>{const r=el.getBoundingClientRect(); if(r.bottom<0||r.top>vh)return; const c=(r.top+r.height*.5-vh*.5)/vh; el.style.setProperty('--dip-media-y',Math.max(-18,Math.min(18,-c*22)).toFixed(1)+'px');});
      if(facade){const r=facade.getBoundingClientRect();const c=(r.top+r.height*.5-vh*.5)/vh;facade.style.setProperty('--facade-y',Math.max(-38,Math.min(38,-c*34)).toFixed(1)+'px');}
    };
    const request=()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}};
    addEventListener('scroll',request,{passive:true});addEventListener('resize',request);update();
  }
  function protectDiplomaticMedia(){
    const selector='img[src*="pakistan-diplomatic-jeddah"],video source[src*="pakistan-diplomatic-jeddah"]';
    document.querySelectorAll('img[src*="pakistan-diplomatic-jeddah"]').forEach(img=>{img.draggable=false;img.setAttribute('data-badr-protected','1')});
    document.addEventListener('dragstart',e=>{if(e.target?.matches?.('img[src*="pakistan-diplomatic-jeddah"]'))e.preventDefault()});
    document.addEventListener('contextmenu',e=>{const t=e.target;if(t?.matches?.('img[src*="pakistan-diplomatic-jeddah"],video') && (t.src||'').includes('pakistan-diplomatic-jeddah'))e.preventDefault()});
  }
  function pauseDecorativeVideos(){
    const coarse=matchMedia('(pointer:coarse)').matches || innerWidth<820;
    const selector=coarse
      ? '.diplomatic-bim-film-stage video,.diplomatic-outcome-film video'
      : '.diplomatic-feature-media video,.diplomatic-showcase-card video,.diplomatic-hero-cinecard video,.diplomatic-bim-preview,.diplomatic-bim-link-film video,.diplomatic-bim-film-stage video,.diplomatic-outcome-film video';
    const vids=[...document.querySelectorAll(selector)];
    if(!vids.length||!('IntersectionObserver' in window))return;
    const io=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){const p=v.play();if(p&&p.catch)p.catch(()=>{});}else v.pause();}),{threshold:.12});
    vids.forEach(v=>io.observe(v));
  }
  function initHoverPlayVideos(){
    const vids=[...document.querySelectorAll('[data-hover-play]')];
    if(!vids.length)return;
    const fine=matchMedia('(pointer:fine)').matches;
    vids.forEach(v=>{
      const play=()=>{ v.muted=true; const p=v.play(); if(p&&p.catch)p.catch(()=>{}); };
      const pause=()=>{ v.pause(); try{ v.currentTime=0; }catch(err){} };
      if(fine){
        v.addEventListener('mouseenter',play);
        v.addEventListener('mouseleave',pause);
      }
      v.addEventListener('focusin',play);
      v.addEventListener('focusout',pause);
      v.addEventListener('touchstart',play,{passive:true});
    });
  }
  function initHoverPreviewCards(){
    const cards=[...document.querySelectorAll('[data-hover-preview-card]')];
    if(!cards.length)return;
    const fine=matchMedia('(pointer:fine)').matches;
    let active=null;
    const start=card=>{
      if(active && active!==card) stop(active,false);
      active=card;
      card.classList.add('is-previewing');
      const video=card.querySelector('video');
      if(video){ video.muted=true; const p=video.play(); if(p&&p.catch)p.catch(()=>{}); }
    };
    const stop=(card,clearActive=true)=>{
      if(!card)return;
      card.classList.remove('is-previewing');
      const video=card.querySelector('video');
      if(video){ video.pause(); try{ video.currentTime=0; }catch(err){} }
      if(clearActive && active===card) active=null;
    };
    cards.forEach(card=>{
      if(fine){
        card.addEventListener('mouseenter',()=>start(card));
        card.addEventListener('mouseleave',()=>stop(card));
      }
      card.addEventListener('focusin',()=>start(card));
      card.addEventListener('focusout',()=>stop(card));
      card.addEventListener('touchstart',()=>start(card),{passive:true});
    });
    if('IntersectionObserver' in window){
      const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)stop(e.target,false)}),{threshold:.08});
      cards.forEach(card=>io.observe(card));
    }
  }
  function initHeroCinematic(){
    const hero=document.querySelector('[data-hero-cinematic]');
    if(!hero)return;
    requestAnimationFrame(()=>hero.classList.add('is-ready'));
    if(matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
      hero.addEventListener('pointermove',e=>{
        const r=hero.getBoundingClientRect();
        hero.style.setProperty('--hero-pointer-x',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
        hero.style.setProperty('--hero-pointer-y',((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
      });
    }
    const cue=hero.querySelector('.diplomatic-scroll-cue');
    if(cue){
      const toggle=()=>cue.style.opacity=scrollY>80?'0':'0.82';
      addEventListener('scroll',toggle,{passive:true}); toggle();
    }
  }
  function initPageLoader(){
    if(document.body.dataset.pageLoader!=='cinematic')return;
    const loader=document.createElement('div');
    loader.className='badr-page-loader badr-page-loader-luxe';
    loader.innerHTML=`<div class="badr-page-loader-veil"></div><div class="badr-page-loader-inner"><div class="badr-page-loader-ring"></div><img src="assets/img/badr-logo.png" alt="BADR Atelier"/><div class="badr-page-loader-copy"><small>DIPLOMATIC DIGITAL EXPERIENCE</small><b>Curating the BADR cinematic chapter</b><span>Architecture • Hospitality • Residence • BIM</span></div><div class="badr-page-loader-bars"><span></span><span></span><span></span><span></span></div></div>`;
    document.body.prepend(loader);
    requestAnimationFrame(()=>loader.classList.add('is-visible'));
    let done=false;
    const finish=()=>{
      if(done)return; done=true;
      document.body.classList.add('page-loaded');
      loader.classList.add('is-out');
      setTimeout(()=>loader.remove(),1000);
    };
    addEventListener('load',()=>setTimeout(finish,320),{once:true});
    setTimeout(finish,2200);
  }
  function initSoftSectionFlow(){
    const sections=[...document.querySelectorAll('body.diplomatic-cinematic main>section, body.diplomatic-bim-page main>section')];
    if(!sections.length)return;
    sections.forEach((sec,i)=>{sec.classList.add('soft-flow-section'); if(i===0)sec.classList.add('is-flow-visible');});
    if(!('IntersectionObserver' in window))return;
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-flow-visible')}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    sections.forEach(sec=>io.observe(sec));
  }
  function initResponsiveVideos(){
    const compact=matchMedia('(pointer:coarse)').matches || innerWidth<820;
    if(!compact)return;
    document.querySelectorAll('.diplomatic-showcase-card video,.diplomatic-feature-media video,.diplomatic-hero-cinecard video,.diplomatic-bim-preview').forEach(v=>{
      v.removeAttribute('autoplay');
      v.preload='metadata';
      v.pause();
    });
  }
  function init(){initPageLoader();initCinema();initDiplomaticNav();initDiplomaticParallax();protectDiplomaticMedia();pauseDecorativeVideos();initHoverPlayVideos();initHoverPreviewCards();initHeroCinematic();initSoftSectionFlow();initResponsiveVideos();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

/* BADR AI V1 bootstrap — loads the branded assistant on every page using main-v20.js. */
(() => {
  if (window.__BADR_AI_BOOTSTRAP) return;
  window.__BADR_AI_BOOTSTRAP = true;
  const addCss = (href) => { if (document.querySelector(`link[href="${href}"]`)) return; const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l); };
  const addScript = (src) => new Promise((resolve,reject)=>{ if(document.querySelector(`script[src="${src}"]`)){resolve();return;} const s=document.createElement('script');s.src=src;s.defer=true;s.onload=resolve;s.onerror=reject;document.head.appendChild(s); });
  const boot = async () => {
    addCss('assets/badr-ai/badr-ai.css?v=2.2.2');
    try { await addScript('assets/badr-ai/badr-ai-config.js?v=2.2.2'); await addScript('assets/badr-ai/badr-ai.js?v=2.2.2'); }
    catch(err){ console.warn('[BADR AI] Unable to load assistant UI.', err); }
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();
