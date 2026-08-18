from pathlib import Path
import re
site=Path('/mnt/data/work_v36_4')

# --- Projects page ---
p=site/'projects.html'
s=p.read_text(encoding='utf-8')
# Add immersive visual band below hero
marker='</section>\n<nav class="portfolio-v363-filter">'
atmos='''</section>\n<section class="portfolio-v365-atmosphere" aria-label="BADR Atelier portfolio atmosphere">\n  <div class="portfolio-v365-atmosphere-grid">\n    <figure><img src="assets/img/projects-v36-3/andalus/01.webp" alt="Andalus Courtyard Residences" loading="lazy"/></figure>\n    <figure><img src="assets/img/projects-v36-3/athar-makkah/01.webp" alt="ATHAR Makkah" loading="lazy"/></figure>\n    <div class="portfolio-v365-atmosphere-core"><span>BADR ATELIER</span><b data-en="From Vision to Built Value" data-ar="من الرؤية إلى قيمة مبنية">From Vision to Built Value</b><i></i></div>\n    <figure><img src="assets/img/projects-v36-3/falcon-arena/01.webp" alt="Falcon Arena Concept" loading="lazy"/></figure>\n    <figure><img src="assets/img/projects-v36-3/waterfront/01.webp" alt="Waterfront Lifestyle Center" loading="lazy"/></figure>\n  </div>\n</section>\n<aside class="portfolio-v365-progress" data-portfolio-progress aria-hidden="true">\n  <div class="portfolio-v365-progress-ring"><span data-portfolio-current>00</span><small>/ <b data-portfolio-total>00</b></small></div>\n  <div class="portfolio-v365-progress-copy"><b data-en="Portfolio Journey" data-ar="رحلة البورتفوليو">Portfolio Journey</b><span data-en="Projects revealed as you explore" data-ar="يتقدم العداد مع استكشاف المشروعات">Projects revealed as you explore</span></div>\n</aside>\n<nav class="portfolio-v363-filter">'''
if marker in s:
    s=s.replace(marker,atmos,1)

# Replace repeated category headings with unique strategic copy
repls=[
('''<h2 class="h2" data-ar="مجموعة مشروعات منظمة حسب سؤال التطوير الذي يجيب عنه كل مشروع." data-en="A curated project family — organised by the development question each project answers.">A curated project family — organised by the development question each project answers.</h2>''',
'''<h2 class="h2" data-ar="نبدأ من سؤال الأرض: ما المنتج الذي يستحق أن يُبنى، وكيف تتحول الرؤية إلى مجتمع يصنع قيمة وهوية؟" data-en="We begin with the land question: what deserves to be built here, and how can the answer become a community with identity and value?">We begin with the land question: what deserves to be built here, and how can the answer become a community with identity and value?</h2>'''),
('''<h2 class="h2" data-ar="مجموعة مشروعات منظمة حسب سؤال التطوير الذي يجيب عنه كل مشروع." data-en="A curated project family — organised by the development question each project answers.">A curated project family — organised by the development question each project answers.</h2>''',
'''<h2 class="h2" data-ar="حين تجتمع الضيافة والسكن والتجارة، تصبح الحركة والتشغيل والمشهد العام أدوات لصناعة وجهة لا مجرد مجموعة مبانٍ." data-en="When hospitality, living and commerce meet, movement, operations and public life become the tools for creating a destination — not a collection of buildings.">When hospitality, living and commerce meet, movement, operations and public life become the tools for creating a destination — not a collection of buildings.</h2>'''),
('''<h2 class="h2" data-ar="مجموعة مشروعات منظمة حسب سؤال التطوير الذي يجيب عنه كل مشروع." data-en="A curated project family — organised by the development question each project answers.">A curated project family — organised by the development question each project answers.</h2>''',
'''<h2 class="h2" data-ar="السكن الأقوى لا يبدأ من الواجهة؛ يبدأ من الخصوصية والضوء والمشهد والمجتمع الذي سيعود إليه الناس كل يوم." data-en="The strongest residential value does not begin with the façade. It begins with privacy, light, landscape and the community people return to every day.">The strongest residential value does not begin with the façade. It begins with privacy, light, landscape and the community people return to every day.</h2>'''),
('''<h2 class="h2" data-ar="مجموعة مشروعات منظمة حسب سؤال التطوير الذي يجيب عنه كل مشروع." data-en="A curated project family — organised by the development question each project answers.">A curated project family — organised by the development question each project answers.</h2>''',
'''<h2 class="h2" data-ar="في المشروعات الدينية والمدنية والإبداعية، القيمة لا تُقاس بالمتر فقط؛ تُقاس بما يبقى في الذاكرة وما يمنحه المكان للمجتمع." data-en="In sacred, civic and creative work, value is measured by more than area — it is measured by what the place gives to people and what remains in memory.">In sacred, civic and creative work, value is measured by more than area — it is measured by what the place gives to people and what remains in memory.</h2>''')]
for old,new in repls:
    if old in s: s=s.replace(old,new,1)
p.write_text(s,encoding='utf-8')

