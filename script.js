// =========================
// Scroll suave
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// =========================
// Menú al hacer scroll
// =========================

const menu=document.querySelector(".menu");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

menu.classList.add("activo");

}else{

menu.classList.remove("activo");

}

});


// =========================
// Animaciones
// =========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("mostrar");

}

});

},{threshold:0.15});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// =========================
// Polaroids
// =========================

document.querySelectorAll(".polaroid").forEach(foto=>{

foto.addEventListener("mouseenter",()=>{

foto.style.zIndex="999";

});

foto.addEventListener("mouseleave",()=>{

foto.style.zIndex="1";

});

});
