/* ==========================================================
   BADR Atelier V36.23 — CINEMATIC EXPERIENCE
   Progressive enhancement only: site remains usable without it.
   ========================================================== */
(() => {
  'use strict';
  if (window.__BADR_CINEMATIC_V3623__) return;
  window.__BADR_CINEMATIC_V3623__ = true;

  const doc = document;
  const root = doc.documentElement;
  const body = doc.body;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer:fine)').matches;
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const page = (body.dataset.page || '').toLowerCase();

  const locale = () => (root.lang === 'ar' || root.dir === 'rtl' || body.classList.contains('is-ar')) ? 'ar' : 'en';
  const t = (en, ar) => locale() === 'ar' ? ar : en;

  function detectTheme(){
    if (body.classList.contains('diplomatic-cinematic') || file.includes('diplomatic') || file.includes('pakistan')) return 'diplomatic';
    if (file === 'index.html' || page === 'home') return 'home';
    if (page === 'developers' || file.includes('developer')) return 'developers';
    if (page === 'investors' || file.includes('investor')) return 'investors';
    if (page === 'bim' || file.includes('bim')) return 'bim';
    if (page === 'team' || file.includes('team')) return 'team';
    if (page === 'careers' || file.includes('career')) return 'careers';
    if (page === 'engineering' || file.includes('engineering')) return 'engineering';
    if (page === 'services' || file.includes('service')) return 'services';
    if (page === 'about' || file.includes('about')) return 'about';
    if (page === 'contact' || file.includes('contact')) return 'contact';
    if (file.includes('process')) return 'process';
    if (page === 'projects' || file.includes('project')) return 'projects';
    return page || 'home';
  }
  const theme = detectTheme();
  body.classList.add('badr-cine', `cine-theme-${theme}`);

  const meta = {
    home:{index:'00 / BADR', en:'BADR ATELIER', ar:'BADR ATELIER', subEn:'DEVELOPMENT • ARCHITECTURE • ENGINEERING • BIM', subAr:'تطوير • عمارة • هندسة • BIM', words:['LAND','OPPORTUNITY','VALUE','DELIVERY']},
    developers:{index:'01 / DEVELOPMENT', en:'FOR DEVELOPERS', ar:'للمطورين', subEn:'LAND • PRODUCT • VALUE • DELIVERY', subAr:'الأرض • المنتج • القيمة • التسليم', words:['LAND','PRODUCT','VALUE','DELIVERY']},
    investors:{index:'02 / INVESTMENT', en:'FOR INVESTORS', ar:'للمستثمرين', subEn:'OPPORTUNITY • RISK • RETURN • DELIVERY', subAr:'الفرصة • المخاطر • العائد • التسليم', words:['OPPORTUNITY','RISK','RETURN','DELIVERY']},
    projects:{index:'03 / PORTFOLIO', en:'PROJECTS', ar:'المشروعات', subEn:'PLACES • VALUE • IDENTITY • IMPACT', subAr:'المكان • القيمة • الهوية • الأثر', words:['PLACES','VALUE','IDENTITY','IMPACT']},
    bim:{index:'04 / DIGITAL DELIVERY', en:'BIM + DIGITAL', ar:'BIM + الرقمنة', subEn:'MODEL • COORDINATE • OPTIMIZE • DELIVER', subAr:'نمذجة • تنسيق • تحسين • تسليم', words:['MODEL','COORDINATE','OPTIMIZE','DELIVER']},
    engineering:{index:'05 / ENGINEERING', en:'ENGINEERING', ar:'الهندسة', subEn:'INTEGRATE • COORDINATE • BUILD • PROTECT', subAr:'تكامل • تنسيق • تنفيذ • حماية', words:['INTEGRATE','COORDINATE','BUILD','PROTECT']},
    services:{index:'06 / CAPABILITY', en:'SERVICES', ar:'الخدمات', subEn:'STRATEGY • DESIGN • ENGINEERING • BIM', subAr:'استراتيجية • تصميم • هندسة • BIM', words:['STRATEGY','DESIGN','ENGINEERING','BIM']},
    about:{index:'07 / STUDIO', en:'BADR STUDIO', ar:'استوديو BADR', subEn:'THINK • SHAPE • COORDINATE • DELIVER', subAr:'نفكر • نصوغ • ننسق • نسلم', words:['THINK','SHAPE','COORDINATE','DELIVER']},
    team:{index:'08 / PEOPLE', en:'THE BADR COLLECTIVE', ar:'فريق BADR', subEn:'PEOPLE • EXPERTISE • COLLABORATION • DELIVERY', subAr:'أشخاص • خبرات • تكامل • تسليم', words:['PEOPLE','EXPERTISE','COLLABORATION','DELIVERY']},
    careers:{index:'09 / TALENT', en:'JOIN BADR', ar:'انضم إلى BADR', subEn:'CREATE • LEARN • COLLABORATE • BUILD', subAr:'ابتكر • تعلم • تعاون • ابنِ', words:['CREATE','LEARN','COLLABORATE','BUILD']},
    contact:{index:'10 / START', en:'START A CONVERSATION', ar:'ابدأ الحوار', subEn:'SITE • AMBITION • DECISION • NEXT MOVE', subAr:'الموقع • الطموح • القرار • الخطوة التالية', words:['SITE','AMBITION','DECISION','NEXT MOVE']},
    process:{index:'11 / PROCESS', en:'DECISION TO DELIVERY', ar:'من القرار إلى التسليم', subEn:'READ • TEST • SHAPE • PROTECT', subAr:'نقرأ • نختبر • نصوغ • نحمي', words:['READ','TEST','SHAPE','PROTECT']},
    diplomatic:{index:'12 / DIPLOMATIC', en:'DIPLOMATIC EXPERIENCE', ar:'خبرات دبلوماسية', subEn:'DISCRETION • PRECISION • SECURITY • DELIVERY', subAr:'خصوصية • دقة • أمن • تسليم', words:['DISCRETION','PRECISION','SECURITY','DELIVERY']}
  };
  const m = meta[theme] || meta.home;

  function projectTitle(){
    if (!file.startsWith('project-') && !file.startsWith('bim-project-')) return null;
    const h1 = doc.querySelector('main h1');
    const text = h1?.textContent?.replace(/\s+/g,' ').trim();
    if (text && text.length < 90) return text;
    return (doc.title.split('|')[0] || '').trim();
  }

  function motifSvg(kind){
    const common = 'viewBox="0 0 500 500" aria-hidden="true"';
    if (kind === 'developers') return `<svg ${common}>
      <rect class="m-soft" x="54" y="58" width="392" height="382" rx="4"/>
      <path class="m-stroke" d="M54 183H446M54 315H446M178 58V440M318 58V440M178 183l140 132M318 183 178 315"/>
      <circle class="m-node" cx="178" cy="183" r="5"/><circle class="m-node" cx="318" cy="315" r="5"/><circle class="m-node" cx="318" cy="183" r="5"/>
    </svg>`;
    if (kind === 'investors') return `<svg ${common}>
      <path class="m-soft" d="M70 404H438V82H70Z"/>
      <path class="m-stroke" d="M92 382 166 318 222 336 295 223 349 248 421 122M92 122V382H421"/>
      <path class="m-stroke" d="M92 298H421M92 214H421M166 122V382M295 122V382" opacity=".34"/>
      <circle class="m-node" cx="295" cy="223" r="6"/><circle class="m-node" cx="421" cy="122" r="6"/>
    </svg>`;
    if (kind === 'bim' || kind === 'engineering') return `<svg ${common}>
      <path class="m-soft" d="M250 62 412 155V343L250 438 88 343V155Z"/>
      <path class="m-stroke" d="M250 62 412 155 250 250 88 155 250 62Zm0 188v188m162-283v188L250 438 88 343V155m0 188 162-93 162 93M169 109l162 95M169 390V204M331 109 169 204m162 186V204"/>
      <circle class="m-node" cx="250" cy="250" r="6"/><circle class="m-node" cx="412" cy="155" r="5"/>
    </svg>`;
    if (kind === 'team' || kind === 'careers') return `<svg ${common}>
      <path class="m-stroke" d="M250 250 128 122M250 250 372 122M250 250 414 286M250 250 335 405M250 250 145 405M250 250 84 282M128 122 372 122M414 286 335 405M145 405 84 282" opacity=".76"/>
      <circle class="m-soft" cx="250" cy="250" r="78"/><circle class="m-stroke" cx="250" cy="250" r="78"/>
      <circle class="m-node" cx="250" cy="250" r="8"/><circle class="m-node" cx="128" cy="122" r="6"/><circle class="m-node" cx="372" cy="122" r="6"/><circle class="m-node" cx="414" cy="286" r="6"/><circle class="m-node" cx="335" cy="405" r="6"/><circle class="m-node" cx="145" cy="405" r="6"/><circle class="m-node" cx="84" cy="282" r="6"/>
    </svg>`;
    if (kind === 'projects') return `<svg ${common}>
      <rect class="m-soft" x="54" y="62" width="180" height="134" rx="3"/><rect class="m-soft" x="252" y="62" width="194" height="222" rx="3"/><rect class="m-soft" x="54" y="214" width="180" height="224" rx="3"/><rect class="m-soft" x="252" y="302" width="194" height="136" rx="3"/>
      <path class="m-stroke" d="M54 62H234V196H54ZM252 62H446V284H252ZM54 214H234V438H54ZM252 302H446V438H252Z"/>
      <path class="m-stroke" d="m76 171 49-62 42 36 45-58m62 172 53-82 42 31 49-100M77 412l58-82 38 38 40-106m62 151 55-64 43 34 50-57" opacity=".52"/>
    </svg>`;
    if (kind === 'diplomatic') return `<svg ${common}>
      <path class="m-soft" d="M96 430V230C96 126 165 66 250 66s154 60 154 164v200Z"/>
      <path class="m-stroke" d="M96 430V230C96 126 165 66 250 66s154 60 154 164v200M147 430V238c0-69 44-119 103-119s103 50 103 119v192M199 430V253c0-36 20-66 51-66s51 30 51 66v177"/>
      <circle class="m-node" cx="250" cy="119" r="5"/>
    </svg>`;
    return `<svg ${common}>
      <circle class="m-soft" cx="250" cy="250" r="180"/><circle class="m-stroke" cx="250" cy="250" r="180"/><circle class="m-stroke" cx="250" cy="250" r="122"/><circle class="m-stroke" cx="250" cy="250" r="62"/>
      <path class="m-stroke" d="M70 250H430M250 70V430M123 123l254 254M377 123 123 377" opacity=".5"/>
      <circle class="m-node" cx="250" cy="250" r="7"/>
    </svg>`;
  }

  function initIntro(){
    const intro = doc.querySelector('[data-badr-cine-intro]');
    if (!intro){ body.classList.add('badr-cine-page-ready'); return; }
    const customProject = projectTitle();
    const displayTitle = customProject || t(m.en,m.ar);
    intro.innerHTML = `
      <div class="bci-grain"></div><div class="bci-grid"></div>
      <div class="bci-brand"><img src="assets/img/badr-logo.png" alt="BADR Atelier"><span>BADR / CINEMATIC EXPERIENCE / V36.23</span></div>
      <div class="bci-copy"><div class="bci-index">${m.index}</div><h2 class="bci-title"></h2><p class="bci-subtitle"></p></div>
      <div class="bci-motif">${motifSvg(theme)}</div><div class="bci-line"></div>`;
    intro.querySelector('.bci-title').textContent = displayTitle;
    intro.querySelector('.bci-subtitle').textContent = t(m.subEn,m.subAr);
    intro.classList.add('is-armed');
    if (reduce){ intro.classList.add('is-leaving'); body.classList.add('badr-cine-page-ready'); return; }
    requestAnimationFrame(() => requestAnimationFrame(() => intro.classList.add('is-live')));
    let seen = false;
    try{ seen = sessionStorage.getItem('badr-cine-v3623-seen') === '1'; sessionStorage.setItem('badr-cine-v3623-seen','1'); }catch(_){ }
    const hold = seen ? 760 : 1180;
    setTimeout(() => {
      intro.classList.add('is-leaving');
      body.classList.add('badr-cine-page-ready');
      setTimeout(() => intro.classList.add('is-gone'), 760);
    }, hold);
  }

  function createTeamHero(){
    if (theme !== 'team' || doc.querySelector('.badr-cine-team-stage')) return;
    const main = doc.querySelector('main'); if (!main) return;
    const stage = doc.createElement('section');
    stage.className = 'badr-cine-team-stage';
    const ar = locale() === 'ar';
    stage.innerHTML = `<div class="shell bcts-grid">
      <div class="bcts-copy">
        <div class="eyebrow" data-en="THE BADR COLLECTIVE" data-ar="منظومة فريق BADR">${ar?'منظومة فريق BADR':'THE BADR COLLECTIVE'}</div>
        <h1 data-en="Specialist Minds. One Development Decision." data-ar="عقول متخصصة. قرار تطوير واحد.">${ar?'عقول متخصصة. قرار تطوير واحد.':'Specialist Minds. One Development Decision.'}</h1>
        <p data-en="Architecture, engineering, BIM, development strategy and commercial thinking connect early — before drawings multiply and risk becomes expensive." data-ar="تلتقي العمارة والهندسة وBIM واستراتيجية التطوير والتفكير التجاري مبكرًا — قبل أن تتكاثر الرسومات وتصبح المخاطر أكثر تكلفة.">${ar?'تلتقي العمارة والهندسة وBIM واستراتيجية التطوير والتفكير التجاري مبكرًا — قبل أن تتكاثر الرسومات وتصبح المخاطر أكثر تكلفة.':'Architecture, engineering, BIM, development strategy and commercial thinking connect early — before drawings multiply and risk becomes expensive.'}</p>
      </div>
      <div class="bcts-orbit" aria-hidden="true">
        <div class="bcts-core"><img src="assets/img/badr-logo.png" alt=""></div>
        <span class="bcts-node" data-en="ARCHITECTURE" data-ar="عمارة">${ar?'عمارة':'ARCHITECTURE'}</span>
        <span class="bcts-node" data-en="ENGINEERING" data-ar="هندسة">${ar?'هندسة':'ENGINEERING'}</span>
        <span class="bcts-node" data-en="BIM / VDC" data-ar="BIM / VDC">BIM / VDC</span>
        <span class="bcts-node" data-en="DEVELOPMENT" data-ar="تطوير">${ar?'تطوير':'DEVELOPMENT'}</span>
        <span class="bcts-node" data-en="COMMERCIAL" data-ar="تجاري">${ar?'تجاري':'COMMERCIAL'}</span>
      </div>
    </div>`;
    main.insertBefore(stage, main.firstElementChild);
  }

  function heroNode(){
    return doc.querySelector('.badr-cine-team-stage,.hero,.developer-hero,.page-hero,.iv17-hero,.portfolio-v363-hero,.bim365-hero,.diplomatic-hero,.career-hero,.bimcase-hero,.project-v363-hero,main>section');
  }

  function enhanceHero(){
    const hero = heroNode(); if (!hero) return;
    hero.classList.add('badr-cine-hero');
    if (!hero.querySelector(':scope > .badr-cine-hero-fx')){
      const fx = doc.createElement('div'); fx.className='badr-cine-hero-fx'; hero.appendChild(fx);
    }
    const title = hero.querySelector('h1,h2'); if (title) title.classList.add('badr-cine-title');
    const media = hero.querySelector('img,video');
    if (media && !media.closest('.site-header')){
      media.classList.add('badr-cine-media');
      media.parentElement?.classList.add('badr-cine-frame');
    }
    if (!hero.querySelector('.badr-cine-hero-signature')){
      const sig = doc.createElement('div'); sig.className='badr-cine-hero-signature';
      sig.innerHTML = m.words.map((w,i)=>`${i?'<b>→</b>':''}<span>${w}</span>`).join('');
      hero.appendChild(sig);
    }
  }

  function initAmbient(){
    if (reduce) return;
    const ambient = doc.createElement('div'); ambient.className='badr-cine-ambient'; body.appendChild(ambient);
    if (!finePointer) return;
    let raf = 0, x=innerWidth*.5, y=innerHeight*.35;
    addEventListener('pointermove', e => {
      x=e.clientX; y=e.clientY;
      if (raf) return;
      raf=requestAnimationFrame(()=>{root.style.setProperty('--cine-x',`${x}px`);root.style.setProperty('--cine-y',`${y}px`);raf=0;});
    },{passive:true});
  }

  function initRail(){
    if (doc.querySelector('.badr-cine-rail')) return;
    const rail=doc.createElement('aside');rail.className='badr-cine-rail';rail.setAttribute('aria-hidden','true');
    rail.innerHTML=`<span>BADR / V36.23</span><i><b></b></i><small>${theme}</small>`;body.appendChild(rail);
    const update=()=>{
      const max=Math.max(1,doc.documentElement.scrollHeight-innerHeight);
      const pct=Math.min(100,Math.max(0,scrollY/max*100));
      rail.style.setProperty('--cine-scroll',`${pct.toFixed(2)}%`);
    };
    update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update,{passive:true});
  }

  function initReveals(){
    const markSections=[...doc.querySelectorAll('main > section')].slice(1);
    markSections.forEach(s=>s.classList.add('badr-cine-section-mark'));
    const candidates = [...doc.querySelectorAll([
      '.section-head:not([data-reveal])','.team-stat','.member-card','.consultant-card','.value-card:not([data-reveal])','.case-card:not([data-reveal])',
      '.service-card:not([data-reveal])','.proof-card:not([data-reveal])','.loop-step','.bim365-pillar','.career-belief-card','.iv17-metric-card'
    ].join(','))];
    if (!candidates.length && !markSections.length) return;
    const all=[...new Set([...candidates,...markSections])];
    all.forEach((el,i)=>{el.classList.add('badr-cine-reveal');el.style.transitionDelay=`${Math.min((i%5)*55,220)}ms`;});
    if (reduce || !('IntersectionObserver' in window)){all.forEach(el=>el.classList.add('is-cine-visible'));return;}
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-cine-visible');io.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -7% 0px'});
    all.forEach(el=>io.observe(el));
  }

  function initReactiveCards(){
    if (!finePointer || reduce) return;
    const cards=[...doc.querySelectorAll([
      '.consultant-card','.portfolio-tile','.portfolio-v363-card','.expertise-tab','.value-card','.case-card','.team-stat','.member-card','.service-card','.proof-card','.eq-card','.thinking-card','.flagship-case','.bim365-project-card'
    ].join(','))];
    cards.forEach(card=>{
      if(card.querySelector(':scope > .badr-cine-card-light')) return;
      card.classList.add('badr-cine-reactive');
      const light=doc.createElement('span');light.className='badr-cine-card-light';light.setAttribute('aria-hidden','true');card.appendChild(light);
      card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--cine-card-x',`${((e.clientX-r.left)/r.width*100).toFixed(1)}%`);card.style.setProperty('--cine-card-y',`${((e.clientY-r.top)/r.height*100).toFixed(1)}%`);},{passive:true});
    });
  }

  function initMagnetic(){
    if (!finePointer || reduce) return;
    const nodes=[...doc.querySelectorAll('.button,.career-primary,.lang-toggle,.badr-ai-launcher')];
    nodes.forEach(el=>{
      el.classList.add('badr-cine-magnetic');
      el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const dx=(e.clientX-r.left-r.width/2)*.09;const dy=(e.clientY-r.top-r.height/2)*.12;el.style.translate=`${dx.toFixed(1)}px ${dy.toFixed(1)}px`;},{passive:true});
      el.addEventListener('pointerleave',()=>el.style.translate='0 0');
    });
  }

  function initParallax(){
    if (reduce) return;
    const hero=heroNode(); if(!hero)return;
    const media=hero.querySelector('.badr-cine-media');
    const fx=hero.querySelector('.badr-cine-hero-fx');
    let ticking=false;
    const update=()=>{
      const r=hero.getBoundingClientRect();
      const p=Math.max(-1,Math.min(1,-r.top/Math.max(1,r.height)));
      if(media) media.style.translate=`0 ${(p*12).toFixed(2)}px`;
      if(fx) fx.style.translate=`0 ${(p*18).toFixed(2)}px`;
      ticking=false;
    };
    const onScroll=()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}};
    update();addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});
  }

  function initContextualAI(){
    const launch=doc.querySelector('.badr-ai-launch-copy small');
    if(!launch)return;
    const copy={
      home:['Test your project decision','اختبر قرار مشروعك'],developers:['Test your land opportunity','اختبر فرصة أرضك'],investors:['Compare investment scenarios','قارن سيناريوهات الاستثمار'],bim:['Ask about BIM delivery','اسأل عن استراتيجية BIM'],engineering:['Test engineering risk','اختبر المخاطر الهندسية'],team:['Meet the BADR system','تعرّف على منظومة BADR'],projects:['Match a BADR reference','ابحث عن مشروع BADR مشابه'],diplomatic:['Discuss a diplomatic project','ناقش مشروعًا دبلوماسيًا'],services:['Find the right BADR scope','حدد نطاق BADR المناسب'],contact:['Start with BADR AI','ابدأ مع BADR AI']
    };
    const c=copy[theme]||copy.home;
    launch.dataset.en=c[0];launch.dataset.ar=c[1];launch.textContent=t(c[0],c[1]);
  }

  function initTransitions(){
    if (reduce) return;
    const wipe=doc.createElement('div');wipe.className='badr-cine-wipe';wipe.setAttribute('aria-hidden','true');wipe.innerHTML='<span>BADR / NEXT EXPERIENCE</span>';body.appendChild(wipe);
    doc.addEventListener('click',e=>{
      if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      const a=e.target.closest?.('a[href]');if(!a||a.target==='_blank'||a.hasAttribute('download')||a.dataset.noTransition!=null)return;
      const raw=a.getAttribute('href')||'';
      if(!raw||raw.startsWith('#')||/^(mailto:|tel:|javascript:)/i.test(raw))return;
      let url;try{url=new URL(raw,location.href)}catch(_){return;}
      const same = location.protocol==='file:' ? url.protocol==='file:' : url.origin===location.origin;
      if(!same)return;
      if(url.pathname===location.pathname && url.hash)return;
      if(url.href===location.href)return;
      e.preventDefault();wipe.classList.add('is-active');
      setTimeout(()=>{location.href=url.href;},330);
    });
  }

  function refreshLocalText(){
    // Elements created after main.js language initialization need an initial refresh.
    doc.querySelectorAll('.badr-cine-team-stage [data-en][data-ar],.badr-ai-launch-copy small[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[locale()]});
  }

  createTeamHero();
  initIntro();
  enhanceHero();
  initAmbient();
  initRail();
  initReveals();
  initReactiveCards();
  initContextualAI();
  initMagnetic();
  initParallax();
  initTransitions();
  refreshLocalText();

  doc.addEventListener('click',e=>{
    if(e.target.closest?.('[data-lang-toggle]')) setTimeout(()=>{refreshLocalText();initContextualAI();},30);
  });
})();
