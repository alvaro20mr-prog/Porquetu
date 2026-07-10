// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener('click',e=>{

e.preventDefault();

document.querySelector(link.getAttribute('href')).scrollIntoView({

behavior:"smooth"

});

});

});


// Aparición de secciones

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});


document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// Polaroids

document.querySelectorAll(".polaroid").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.zIndex="100";

});

card.addEventListener("mouseleave",()=>{

card.style.zIndex="1";

});

});
