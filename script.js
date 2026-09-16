document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}})});

const cards=document.querySelectorAll('.card');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';observer.unobserve(entry.target)}})},{threshold:.15});
cards.forEach(card=>{card.style.opacity='0';card.style.transform='translateY(18px)';card.style.transition='opacity .6s ease, transform .6s ease';observer.observe(card)});