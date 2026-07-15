// ===============================
// MENU
// ===============================

window.addEventListener("scroll", () => {
    const menu = document.querySelector(".menu");
    if(window.scrollY > 50){
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});

// ===============================
// CARRUSEL (CORREGIDO Y BLINDADO)
// ===============================

let posicionCarrusel = 0;

function moveCarousel(direccion) {
    const track = document.getElementById("track");
    if (!track) return;
    
    // Obtenemos una tarjeta para saber cuánto medir
    const tarjeta = track.querySelector(".carousel-item");
    if (!tarjeta) return;
    
    // Calculamos el ancho exacto más el espacio entre fotos
    const ancho = tarjeta.offsetWidth + 20; 
    
    // Actualizamos la posición
    posicionCarrusel += direccion;
    
    // Calculamos el límite para no pasarnos del final
    // Dependiendo del ancho de la pantalla, mostramos 3, 2 o 1 foto
    let fotosVisibles = 3;
    if (window.innerWidth <= 768) fotosVisibles = 2;
    if (window.innerWidth <= 480) fotosVisibles = 1;
    
    const max = Math.max(0, track.children.length - fotosVisibles);
    
    if (posicionCarrusel < 0) posicionCarrusel = 0;
    if (posicionCarrusel > max) posicionCarrusel = max;
    
    // Movemos el contenedor suavemente
    track.style.transform = `translateX(-${posicionCarrusel * ancho}px)`;
}

// ===============================
// MODAL FOTOS
// ===============================

function openModal(element){
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.querySelector("img").src;
}

function closeModal(){
    document.getElementById("photoModal").style.display = "none";
}

// ===============================
// MODAL LETRA
// ===============================

function abrirLetra(){
    const modal = document.getElementById("modalLetraUnico");
    if(!modal) return;
    modal.style.display = "flex";
    setTimeout(()=>{
        modal.classList.add("mostrar");
    },10);
}

function cerrarLetra(){
    const modal = document.getElementById("modalLetraUnico");
    if(!modal) return;
    modal.classList.remove("mostrar");
    setTimeout(()=>{
        modal.style.display = "none";
    },400);
}

// ===============================
// CERRAR MODALES HACIENDO CLICK AFUERA
// ===============================

window.addEventListener("click",(e)=>{
    const photo = document.getElementById("photoModal");
    const letra = document.getElementById("modalLetraUnico");
    
    if(e.target === photo){
        closeModal();
    }
    if(e.target === letra){
        cerrarLetra();
    }
});

// ===============================
// SCROLL SUAVE DEL MENÚ
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e){
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        if(destino){
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ===============================
// FLECHA HERO
// ===============================

const flecha = document.querySelector(".scroll-down");
if(flecha){
    flecha.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector("#historia").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ===============================
// CERRAR CON ESC
// ===============================

document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape"){
        closeModal();
        cerrarLetra();
    }
});

// ===============================
// VOLUMEN AUDIO
// ===============================

const audio = document.getElementById("audioPlayer");
if(audio){
    audio.volume = 0.8;
}

console.log("✔ script.js cargado correctamente y listo para funcionar");