# --- Brand positioning updates in JS header/footer ---
js=site/'assets/js/main-v18.js'
t=js.read_text(encoding='utf-8')
t=t.replace('data-en="Development Strategy" data-ar="استراتيجية التطوير">Development Strategy</b><span data-en="Architecture • Engineering • BIM" data-ar="عمارة • هندسة • BIM">Architecture • Engineering • BIM',
'''data-en="Strategic Development Partner" data-ar="شريكك الاستراتيجي في التطوير">Strategic Development Partner</b><span data-en="Strategy • Architecture • Engineering • BIM" data-ar="استراتيجية • عمارة • هندسة • BIM">Strategy • Architecture • Engineering • BIM''')
t=t.replace('data-en="Development Intelligence Partner" data-ar="شريك ذكاء تطوير">Development Intelligence Partner</b><span style="color:#aaa397" data-en="Strategy • Architecture • Engineering • BIM" data-ar="استراتيجية التطوير • العمارة • الهندسة • BIM">Strategy • Architecture • Engineering • BIM',
'''data-en="Strategic Development Partner" data-ar="شريكك الاستراتيجي في التطوير">Strategic Development Partner</b><span style="color:#aaa397" data-en="Strategy • Architecture • Engineering • BIM" data-ar="استراتيجية • عمارة • هندسة • BIM">Strategy • Architecture • Engineering • BIM''')
t=t.replace('data-en="Read the Opportunity. Shape the Development. Protect the Value." data-ar="نقرأ الفرصة. نصوغ التطوير. نحمي القيمة.">Read the Opportunity. Shape the Development. Protect the Value.',
'''data-en="From Vision to Built Value." data-ar="من الرؤية إلى قيمة مبنية.">From Vision to Built Value.''')
t=t.replace('data-en="Studios in Cairo + Jeddah • Development intelligence across different project contexts" data-ar="مكتبان في القاهرة + جدة • ذكاء تطوير عبر سياقات مشروعات متعددة">Studios in Cairo + Jeddah • Development intelligence across different project contexts',
'''data-en="Cairo + Jeddah • Strategy, architecture, engineering and BIM around one development decision" data-ar="القاهرة + جدة • استراتيجية وعمارة وهندسة وBIM حول قرار تطوير واحد">Cairo + Jeddah • Strategy, architecture, engineering and BIM around one development decision''')

# Append project progress binder before final render invocation
binder='''\n  function bindPortfolioProgressV365(){\n    const widget=document.querySelector('[data-portfolio-progress]');\n    const cards=[...document.querySelectorAll('.portfolio-v363-card')];\n    if(!widget||!cards.length)return;\n    const current=widget.querySelector('[data-portfolio-current]');\n    const total=widget.querySelector('[data-portfolio-total]');\n    total.textContent=String(cards.length).padStart(2,'0');\n    let seen=0;\n    const update=()=>{\n      const n=Math.max(0,Math.min(cards.length,seen));\n      current.textContent=String(n).padStart(2,'0');\n      widget.style.setProperty('--portfolio-progress',`${(n/cards.length)*360}deg`);\n      widget.classList.toggle('is-complete',n===cards.length);\n    };\n    if('IntersectionObserver' in window){\n      const observed=new WeakSet();\n      const io=new IntersectionObserver(entries=>{\n        entries.forEach(e=>{\n          if(e.isIntersecting&&!observed.has(e.target)){observed.add(e.target);seen++;update();io.unobserve(e.target)}\n        });\n      },{threshold:.28,rootMargin:'0px 0px -12% 0px'});\n      cards.forEach(c=>io.observe(c));\n    }else{seen=cards.length;update()}\n    const hero=document.querySelector('.portfolio-v363-hero');\n    const footer=document.querySelector('.site-footer');\n    const vis=()=>{\n      const hy=hero?hero.getBoundingClientRect().bottom:0;\n      const fy=footer?footer.getBoundingClientRect().top:innerHeight+1;\n      widget.classList.toggle('is-visible',hy<innerHeight*.7&&fy>innerHeight*.25);\n    };\n    addEventListener('scroll',vis,{passive:true});vis();update();\n  }\n'''
# insert before final call line
needle='  renderHeader();renderFooter();renderSocials();bindMenu();bindHeader();bindLanguage();bindReveal();bindFilters();bindInquiryForm();bindCarousels();bindCounters();bindPremiumDynamics();bindProjectIntelligence();initGlobalMapsV10();'
if needle in t and 'bindPortfolioProgressV365' not in t:
    t=t.replace(needle,binder+'\n'+needle.replace('initGlobalMapsV10();','initGlobalMapsV10();bindPortfolioProgressV365();'))
# Extend premium tilt selectors for home visual sections
oldsel="document.querySelectorAll('.expertise-tab,.eq-card,.developer-section-visual,.case-card,.project-card')"
newsel="document.querySelectorAll('.expertise-tab,.eq-card,.developer-section-visual,.case-card,.project-card,.value-card,.hero-media,.bim-home-stage,.global-map-shell')"
t=t.replace(oldsel,newsel)
js.write_text(t,encoding='utf-8')

