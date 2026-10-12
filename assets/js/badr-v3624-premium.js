/* BADR Atelier V36.26 — Premium interactions, image-free */
(function(){
  'use strict';
  function qsa(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
  function addInteractions(){
    var selectors=['.project-card','.portfolio-card','.service-card','.career-path-card','.career-value-grid article','.iv17-service-card','.team-card','.contact-item','.stat','.proof-card','.iv19-growth-card','.iv19-proof-card','.case12-card'];
    qsa(selectors.join(',')).forEach(function(el){
      if(el.dataset.badrInteractive)return;el.dataset.badrInteractive='1';el.classList.add('badr-interactive');
      var first=el.firstElementChild;if(first)first.classList.add('badr-depth');
      el.addEventListener('pointermove',function(e){
        var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        el.style.setProperty('--mx',(x*100).toFixed(1)+'%');el.style.setProperty('--my',(y*100).toFixed(1)+'%');
        if(window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          var rx=(.5-y)*2.6,ry=(x-.5)*3.2;el.style.transform='translateY(-5px) rotateX('+rx.toFixed(2)+'deg) rotateY('+ry.toFixed(2)+'deg)';
        }
      },{passive:true});
      el.addEventListener('pointerleave',function(){el.style.removeProperty('transform')},{passive:true});
    });
  }
  function revealSections(){
    var sections=qsa('main>section');if(!('IntersectionObserver' in window)){sections.forEach(function(s){s.classList.add('badr-in')});return}
    var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('badr-in');io.unobserve(e.target)}})},{threshold:.055,rootMargin:'0px 0px -3%'});
    sections.forEach(function(s,i){if(i===0){s.classList.add('badr-in');return}s.classList.add('badr-section-premium');io.observe(s)});
  }
  function scrollProgress(){
    var bar=document.createElement('div');bar.id='badrScrollProgress';bar.setAttribute('aria-hidden','true');bar.innerHTML='<i></i>';document.body.appendChild(bar);var fill=bar.firstChild,ticking=false;
    function paint(){var d=document.documentElement,max=d.scrollHeight-innerHeight,p=max>0?scrollY/max:0;fill.style.transform='scaleX('+Math.max(0,Math.min(1,p))+')';ticking=false}
    addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(paint)}},{passive:true});addEventListener('resize',paint,{passive:true});paint();
  }
  function ambientCursor(){
    if(!window.matchMedia('(pointer:fine)').matches||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var c=document.createElement('div');c.id='badrAmbientCursor';c.setAttribute('aria-hidden','true');document.body.appendChild(c);var x=-300,y=-300,tx=x,ty=y,raf=0;
    function draw(){x+=(tx-x)*.14;y+=(ty-y)*.14;c.style.setProperty('--cx',x+'px');c.style.setProperty('--cy',y+'px');raf=requestAnimationFrame(draw)}
    addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;document.documentElement.classList.add('badr-pointer-live');if(!raf)draw()},{passive:true});
    addEventListener('mouseleave',function(){document.documentElement.classList.remove('badr-pointer-live')},{passive:true});
  }
  function microIconMotion(){
    qsa('a,button,.badr-interactive').forEach(function(el){el.addEventListener('pointerenter',function(){var icon=el.querySelector('svg,.icon,.service-icon,.contact-icon,.social-icon');if(icon)icon.animate([{transform:'scale(1) rotate(0deg)'},{transform:'scale(1.12) rotate(-5deg)'},{transform:'scale(1.06) rotate(0deg)'}],{duration:420,easing:'cubic-bezier(.2,.72,.2,1)'})},{passive:true})});
  }
  function addFlowDivider(){
    var main=document.querySelector('main');if(!main)return;var sections=qsa(':scope > section',main);if(sections.length<4)return;
    var after=sections[Math.min(2,sections.length-2)];if(after&&after.nextElementSibling&&!after.nextElementSibling.classList.contains('badr-flow-divider')){var d=document.createElement('div');d.className='badr-flow-divider';d.setAttribute('aria-hidden','true');after.insertAdjacentElement('afterend',d)}
  }
  function init(){addInteractions();revealSections();scrollProgress();ambientCursor();microIconMotion();addFlowDivider();document.documentElement.classList.add('badr-v3626-ready')}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();