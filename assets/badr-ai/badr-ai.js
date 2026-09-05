(() => {
  if (window.__BADR_AI_LOADED) return;
  window.__BADR_AI_LOADED = true;

  const cfg = window.BADR_AI_CONFIG || {};
  const sessionKey = 'badr-ai-session-v2-3';
  const welcomeKey = 'badr-ai-welcome-shown-v2-3';
  const maxTurns = Number(cfg.maxConversationMessages || 12);
  let busy = false;
  let messages = [];
  try { messages = JSON.parse(sessionStorage.getItem(sessionKey) || '[]'); } catch (_) { messages = []; }
  if (!Array.isArray(messages)) messages = [];

  const isArabicPage = () => document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar' || document.body.classList.contains('is-ar');
  const hasArabic = (s) => /[\u0600-\u06FF]/.test(s || '');
  const langFor = (s='') => hasArabic(s) ? 'ar' : (isArabicPage() ? 'ar' : 'en');
  const t = (en, ar, lang) => (lang || (isArabicPage() ? 'ar' : 'en')) === 'ar' ? ar : en;
  const configured = () => typeof cfg.endpoint === 'string' && /^https:\/\//.test(cfg.endpoint) && !cfg.endpoint.includes('YOUR-WORKER-SUBDOMAIN');
  const safeUrl = (u='') => {
    try {
      const url = new URL(u, location.href);
      return ['http:','https:'].includes(url.protocol) ? url.href : '#';
    } catch (_) { return '#'; }
  };

  function pageContext(){
    const main = document.querySelector('main') || document.body;
    const h1 = document.querySelector('h1')?.innerText?.trim() || '';
    const headings = [...document.querySelectorAll('main h2, main h3')].slice(0, 12).map(x => x.innerText.trim()).filter(Boolean);
    let text = main.innerText || '';
    text = text.replace(/\s+/g,' ').trim().slice(0, 5200);
    return {
      url: location.href,
      path: location.pathname,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || '',
      h1,
      headings,
      visibleText: text,
      language: isArabicPage() ? 'ar' : 'en'
    };
  }

  function pagePrompts(lang){
    const p = location.pathname.toLowerCase();
    if (p.includes('bim')) return lang === 'ar'
      ? ['هل BIM يستاهل في مشروعي؟','إزاي BIM يقلل المخاطر؟','أعمل 4D ولا 5D؟','قيّم لي استراتيجية BIM']
      : ['Is BIM worth it for my project?','How can BIM reduce risk?','Do I need 4D or 5D?','Review my BIM strategy'];
    if (p.includes('project-pakistan') || p.includes('diplomatic')) return lang === 'ar'
      ? ['حلل منطق المشروع ده','إيه درس التطوير من المشروع؟','إزاي اتعاملوا مع الخصوصية؟','عندي مشروع دبلوماسي مشابه']
      : ['Analyze this project logic','What is the development lesson?','How is privacy handled?','I have a similar diplomatic project'];
    if (p.includes('projects')) return lang === 'ar'
      ? ['رشح لي مشروع قريب من فكرتي','عندي أرض وعايز أطورها','أعمل فلل ولا شقق؟','وريني مشروع mixed-use مناسب']
      : ['Match a project to my idea','I have land to develop','Villas or apartments?','Show a relevant mixed-use project'];
    if (p.includes('service') || p.includes('developer') || p.includes('investor')) return lang === 'ar'
      ? ['اختبر لي أفضل سيناريو لأرضي','إيه الخدمة المناسبة لمرحلة مشروعي؟','قارن لي 3 اتجاهات تطوير','إمتى أحتاج Development Workshop؟']
      : ['Test the best route for my land','Which service fits my project stage?','Compare three development routes','When do I need a Development Workshop?'];
    return lang === 'ar'
      ? ['عندي أرض، اختبر لي أفضل سيناريو تطوير','أعمل فلل ولا شقق؟','إزاي أرفع قيمة المشروع؟','هل BIM يستاهل في مشروعي؟','رشح لي مشروع BADR مشابه']
      : ['I have land — test the best development route','Villas or apartments?','How can I increase project value?','Is BIM worth it for my project?','Match a BADR project to my idea'];
  }

  function localPreviewAnswer(input, lang){
    const q = input.toLowerCase();
    if (/سعر|اسعار|تكلف|بكام|cost|price|fee|pricing|دولار|ريال|sar|usd/.test(q)) {
      return lang === 'ar'
        ? 'مرجع BADR الاسترشادي: الأعمال المهنية المتكاملة 60–100 ريال/م² من المساحة التصميمية المؤكدة. التصميم فقط يمثل 40% من أتعاب النطاق المتكامل، أي استرشاديًا 24–40 ريال/م². نعرض الأسعار فقط بالريال السعودي أو الدولار الأمريكي، ولا نحسب على مساحة الأرض تلقائيًا. العرض النهائي يعتمد على نطاق المشروع ومخرجاته وتعقيده.'
        : 'BADR indicative reference: integrated professional scope SAR 60–100/m² of confirmed design area. Design-only represents 40% of the integrated fee, i.e. an indicative SAR 24–40/m². Pricing is shown only in SAR or USD, and plot area is never used automatically as the pricing basis. Final fees depend on scope, complexity and deliverables.';
    }
    if (/هاني|hani|founder|مؤسس/.test(q)) {
      return lang === 'ar'
        ? 'د. هاني يوسف هو مؤسس BADR Atelier، ويجمع بين العمارة واستراتيجية التطوير العقاري والـBIM، مع خلفية بحثية في التقنيات الرقمية للبيئات التراثية مثل HBIM وGeoBIM وGIS وLiDAR والتوائم الرقمية.'
        : 'Dr. Hani Youssef is the founder of BADR Atelier, combining architecture, real-estate development strategy, and BIM, with research experience in digital heritage technologies including HBIM, GeoBIM, GIS, LiDAR, and digital twins.';
    }
    if (/bim|ريفيت|revit|نمذج/.test(q)) {
      return lang === 'ar'
        ? 'BADR تتعامل مع الـBIM كمنظومة تسليم رقمي تربط التصميم والتنسيق والتنفيذ والمعلومات عبر دورة حياة المشروع. تقدر تفتح صفحة BIM من الموقع، وبعد توصيل الـBackend هقدر أجاوبك بتفصيل أكبر وبناءً على الصفحة الحالية.'
        : 'BADR approaches BIM as a digital-delivery system connecting design, coordination, construction, and lifecycle information. You can open the BIM page now; once the secure backend is connected, I can answer in more depth using the current page context.';
    }
    if (/خدمات|services|offer/.test(q)) {
      return lang === 'ar'
        ? 'BADR تجمع بين استراتيجية التطوير، العمارة، الهندسة والـBIM. في الوضع التجريبي أقدر أوصلك للصفحات المناسبة؛ وبعد ربط الـBackend أقدر أشرح النطاقات بالتفصيل من محتوى الموقع نفسه.'
        : 'BADR combines development strategy, architecture, engineering, and BIM. In preview mode I can route you to the right pages; once the secure backend is connected, I can explain the scope in detail using the website content.';
    }
    return lang === 'ar'
      ? 'واجهة BADR AI جاهزة الآن، لكن الاتصال الآمن بالذكاء الاصطناعي لم يتم تفعيله بعد. بعد نشر الـBackend ووضع رابطه في badr-ai-config.js سأقدر أجاوب على الأسئلة العامة، أفهم الصفحة الحالية، وأستخدم معلومات BADR المعتمدة.'
      : 'The BADR AI interface is ready, but the secure AI backend is not connected yet. After deploying the backend and adding its URL to badr-ai-config.js, I can answer general questions, understand the current page, and use approved BADR knowledge.';
  }

  function deterministicActions(input, lang){
    const q = input.toLowerCase();
    const out = [];
    const add = (labelEn,labelAr,url) => out.push({label:lang==='ar'?labelAr:labelEn,url});
    if (/bim|ريفيت|revit|نمذج/.test(q)) add('Explore BIM','استكشف BIM', cfg.bimUrl || 'bim-digital.html');
    if (/project|مشروع|فلل|villa|portfolio/.test(q)) add('View Projects','شاهد المشاريع', cfg.projectsUrl || 'projects.html');
    if (/service|خدمات|خدمة/.test(q)) add('Explore Services','استكشف الخدمات', cfg.servicesUrl || 'services.html');
    if (/price|cost|سعر|تكلف|بكام|contact|تواصل|ابدأ/.test(q)) add('Contact BADR','تواصل مع BADR', cfg.contactUrl || 'contact.html');
    return out.slice(0,2);
  }

  const root = document.createElement('div');
  root.className = 'badr-ai-root';
  root.innerHTML = `
    <div class="badr-ai-welcome" data-badr-ai-welcome><b></b><span></span></div>
    <section class="badr-ai-panel" data-badr-ai-panel aria-label="BADR AI" aria-hidden="true">
      <header class="badr-ai-head">
        <div class="badr-ai-orb badr-ai-head-orb" aria-hidden="true"></div>
        <div class="badr-ai-head-copy"><b>${cfg.assistantName || 'BADR AI'}</b><small></small></div>
        <button class="badr-ai-close" type="button" aria-label="Close BADR AI">×</button>
      </header>
      <div class="badr-ai-messages" data-badr-ai-messages></div>
      <footer class="badr-ai-foot">
        <form class="badr-ai-form" data-badr-ai-form>
          <textarea class="badr-ai-input" rows="1" maxlength="1200" aria-label="Message BADR AI"></textarea>
          <button class="badr-ai-send" type="submit" aria-label="Send">↗</button>
        </form>
        <div class="badr-ai-note"></div>
      </footer>
    </section>
    <button class="badr-ai-launcher" type="button" aria-expanded="false" aria-label="Open BADR AI">
      <span class="badr-ai-orb" aria-hidden="true"></span>
      <span class="badr-ai-launch-copy"><b>BADR AI</b><small></small></span>
      <i class="badr-ai-status-dot" aria-hidden="true"></i>
    </button>`;
  document.body.appendChild(root);

  const panel = root.querySelector('[data-badr-ai-panel]');
  const launcher = root.querySelector('.badr-ai-launcher');
  const closeBtn = root.querySelector('.badr-ai-close');
  const messagesEl = root.querySelector('[data-badr-ai-messages]');
  const form = root.querySelector('[data-badr-ai-form]');
  const input = root.querySelector('.badr-ai-input');
  const sendBtn = root.querySelector('.badr-ai-send');
  const note = root.querySelector('.badr-ai-note');
  const headSub = root.querySelector('.badr-ai-head-copy small');
  const launchSub = root.querySelector('.badr-ai-launch-copy small');
  const welcome = root.querySelector('[data-badr-ai-welcome]');

  function refreshLanguage(){
    const lang = isArabicPage() ? 'ar' : 'en';
    headSub.textContent = lang==='ar' ? (cfg.subtitleAr || 'ذكاء تطوير عقاري • عمارة • BIM') : (cfg.subtitleEn || 'Developer Intelligence • Architecture • BIM');
    launchSub.textContent = lang==='ar' ? 'اختبر قرار مشروعك' : 'Test your project decision';
    input.placeholder = lang==='ar' ? 'اكتب سؤالك…' : 'Ask BADR AI…';
    note.innerHTML = configured()
      ? (lang==='ar' ? '<strong>جلسة مؤقتة.</strong> لا نحتفظ بالمحادثة بشكل دائم في هذا الإصدار.' : '<strong>Temporary session.</strong> This version does not permanently store the chat.')
      : (lang==='ar' ? '<strong>Preview Mode.</strong> فعّل الـBackend ليصبح المساعد حيًا بالكامل.' : '<strong>Preview Mode.</strong> Connect the secure backend to go live.');
  }

  function introMarkup(lang){
    const prompts = pagePrompts(lang);
    return `<div class="badr-ai-intro">
      ${configured() ? '' : `<div class="badr-ai-preview-tag">${lang==='ar'?'وضع المعاينة':'Preview mode'}</div>`}
      <h3>${lang==='ar'?'BADR AI — فكر كمطور قبل ما ترسم':'BADR AI — Think Like a Developer Before You Draw'}</h3>
      <p>${lang==='ar'?'قول لي عندك أرض أو مشروع أو قرار محتار فيه. هساعدك نحدد المعطيات، نقارن السيناريوهات، ونوصل لرأي مبدئي واضح قبل ما نثبت التصميم.':'Tell me the land, project or decision you are considering. I’ll help frame the inputs, compare scenarios and reach a preliminary development view before design is locked.'}</p>
      <div class="badr-ai-quick">${prompts.map(p=>`<button type="button" class="badr-ai-chip" data-prompt="${p.replace(/"/g,'&quot;')}">${p}</button>`).join('')}</div>
    </div>`;
  }

  function renderInitial(){
    messagesEl.innerHTML = introMarkup(isArabicPage()?'ar':'en');
    messages.forEach(m => addBubble(m.role, m.content, m.actions || [], false, m.meta || null));
    bindChips();
    scrollBottom();
  }

  function bindChips(){
    root.querySelectorAll('[data-prompt]').forEach(btn => btn.addEventListener('click', () => {
      input.value = btn.dataset.prompt || '';
      sendMessage(input.value);
    }));
  }

  function scrollBottom(){ messagesEl.scrollTop = messagesEl.scrollHeight; }

  function addBubble(role, content, actions=[], persist=true, meta=null){
    const wrap = document.createElement('div');
    wrap.className = `badr-ai-message ${role}`;
    const bubble = document.createElement('div');
    bubble.className = 'badr-ai-bubble';
    if (role==='assistant' && meta?.modeLabel){
      const metaRow=document.createElement('div'); metaRow.className='badr-ai-meta-row';
      const mode=document.createElement('span'); mode.className='badr-ai-mode'; mode.textContent=meta.modeLabel; metaRow.appendChild(mode);
      if(meta.confidence){ const conf=document.createElement('span'); conf.className='badr-ai-confidence'; conf.textContent=(isArabicPage()?'ثقة مبدئية: ':'Preliminary confidence: ')+String(meta.confidence).replace('medium-high','Medium-High').replace('medium','Medium').replace('low','Low').replace('high','High'); metaRow.appendChild(conf); }
      bubble.appendChild(metaRow);
    }
    const textNode=document.createElement('div'); textNode.className='badr-ai-bubble-text'; textNode.textContent=content; bubble.appendChild(textNode);
    if (actions?.length){
      const row = document.createElement('div');
      row.className='badr-ai-actions';
      actions.forEach(a=>{
        const link=document.createElement('a');
        link.className='badr-ai-action'; link.href=safeUrl(a.url); link.textContent=`${a.label} ↗`;
        row.appendChild(link);
      });
      bubble.appendChild(row);
    }
    wrap.appendChild(bubble); messagesEl.appendChild(wrap);
    if (persist){
      messages.push({role,content,actions,meta});
      messages = messages.slice(-maxTurns);
      try{sessionStorage.setItem(sessionKey, JSON.stringify(messages));}catch(_){ }
    }
    scrollBottom();
  }

  function addTyping(){
    const wrap=document.createElement('div');wrap.className='badr-ai-message assistant';wrap.dataset.typing='1';
    const bubble=document.createElement('div');bubble.className='badr-ai-bubble';bubble.innerHTML='<span class="badr-ai-typing"><i></i><i></i><i></i></span>';
    wrap.appendChild(bubble);messagesEl.appendChild(wrap);scrollBottom();return wrap;
  }

  async function askBackend(inputText){
    const payload = {
      messages: messages.filter(m=>m.role==='user'||m.role==='assistant').slice(-10).map(({role,content})=>({role,content})),
      pageContext: pageContext(),
      sessionId: sessionStorage.getItem('badr-ai-id') || (()=>{const id=(crypto.randomUUID?.()||Math.random().toString(36).slice(2));sessionStorage.setItem('badr-ai-id',id);return id;})()
    };
    const res = await fetch(cfg.endpoint, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!res.ok) throw new Error(`BADR AI HTTP ${res.status}`);
    const data = await res.json();
    if(!data?.reply) throw new Error('BADR AI empty response');
    return data;
  }

  async function sendMessage(raw){
    const text=(raw||'').trim(); if(!text||busy)return;
    busy=true;sendBtn.disabled=true;input.value='';
    addBubble('user',text,[]);
    const lang=langFor(text);const typing=addTyping();
    try{
      let data;
      if(configured()) data=await askBackend(text);
      else if(cfg.enablePreviewMode!==false) data={reply:localPreviewAnswer(text,lang),actions:deterministicActions(text,lang)};
      else throw new Error('Backend not configured');
      typing.remove();
      addBubble('assistant',data.reply,(data.actions||[]).map(a=>({label:a.label,url:a.url})),true,{modeLabel:data.modeLabel||'',confidence:data.confidence||''});
    }catch(err){
      typing.remove();
      addBubble('assistant',lang==='ar'?'واضح إن في مشكلة بسيطة في الاتصال دلوقتي. جرّب مرة تانية، أو تقدر تتواصل مع فريق BADR مباشرة.':'It looks like there is a temporary connection issue. Please try again, or contact the BADR team directly.',[{label:lang==='ar'?'تواصل مع BADR':'Contact BADR',url:cfg.contactUrl||'contact.html'}]);
      console.warn('[BADR AI]',err);
    }finally{busy=false;sendBtn.disabled=false;input.focus();}
  }

  function open(){panel.classList.add('is-open');panel.setAttribute('aria-hidden','false');launcher.setAttribute('aria-expanded','true');welcome.classList.remove('is-visible');setTimeout(()=>input.focus(),200)}
  function close(){panel.classList.remove('is-open');panel.setAttribute('aria-hidden','true');launcher.setAttribute('aria-expanded','false')}
  launcher.addEventListener('click',()=>panel.classList.contains('is-open')?close():open());
  closeBtn.addEventListener('click',close);
  form.addEventListener('submit',e=>{e.preventDefault();sendMessage(input.value)});
  input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();form.requestSubmit();}});
  input.addEventListener('input',()=>{input.style.height='auto';input.style.height=Math.min(input.scrollHeight,116)+'px'});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel.classList.contains('is-open'))close()});

  new MutationObserver(()=>{refreshLanguage(); if(messages.length===0){messagesEl.innerHTML=introMarkup(isArabicPage()?'ar':'en');bindChips();}}).observe(document.documentElement,{attributes:true,attributeFilter:['dir','lang']});
  refreshLanguage();renderInitial();

  if(!sessionStorage.getItem(welcomeKey)){
    setTimeout(()=>{
      const lang=isArabicPage()?'ar':'en';
      welcome.querySelector('b').textContent=lang==='ar'?'عندك أرض أو قرار تطوير؟':'Have land or a development decision?';
      welcome.querySelector('span').textContent=lang==='ar'?'اختبر معي السيناريو قبل ما تثبت المنتج أو التصميم.':'Test the development route before you lock the product or design.';
      welcome.classList.add('is-visible');
      sessionStorage.setItem(welcomeKey,'1');
      setTimeout(()=>welcome.classList.remove('is-visible'),6200);
    },Number(cfg.launcherDelayMs||2600));
  }
})();
