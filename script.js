// ===============================
// MENU
// ===============================

window.addEventListener("scroll", () => {

    const menu = document.querySelector(".menu");

    if(window.scrollY>50){

        menu.classList.add("scrolled");

    }else{

        menu.classList.remove("scrolled");

    }

});

// ===============================
// CARRUSEL
// ===============================

let posicionCarrusel=0;

function moveCarousel(direccion){

    const track=document.getElementById("track");

    if(!track) return;

    const tarjeta=track.querySelector(".carousel-item");

    if(!tarjeta) return;

    const ancho=tarjeta.offsetWidth+20;

    posicionCarrusel+=direccion;

    const max=Math.max(0,track.children.length-4);

    if(posicionCarrusel<0) posicionCarrusel=0;

    if(posicionCarrusel>max) posicionCarrusel=max;

    track.style.transform=`translateX(-${posicionCarrusel*ancho}px)`;

}

// ===============================
// MODAL FOTOS
// ===============================

function openModal(element){

    const modal=document.getElementById("photoModal");

    const modalImg=document.getElementById("modalImage");

    modal.style.display="block";

    modalImg.src=element.querySelector("img").src;

}

function closeModal(){

    document.getElementById("photoModal").style.display="none";

}
