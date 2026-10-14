/* BADR Atelier V36.31 — faster premium home project reel */
(() => {
  const body=document.body;if(!body||body.dataset.page!=='home')return;
  const media=document.querySelector('.hero-media');if(!media)return;
  const slides=Array.from(media.querySelectorAll('img.badr-home-slide'));if(slides.length<2)return;
  const meta=document.createElement('div');meta.className='badr-home-reel-meta';
  meta.innerHTML='<small><span>BADR PROJECT REEL</span><span class="badr-reel-count">01 / '+String(slides.length).padStart(2,'0')+'</span></small><b class="badr-reel-title"></b>';
  media.appendChild(meta);
  const progress=document.createElement('div');progress.className='badr-home-reel-progress';progress.innerHTML='<i></i>';media.appendChild(progress);
  const titleEl=meta.querySelector('.badr-reel-title'),countEl=meta.querySelector('.badr-reel-count');
  let current=Math.max(0,slides.findIndex(s=>s.classList.contains('is-active'))),timer=null;const interval=3450;
  const preload=i=>{const s=slides[(i+slides.length)%slides.length];if(s){const im=new Image();im.src=s.currentSrc||s.src;}};
  function restartProgress(){progress.classList.remove('is-running');void progress.offsetWidth;progress.classList.add('is-running')}
  function activate(next){slides[current].classList.remove('is-active');current=(next+slides.length)%slides.length;const slide=slides[current];slide.classList.add('is-active');titleEl.textContent=slide.dataset.project||slide.alt||'BADR Atelier Project';countEl.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');restartProgress();preload(current+1);preload(current+2)}
  function schedule(){clearInterval(timer);timer=setInterval(()=>activate(current+1),interval)}
  preload(1);preload(2);preload(3);activate(current);
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!reduce)schedule();
  media.addEventListener('mouseenter',()=>{clearInterval(timer);progress.classList.remove('is-running')});
  media.addEventListener('mouseleave',()=>{if(!reduce){restartProgress();schedule()}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(timer);else if(!reduce){restartProgress();schedule()}});
})();