# --- Home brand copy + SEO ---
p=site/'index.html'; s=p.read_text(encoding='utf-8')
s=s.replace('BADR / CAIRO + JEDDAH / DEVELOPMENT INTELLIGENCE','BADR / CAIRO + JEDDAH / STRATEGIC DEVELOPMENT')
s=s.replace('data-ar="ذكاء تطوير للمطورين + ملاك الأراضي" data-en="Development Intelligence for Developers + Landowners">Development Intelligence for Developers + Landowners',
'''data-ar="تطوير استراتيجي للمطورين + ملاك الأراضي" data-en="Strategic Development for Developers + Landowners">Strategic Development for Developers + Landowners''')
s=s.replace('data-ar="BADR شريك استراتيجي للمطورين وملاك الأراضي والمستثمرين. نقرأ الفرصة، ونختبر المنتج، ثم نحول القرار الصحيح إلى عمارة وهندسة وBIM قابلة للتنفيذ." data-en="BADR is a Development Intelligence Partner for developers, landowners and investors. We read the opportunity, test the product and carry the right development decision through architecture, engineering and BIM.">BADR is a Development Intelligence Partner for developers, landowners and investors. We read the opportunity, test the product and carry the right development decision through architecture, engineering and BIM.',
'''data-ar="BADR شريكك الاستراتيجي في التطوير. نقرأ الفرصة، ونختبر منطق المنتج، ثم نحمل القرار الأقوى عبر العمارة والهندسة وBIM حتى يصبح قيمة مبنية." data-en="BADR is your Strategic Development Partner. We read the opportunity, test the product logic and carry the strongest decision through architecture, engineering and BIM until it becomes built value.">BADR is your Strategic Development Partner. We read the opportunity, test the product logic and carry the strongest decision through architecture, engineering and BIM until it becomes built value.''')
s=s.replace('data-ar="شريك ذكاء تطوير" data-en="Development Intelligence Partner">Development Intelligence Partner</strong><span data-ar="الأرض ← الفرصة ← المنتج ← التصميم ← الهندسة ← BIM ← القيمة" data-en="Land → Opportunity → Product → Design → Engineering → BIM → Value">Land → Opportunity → Product → Design → Engineering → BIM → Value',
'''data-ar="شريكك الاستراتيجي في التطوير" data-en="Strategic Development Partner">Strategic Development Partner</strong><span data-ar="من الرؤية إلى قيمة مبنية" data-en="From Vision to Built Value">From Vision to Built Value''')
p.write_text(s,encoding='utf-8')

# --- Other identity copy replacements ---
# About SEO
p=site/'about.html'; s=p.read_text(encoding='utf-8')
s=s.replace('BADR Atelier | Development Intelligence Studio','BADR Atelier | Strategic Development, Architecture, Engineering & BIM')
s=s.replace('BADR Atelier is a Development Intelligence studio operating from Cairo and Jeddah, connecting development strategy, architecture, engineering and BIM around one project decision.',
'BADR Atelier is a strategic development studio operating from Cairo and Jeddah, connecting development strategy, architecture, engineering and BIM around one project decision.')
p.write_text(s,encoding='utf-8')

# Developers terminology
p=site/'developers.html'; s=p.read_text(encoding='utf-8')
s=s.replace('data-ar="ذكاء التطوير" data-en="Development Intelligence">Development Intelligence','data-ar="استراتيجية التطوير" data-en="Development Strategy">Development Strategy')
p.write_text(s,encoding='utf-8')

# Team terminology
p=site/'team.html'; s=p.read_text(encoding='utf-8')
s=s.replace("small:{en:'Finance + Development Intelligence',ar:'المالية وذكاء التطوير'}","small:{en:'Finance + Development Strategy',ar:'المالية واستراتيجية التطوير'}")
p.write_text(s,encoding='utf-8')

# Global cache bump
for p in site.glob('*.html'):
    s=p.read_text(encoding='utf-8')
    s=s.replace('styles-v18.css?v=36.3.2','styles-v18.css?v=36.5')
    s=s.replace('main-v18.js?v=36.3.2','main-v18.js?v=36.5')
    p.write_text(s,encoding='utf-8')

# Changelog
(site/'V36_5_CHANGELOG_AR.md').write_text('''# BADR Atelier — V36-5 UPDATED\n\n- إضافة خلفية بصرية سينمائية مباشرة أسفل Hero صفحة المشاريع.\n- كتابة عنوان مختلف لكل عائلة مشاريع بدل العنوان المتكرر.\n- إضافة عداد Portfolio Journey ديناميكي يواكب استكشاف بطاقات المشاريع.\n- تطوير عداد الخريطة الموحد في Home + Studio بصريًا.\n- اعتماد الهوية النصية: Strategic Development Partner / شريكك الاستراتيجي في التطوير.\n- اعتماد العبارة: From Vision to Built Value / من الرؤية إلى قيمة مبنية.\n- توحيد سطر الخدمات: Strategy • Architecture • Engineering • BIM.\n- تطوير الحركة والخلفيات والـhover والعمق البصري في الصفحة الرئيسية.\n- تحديث Cache إلى 36.5.\n''',encoding='utf-8')
