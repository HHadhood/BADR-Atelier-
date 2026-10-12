(function(){
  'use strict';
  var started=Date.now(),removed=false;
  function introEl(){return document.getElementById('badrCinematicIntro')}
  function held(){try{return new URLSearchParams(location.search).get('badrIntro')==='hold'}catch(e){return false}}
  function removeIntro(){
    if(held()||removed)return;removed=true;
    var intro=introEl();if(!intro)return;
    var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var minView=reduced?260:1550;
    var wait=Math.max(0,minView-(Date.now()-started));
    window.setTimeout(function(){intro.classList.add('is-leaving');window.setTimeout(function(){if(intro&&intro.parentNode)intro.remove()},reduced?170:760)},wait);
  }
  function enhanceHero(){
    var body=document.body;if(!body||!body.classList.contains('badr-cinematic-v3623'))return;
    var page=body.getAttribute('data-page')||'';
    /* Investors/projects/BIM retain their native designed hero sections. */
    if(['projects','investors','bim'].indexOf(page)!==-1)return;
    var main=document.querySelector('main');if(!main)return;
    var hero=main.querySelector(':scope > .page-hero, :scope > .career-hero, :scope > section:first-child');
    if(hero)hero.classList.add('badr-v3623-hero');
  }
  function syncIntroLanguage(){
    var body=document.body,intro=introEl();if(!body||!intro)return;
    var isAr=body.classList.contains('is-ar')||document.documentElement.dir==='rtl'||document.documentElement.lang==='ar';
    var en=intro.querySelector('.bci-title-en'),ar=intro.querySelector('.bci-title-ar'),small=intro.querySelector('.bci-brand small');
    if(en)en.style.opacity=isAr?'.70':'1';if(ar)ar.style.opacity=isAr?'1':'.86';
    if(small&&small.dataset)small.textContent=isAr?(small.dataset.ar||small.textContent):(small.dataset.en||small.textContent);
  }
  function init(){enhanceHero();syncIntroLanguage();if(!held())window.setTimeout(removeIntro,1750)}
  document.addEventListener('DOMContentLoaded',init,{once:true});if(document.readyState!=='loading')init();
  window.addEventListener('load',function(){if(!held())window.setTimeout(removeIntro,400)},{once:true});
  window.addEventListener('badr:language-change',syncIntroLanguage);
  document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key==='Escape')&&!held())removeIntro()});
  document.addEventListener('pointerdown',function(){if(!held())removeIntro()},{once:true});
})();