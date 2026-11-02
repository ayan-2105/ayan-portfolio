const progress=document.getElementById('progressBar');
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const toggle=document.getElementById('menuToggle'),menu=document.getElementById('mobileMenu');
toggle.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
// Lightweight perspective response: subtle only, disabled for touch and reduced-motion users.
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const stage=document.querySelector('.portrait-stage');stage.addEventListener('mousemove',e=>{const r=stage.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;const card=stage.querySelector('.portrait-card');card.style.transform=`rotate(${4+y*4}deg) rotateY(${-9+x*12}deg) translateY(-4px)`});stage.addEventListener('mouseleave',()=>stage.querySelector('.portrait-card').style.transform='rotate(4deg) rotateY(-9deg)')}
