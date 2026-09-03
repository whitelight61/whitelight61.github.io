(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`CavemanXActual@proton.me`,t=`https://formsubmit.co/ajax/${e}`,n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,r=document.querySelector(`#lead-form`),i=document.querySelector(`#form-status`);document.querySelectorAll(`[data-offer]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.offer;if(!t||!r)return;let n=r.querySelectorAll(`input[name="offer"]`);for(let e of n)e.value===t&&(e.checked=!0);document.querySelectorAll(`.sku`).forEach(e=>{e.classList.toggle(`is-picked`,e.getAttribute(`data-offer`)===t)})})});function a(t){let n=[`Name: ${t.name}`,`Email: ${t.email}`,`Store URL: ${t.store_url}`,`Offer: ${t.offer}`,``,`What's broken:`,t.whats_broken].join(`
`);return`mailto:${e}?subject=Shopify%202.0%20rebuild%20lead&body=${encodeURIComponent(n)}`}function o(e,t){i&&(i.textContent=e,i.classList.remove(`ok`,`err`),t&&i.classList.add(t))}r?.addEventListener(`submit`,async e=>{e.preventDefault();let n=new FormData(r);if(String(n.get(`_gotcha`)||``)||String(n.get(`_honey`)||``)){o(`Sent.`,`ok`);return}let i={name:String(n.get(`name`)||``).trim(),email:String(n.get(`email`)||``).trim(),store_url:String(n.get(`store_url`)||``).trim(),offer:String(n.get(`offer`)||``).trim(),whats_broken:String(n.get(`whats_broken`)||``).trim(),_subject:`Shopify 2.0 rebuild lead`};s=r.querySelector(`button[type="submit"]`);s&&(s.disabled=!0),o(`Sending…`,``);try{let e=await fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify(i)});if(!e.ok)throw Error(`HTTP ${e.status}`);r.classList.add(`sent`),o(`Got it. If this is the first form from this page, I still have to confirm FormSubmit in Proton — use the mailto if you need it today.`,`ok`)}catch{o(`FormSubmit didn’t take it. Opening a mailto draft with the same details.`,`err`),window.location.href=a(i),s&&(s.disabled=!1)}});var s=document.querySelector(`#split-frame`),c=document.querySelector(`#split-range`);function l(e){s&&(s.style.setProperty(`--pos`,`${e}%`),c?.setAttribute(`aria-valuenow`,e))}c?.addEventListener(`input`,()=>l(c.value)),l(c?.value??`58`);var u=document.querySelector(`#ht-stage`),d=document.querySelector(`#ht-note`);function f(e){if(!u)return;let t=()=>{u.querySelectorAll(`[data-view]`).forEach(t=>{t.classList.toggle(`is-on`,t.dataset.view===e)}),u.querySelectorAll(`[data-ht-nav]`).forEach(t=>{t.classList.toggle(`is-on`,t.dataset.htNav===e)})},r=document;!n&&typeof r.startViewTransition==`function`?r.startViewTransition(t):t()}document.querySelectorAll(`[data-ht]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.ht;t&&f(t)})}),document.querySelectorAll(`[data-ht-cart]`).forEach(e=>{e.addEventListener(`click`,()=>{d&&(d.hidden=!1,d.textContent=`Sample store. Not for sale — this is the 2.0 rebuild, not a checkout.`)})});
(function(){
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fill = document.querySelector('#progress-fill');
  function onScroll(){
    if(!fill) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (doc.scrollTop || document.body.scrollTop) / max * 100 : 0;
    fill.style.width = pct + '%';
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('[data-spy]'));
  if(spyLinks.length && 'IntersectionObserver' in window){
    var byId = {};
    spyLinks.forEach(function(link){ byId[link.dataset.spy] = link; });
    var spyObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        var link = byId[entry.target.id];
        if(!link) return;
        link.classList.toggle('is-active', entry.isIntersecting);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function(id){
      var section = document.getElementById(id);
      if(section) spyObserver.observe(section);
    });
  }

  if(!reduced && !window.matchMedia('(pointer: coarse)').matches){
    document.querySelectorAll('.magnetic').forEach(function(btn){
      btn.addEventListener('mousemove', function(ev){
        var box = btn.getBoundingClientRect();
        var relX = ev.clientX - box.left - box.width / 2;
        var relY = ev.clientY - box.top - box.height / 2;
        btn.style.transform = 'translate(' + (relX * 0.18) + 'px,' + (relY * 0.28) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){
        btn.style.transform = '';
      });
    });

    var heroStage = document.querySelector('#hero-stage');
    if(heroStage){
      heroStage.addEventListener('mousemove', function(ev){
        var box = heroStage.getBoundingClientRect();
        var mx = (ev.clientX - box.left) / box.width * 100;
        var my = (ev.clientY - box.top) / box.height * 100;
        heroStage.style.setProperty('--mx', mx + '%');
        heroStage.style.setProperty('--my', my + '%');
      });
    }
  }

  document.querySelectorAll('[data-scroll-to]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = document.querySelector(btn.dataset.scrollTo);
      if(target) target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
