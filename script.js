// Desplazamiento suave

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener('click',e=>{

e.preventDefault();

document.querySelector(link.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


// Animación al aparecer

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('mostrar');

}

});

},{threshold:0.2});


document.querySelectorAll('section,.foto').forEach(el=>{

observer.observe(el);

});


// Efecto Polaroid

document.querySelectorAll('.foto').forEach(foto=>{

foto.addEventListener('mouseenter',()=>{

foto.style.zIndex="100";

});

foto.addEventListener('mouseleave',()=>{

foto.style.zIndex="1";

});

});
