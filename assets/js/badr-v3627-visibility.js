/* BADR Atelier V36.27 — visibility & footer resilience */
(function(){
  'use strict';
  var cfg=window.BADR_CONFIG||{};
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]})}
  function isAr(){return document.body.classList.contains('is-ar')||document.documentElement.lang==='ar'||document.documentElement.dir==='rtl'}
  function wa(v){return 'https://wa.me/'+String(v||'').replace(/\D/g,'')}
  function fallbackFooter(){
    var ar=isAr();
    var brand=esc(cfg.brand||'BADR Atelier'), email=esc(cfg.email||'info@badratelier.com');
    var eg=esc(cfg.phoneEgyptDisplay||'+20 103 382 5435'), sa=esc(cfg.phoneSaudiDisplay||'+966 54 803 6680');
    var egLoc=esc(ar?(cfg.locationEgyptAr||'مدينة بدر، القاهرة، مصر'):(cfg.locationEgyptEn||'Badr City, Cairo, Egypt'));
    var saLoc=esc(ar?(cfg.locationSaudiAr||'حي الروضة، جدة، المملكة العربية السعودية'):(cfg.locationSaudiEn||'Al Rawdah District, Jeddah, Kingdom of Saudi Arabia'));
    return '<footer class="site-footer badr27-fallback-footer">'+
      '<div class="shell footer-grid">'+
        '<div><div class="brand-block footer-brand-block">'+
          '<img class="footer-logo" src="assets/img/badr-logo.png" alt="BADR Atelier" loading="eager" decoding="async"/>'+
          '<span class="footer-logo-fallback" aria-hidden="true">BADR ATELIER</span>'+
          '<div class="brand-tagline"><b>'+(ar?'شريكك الاستراتيجي في التطوير':'Strategic Development Partner')+'</b><span>'+(ar?'من الرؤية إلى قيمة مبنية.':'From Vision to Built Value.')+'</span></div>'+ 
        '</div><p class="footer-tag">'+(ar?'استراتيجية تطوير وعمارة وهندسة وBIM حول قرار واحد واضح.':'Development strategy, architecture, engineering and BIM around one clear development decision.')+'</p></div>'+ 
        '<div class="footer-col"><strong>'+(ar?'الاستشارات':'Advisory')+'</strong><a href="developers.html">'+(ar?'استشارات التطوير':'Development advisory')+'</a><a href="investors.html">'+(ar?'للمستثمرين':'For investors')+'</a><a href="projects.html">'+(ar?'المشروعات':'Projects')+'</a></div>'+ 
        '<div class="footer-col"><strong>'+(ar?'الأعمال':'Work')+'</strong><a href="services.html">'+(ar?'الخدمات':'Services')+'</a><a href="bim-digital.html">BIM + Digital</a><a href="team.html">'+(ar?'فريق العمل':'Team')+'</a><a href="careers.html">'+(ar?'الوظائف':'Careers')+'</a></div>'+ 
        '<div class="footer-col footer-offices"><strong>'+(ar?'المكاتب + التواصل':'Studios + Contact')+'</strong><a href="mailto:'+email+'">'+email+'</a><a class="phone-wa-link" href="'+wa(cfg.phoneEgypt)+'" target="_blank" rel="noopener"><span>'+eg+'</span></a><a class="phone-wa-link" href="'+wa(cfg.phoneSaudi||cfg.whatsapp)+'" target="_blank" rel="noopener"><span>'+sa+'</span></a><span class="footer-office"><b>'+(ar?'استوديو القاهرة':'Cairo Studio')+'</b><em>'+egLoc+'</em></span><span class="footer-office"><b>'+(ar?'استوديو جدة':'Jeddah Studio')+'</b><em>'+saLoc+'</em></span><span>'+esc(cfg.website||'www.badratelier.com')+'</span></div>'+ 
      '</div><div class="shell footer-bottom"><span>© '+esc(cfg.copyrightYear||'2026')+' '+brand+'. '+(ar?'جميع الحقوق محفوظة.':'All rights reserved.')+'</span><span>'+(ar?'القاهرة + جدة • شريكك الاستراتيجي في التطوير':'Cairo + Jeddah • Strategic Development Partner')+'</span></div>'+ 
    '</footer>';
  }
  function ensureFooter(){
    var mount=document.getElementById('site-footer'); if(!mount)return;
    if(!mount.querySelector('.site-footer')) mount.innerHTML=fallbackFooter();
    var footer=mount.querySelector('.site-footer'); if(!footer)return;
    footer.style.removeProperty('opacity');footer.style.removeProperty('visibility');footer.hidden=false;
    var logo=footer.querySelector('.footer-logo');
    if(logo){
      if(!logo.nextElementSibling||!logo.nextElementSibling.classList.contains('footer-logo-fallback')){
        var fb=document.createElement('span');fb.className='footer-logo-fallback';fb.setAttribute('aria-hidden','true');fb.textContent='BADR ATELIER';logo.insertAdjacentElement('afterend',fb);
      }
      var check=function(){logo.classList.toggle('is-broken',logo.complete&&logo.naturalWidth===0)};
      logo.addEventListener('error',function(){logo.classList.add('is-broken')},{once:true});
      logo.addEventListener('load',function(){logo.classList.remove('is-broken')},{once:true});
      check();
    }
  }
  function repairReveal(){
    document.querySelectorAll('.badr-section-premium').forEach(function(el){
      var r=el.getBoundingClientRect();
      if(r.top<innerHeight*1.08&&r.bottom>-40)el.classList.add('badr-in');
    });
  }
  function removeAccidentalWhiteOnGold(){
    var zones=document.querySelectorAll('.section-gold,.cta,.iv17-final-cta');
    zones.forEach(function(zone){zone.setAttribute('data-badr27-contrast','dark-on-gold')});
  }
  function init(){
    ensureFooter();repairReveal();removeAccidentalWhiteOnGold();
    setTimeout(ensureFooter,250);setTimeout(ensureFooter,1200);setTimeout(repairReveal,900);
    addEventListener('scroll',repairReveal,{passive:true});addEventListener('resize',repairReveal,{passive:true});
    document.documentElement.classList.add('badr-v3627-visibility-ready');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
