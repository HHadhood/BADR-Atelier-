(() => {
  const cfg = window.BADR_CONFIG || {};
  const html = document.documentElement;
  const page = document.body.dataset.page || '';
  const labels = {
    en:{home:'Home',developers:'For Developers',investors:'For Investors',projects:'Projects',bim:'BIM + Digital',services:'Services',about:'Studio',contact:'Contact',enquire:'Define the opportunity',language:'AR',rights:'All rights reserved.'},
    ar:{home:'الرئيسية',developers:'للمطورين',investors:'للمستثمرين',projects:'المشاريع',bim:'BIM + رقمنة',services:'الخدمات',about:'الاستوديو',contact:'تواصل',enquire:'عرّف الفرصة',language:'EN',rights:'جميع الحقوق محفوظة.'}
  };
  const currentLang=()=>localStorage.getItem('badr-lang') || (navigator.language&&navigator.language.startsWith('ar')?'ar':'en');
  function setLang(lang){
    localStorage.setItem('badr-lang',lang); html.lang=lang; html.dir=lang==='ar'?'rtl':'ltr'; document.body.classList.toggle('is-ar',lang==='ar');
    document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang]});
    const btn=document.querySelector('[data-lang-toggle]'); if(btn)btn.textContent=labels[lang].language;
    document.querySelectorAll('[data-location]').forEach(el=>el.textContent=lang==='ar'?cfg.locationAr:cfg.locationEn);
  }
  function navLink(key,href){const active=page===key?' is-active':'';return `<a class="nav-link${active}" href="${href}"><span data-en="${labels.en[key]}" data-ar="${labels.ar[key]}">${labels.en[key]}</span></a>`}
  function renderHeader(){const mount=document.getElementById('site-header');if(!mount)return;mount.innerHTML=`<header class="site-header" data-header><div class="shell nav-shell"><div class="brand-block"><a class="brand" href="index.html" aria-label="BADR Atelier home"><img src="assets/img/badr-logo.png" alt="BADR Atelier"/></a><div class="brand-tagline"><b data-en="Strategic Development, Architecture & Digital Delivery" data-ar="شريك استراتيجي للتطوير والعمارة والتسليم الرقمي">Strategic Development, Architecture & Digital Delivery</b><span>Development Strategy • Architecture • BIM • 4D • 5D</span></div></div><button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" data-menu-toggle><span></span><span></span></button><nav class="main-nav" data-menu>${navLink('home','index.html')}${navLink('developers','developers.html')}${navLink('investors','investors.html')}${navLink('projects','projects.html')}${navLink('bim','bim-digital.html')}${navLink('services','services.html')}${navLink('about','about.html')}${navLink('contact','contact.html')}</nav><div class="nav-actions"><button class="lang-toggle" type="button" data-lang-toggle>AR</button><a class="button button-small button-dark" href="contact.html"><span data-en="${labels.en.enquire}" data-ar="${labels.ar.enquire}">${labels.en.enquire}</span></a></div></div><div class="scroll-progress"><i data-scroll-progress></i></div></header>`}
  function iconSvg(name){
    const icons={
      linkedin:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.1 3.5A2.1 2.1 0 1 1 5.1 7.7 2.1 2.1 0 0 1 5.1 3.5ZM3.3 9h3.6v11.5H3.3V9Zm5.8 0h3.4v1.6h.05c.47-.9 1.63-1.95 3.35-1.95 3.58 0 4.24 2.35 4.24 5.4v6.45h-3.58v-5.72c0-1.36-.03-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.02v5.82H9.1V9Z"/></svg>`,
      x:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.7 3H22l-7.2 8.2L23.2 21h-6.6l-5.2-6.8L5.5 21H2.2l7.7-8.8L1.8 3h6.8l4.7 6.2L18.7 3Zm-1.2 16h1.8L7.6 4.9H5.7L17.5 19Z"/></svg>`,
      whatsapp:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a9.6 9.6 0 0 0-8.2 14.6L2.5 21.5l5-1.3A9.7 9.7 0 1 0 12 2Zm0 17.5c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A7.7 7.7 0 1 1 12 19.5Zm4.2-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.2 6.2 0 0 1-3.1-2.7c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.2-.5s0-.3-.1-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.5-.3Z"/></svg>`,
      youtube:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12s0-3.2-.4-4.7a2.8 2.8 0 0 0-2-2C18.1 5 12 5 12 5s-6.1 0-7.6.3a2.8 2.8 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.8 2.8 0 0 0 2 2C5.9 19 12 19 12 19s6.1 0 7.6-.3a2.8 2.8 0 0 0 2-2C22 15.2 22 12 22 12Zm-12 3.2V8.8l5.5 3.2-5.5 3.2Z"/></svg>`,
      facebook:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.4Z"/></svg>`
    };
    return icons[name]||'';
  }
  function socialMarkup(){
    const items=[
      ['linkedin',cfg.linkedin,'LinkedIn'],
      ['x',cfg.x,'X'],
      ['whatsapp',`https://wa.me/${(cfg.whatsapp||'').replace(/\D/g,'')}`,'WhatsApp'],
      ['youtube',cfg.youtube,'YouTube'],
      ['facebook',cfg.facebook,'Facebook']
    ];
    return `<div class="social-links">${items.map(([cls,url,label])=>url
      ?`<a class="social-link ${cls}" href="${url}" target="_blank" rel="noopener" title="${label}"><span class="social-icon" aria-hidden="true">${iconSvg(cls)}</span><span class="sr-only">${label}</span></a>`
      :`<span class="social-link ${cls} is-disabled" title="${label} — add official URL in site-config.js"><span class="social-icon" aria-hidden="true">${iconSvg(cls)}</span><span class="sr-only">${label}</span></span>`
    ).join('')}</div>`;
  }
  function renderSocials(){document.querySelectorAll('[data-social-links]').forEach(el=>el.innerHTML=socialMarkup())}
  function renderFooter(){
    const mount=document.getElementById('site-footer');if(!mount)return;
    const egWa=`https://wa.me/${(cfg.phoneEgypt||'').replace(/\D/g,'')}`;
    const saWa=`https://wa.me/${(cfg.phoneSaudi||'').replace(/\D/g,'')}`;
    mount.innerHTML=`<footer class="site-footer"><div class="shell footer-grid"><div><div class="brand-block footer-brand-block"><img class="footer-logo" src="assets/img/badr-logo.png" alt="BADR Atelier"/><div class="brand-tagline"><b data-en="Strategic Development, Architecture & Digital Delivery" data-ar="شريك استراتيجي للتطوير والعمارة والتسليم الرقمي">Strategic Development, Architecture & Digital Delivery</b><span style="color:#aaa397">Development Strategy • Architecture • BIM • 4D • 5D</span></div></div><p class="footer-tag" data-en="Development intelligence from land strategy to coordinated digital delivery." data-ar="ذكاء تطوير يبدأ من الأرض ويستمر حتى التصميم والتنسيق والتسليم الرقمي.">Development intelligence from land strategy to coordinated digital delivery.</p><div data-social-links style="margin-top:18px"></div></div><div class="footer-col"><strong data-en="Advisory" data-ar="الاستشارات">Advisory</strong><a href="developers.html" data-en="Development advisory" data-ar="استشارات التطوير">Development advisory</a><a href="investors.html" data-en="Investor dashboard" data-ar="لوحة المستثمر">Investor dashboard</a><a href="project-al-rehab.html" data-en="Development case study" data-ar="دراسة تطوير">Development case study</a></div><div class="footer-col"><strong data-en="Work" data-ar="الأعمال">Work</strong><a href="projects.html" data-en="Projects + Capability Proof" data-ar="المشروعات + إثبات القدرات">Projects + Capability Proof</a><a href="services.html" data-en="Services + linked proof" data-ar="الخدمات + المشروعات المرتبطة">Services + linked proof</a><a href="bim-digital.html" data-en="BIM + Digital" data-ar="BIM + رقمنة">BIM + Digital</a></div><div class="footer-col"><strong data-en="Contact" data-ar="تواصل">Contact</strong><a href="mailto:${cfg.email}">${cfg.email}</a><a class="phone-wa-link" href="${egWa}" target="_blank" rel="noopener">${iconSvg('whatsapp')}<span>${cfg.phoneEgyptDisplay}</span></a><a class="phone-wa-link" href="${saWa}" target="_blank" rel="noopener">${iconSvg('whatsapp')}<span>${cfg.phoneSaudiDisplay}</span></a><span data-location>${cfg.locationEn}</span><span>${cfg.website}</span></div></div><div class="shell footer-bottom"><span>© ${cfg.copyrightYear} ${cfg.brand}. <span data-en="${labels.en.rights}" data-ar="${labels.ar.rights}">${labels.en.rights}</span></span><span data-en="Badr City, Cairo • Developer advisory with international project reach" data-ar="مدينة بدر، القاهرة • استشارات تطوير بامتداد دولي للمشروعات">Badr City, Cairo • Developer advisory with international project reach</span></div></footer><a class="floating-whatsapp" href="${saWa}" target="_blank" rel="noopener" aria-label="WhatsApp BADR Atelier"><span class="floating-wa-icon">${iconSvg('whatsapp')}</span></a>`;
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
      document.querySelectorAll('.expertise-tab,.eq-card,.developer-section-visual,.case-card,.project-card').forEach(card=>{
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
      {name:'Egypt',ar:'مصر',lat:26.8,lng:30.8,count:4,code:'EGY'},
      {name:'Saudi Arabia',ar:'المملكة العربية السعودية',lat:23.9,lng:45.1,count:5,code:'SAU'},
      {name:'United Arab Emirates',ar:'الإمارات العربية المتحدة',lat:24.2,lng:54.4,count:1,code:'ARE'},
      {name:'Qatar',ar:'قطر',lat:25.3,lng:51.2,count:1,code:'QAT'},
      {name:'Oman',ar:'عُمان',lat:20.5,lng:56.0,count:1,code:'OMN'},
      {name:'Kuwait',ar:'الكويت',lat:29.3,lng:47.6,count:1,code:'KWT'},
      {name:'Bahrain',ar:'البحرين',lat:26.1,lng:50.6,count:1,code:'BHR'},
      {name:'Canada',ar:'كندا',lat:50.0,lng:-99.0,count:2,code:'CAN'},
      {name:'United States',ar:'الولايات المتحدة',lat:39.0,lng:-98.0,count:1,code:'USA'}
    ],
    cities:[
      {city:'Cairo',ar:'القاهرة',lat:30.0444,lng:31.2357,projects:[['Aman Towers','project-aman-towers.html'],['Badr Heights Villas','project-badr-heights.html'],['Andalus Courtyard Residences','project-andalus.html'],['Private Villa & House','project-private-residence.html']]},
      {city:'Riyadh',ar:'الرياض',lat:24.7136,lng:46.6753,projects:[['Al Noor Grand Mosque','project-al-noor.html'],['Falcon Arena Concept','project-falcon-arena.html']]},
      {city:'Jeddah',ar:'جدة',lat:21.5433,lng:39.1728,projects:[['Al Rehab Oasis','project-al-rehab.html'],['Palm Horizon Compound','project-palm-horizon.html']]},
      {city:'Makkah',ar:'مكة',lat:21.3891,lng:39.8579,projects:[['ATHAR Makkah','project-athar-makkah.html']]},
      {city:'Dubai',ar:'دبي',lat:25.2048,lng:55.2708,projects:[['Desert Pearl Residences','project-desert-pearl.html']]},
      {city:'Doha',ar:'الدوحة',lat:25.2854,lng:51.5310,projects:[['Souq Galleria Mall','project-souq-galleria.html']]},
      {city:'Kuwait City',ar:'مدينة الكويت',lat:29.3759,lng:47.9774,projects:[['Wadi Court Mixed-Use','project-wadi-court.html']]},
      {city:'Muscat',ar:'مسقط',lat:23.5880,lng:58.3829,projects:[['Waterfront Lifestyle Center','project-waterfront.html']]},
      {city:'Manama',ar:'المنامة',lat:26.2235,lng:50.5876,projects:[['Private Villa & House','project-private-residence.html']]},
      {city:'Toronto',ar:'تورنتو',lat:43.6532,lng:-79.3832,projects:[['Maple Courtyard Homes','project-maple-courtyard.html'],['Crescent Design Hub','project-crescent-hub.html']]},
      {city:'New Jersey',ar:'نيوجيرسي',lat:40.0583,lng:-74.4057,projects:[['Hudson Urban Lofts','project-hudson-lofts.html']]}
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
      const countryHits=BADR_PROJECT_MAP.countries.map(c=>{
        const p=mapXY(c.lng,c.lat);
        return `<circle class="v10-country-hit" data-country="${escapeHtml(c.name)}" data-ar="${escapeHtml(c.ar)}" data-count="${c.count}" data-x="${p.x}" data-y="${p.y}" cx="${p.x}" cy="${p.y}" r="40"/>`;
      }).join('');
      const cityMarkers=BADR_PROJECT_MAP.cities.map((c,i)=>{
        const p=mapXY(c.lng,c.lat);
        return `<g class="v10-city-marker" data-city-index="${i}" transform="translate(${p.x} ${p.y})"><circle class="pulse" r="12"/><circle r="12"/><text class="count" text-anchor="middle" y="4">${c.projects.length}</text><text text-anchor="middle" y="-18">${escapeHtml(c.city)}</text></g>`;
      }).join('');
      overlay.innerHTML=countryHits+cityMarkers;
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
      const update=()=>{clamp();layer.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;m.classList.toggle('city-mode',scale>=1.85);};
      function zoomAt(factor,cx,cy){const {w,h}=size();cx=cx==null?w/2:cx;cy=cy==null?h/2:cy;const old=scale;scale=Math.max(1,Math.min(4.6,scale*factor));const k=scale/old;tx=cx-(cx-tx)*k;ty=cy-(cy-ty)*k;update();}
      controls.querySelector('[data-v10-plus]').addEventListener('click',()=>zoomAt(1.38));
      controls.querySelector('[data-v10-minus]').addEventListener('click',()=>zoomAt(1/1.38));
      controls.querySelector('[data-v10-reset]').addEventListener('click',()=>{scale=1;tx=0;ty=0;update();detail.innerHTML='<b>BADR Atelier</b><span>Published project geography · جغرافيا المشروعات المنشورة</span>';});
      svg.addEventListener('wheel',e=>{e.preventDefault();const r=m.getBoundingClientRect();zoomAt(e.deltaY<0?1.16:1/1.16,e.clientX-r.left,e.clientY-r.top);},{passive:false});
      svg.addEventListener('pointerdown',e=>{drag=true;last={x:e.clientX,y:e.clientY};svg.setPointerCapture?.(e.pointerId);m.classList.add('is-dragging');});
      svg.addEventListener('pointermove',e=>{if(!drag)return;tx+=e.clientX-last.x;ty+=e.clientY-last.y;last={x:e.clientX,y:e.clientY};update();});
      const end=()=>{drag=false;m.classList.remove('is-dragging');};svg.addEventListener('pointerup',end);svg.addEventListener('pointercancel',end);svg.addEventListener('pointerleave',()=>{if(drag)end();});
      overlay.querySelectorAll('.v10-country-hit').forEach(el=>el.addEventListener('click',e=>{
        e.stopPropagation();
        const {w,h}=size(),x=(+el.dataset.x/WM.w)*w,y=(+el.dataset.y/WM.h)*h;
        scale=2.05;tx=w/2-x*scale;ty=h/2-y*scale;update();
        detail.innerHTML=`<b>${escapeHtml(el.dataset.country)} / ${escapeHtml(el.dataset.ar)}</b><span>${el.dataset.count} project${+el.dataset.count===1?'':'s'} in the published BADR portfolio</span>`;
      }));
      overlay.querySelectorAll('.v10-city-marker').forEach(el=>el.addEventListener('click',e=>{
        e.stopPropagation();const c=BADR_PROJECT_MAP.cities[+el.dataset.cityIndex];
        detail.innerHTML=`<b>${escapeHtml(c.city)} / ${escapeHtml(c.ar)} · ${c.projects.length}</b>${c.projects.map(p=>`<a href="${p[1]}">${escapeHtml(p[0])}</a>`).join('')}`;
      }));
      window.addEventListener('resize',update,{passive:true});
      update();
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

  function bindInvestorCalculator(){
    const box=document.querySelector('[data-investor-calculator]');
    if(!box)return;
    const $=sel=>box.querySelector(sel);
    const inputs=[...box.querySelectorAll('input')];
    const output={gfa: $('[data-out="gfa"]'), sellable: $('[data-out="sellable"]'), revenue: $('[data-out="revenue"]'), cost: $('[data-out="cost"]'), profit: $('[data-out="profit"]'), roi: $('[data-out="roi"]'), irr: $('[data-out="irr"]')};
    const fmt0=v=>new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(v);
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
      const total=landCost+construction+finance+soft;
      const profit=revenue-total;
      const roi=total>0?(profit/total)*100:0;
      const equity=Math.max(1,total*(1-debt));
      const baseReturn=Math.max(-0.95,profit/equity);
      const irr=(Math.pow(1+Math.max(0,baseReturn),1/3)-1+incentive)*100;
      output.gfa.textContent=fmt0(gfa)+' m²';
      output.sellable.textContent=fmt0(sellable)+' m²';
      output.revenue.textContent='SAR '+fmt0(revenue);
      output.cost.textContent='SAR '+fmt0(total);
      output.profit.textContent='SAR '+fmt0(profit);
      output.roi.textContent=roi.toFixed(1)+'%';
      output.irr.textContent=irr.toFixed(1)+'%';
    };
    inputs.forEach(i=>i.addEventListener('input',calc));
    calc();
  }

  function bindKpiCounters(){
    const nodes=[...document.querySelectorAll('[data-kpi]')]; if(!nodes.length)return;
    const run=el=>{ if(el.dataset.counted)return; el.dataset.counted='1'; const target=+el.dataset.kpi||0; const t0=performance.now(); const dur=1000; const step=t=>{const p=Math.min(1,(t-t0)/dur); const eased=1-Math.pow(1-p,3); el.textContent=Math.round(target*eased); if(p<1)requestAnimationFrame(step)}; requestAnimationFrame(step)};
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target)}}),{threshold:.45});nodes.forEach(n=>io.observe(n));}else nodes.forEach(run);
  }

  renderHeader();renderFooter();renderSocials();bindMenu();bindHeader();bindLanguage();bindReveal();bindFilters();bindInquiryForm();bindCarousels();bindCounters();bindPremiumDynamics();bindProjectIntelligence();initGlobalMapsV10();
  bindProofFilters();
  bindInvestorCalculator();
  bindKpiCounters();
})();
