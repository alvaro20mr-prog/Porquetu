// === CAMBIO DE COLOR DEL MENÚ AL HACER SCROLL ===
window.addEventListener('scroll', function() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

// === LÓGICA DEL CARRUSEL DE FOTOS ===
function moveCarousel(direction) {
    const track = document.getElementById('track');
    const scrollAmount = track.clientWidth > 0 ? track.clientWidth / 2 : 300; 
    
    track.scrollBy({ 
        left: scrollAmount * direction, 
        behavior: 'smooth' 
    });
}

// === LÓGICA DEL MODAL (VER FOTOS EN GRANDE) ===
function openModal(element) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImage");
    const img = element.querySelector("img");
    
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("photoModal").style.display = "none";
}

// === LÓGICA DE LA VENTANA DE LA LETRA DE LA CANCIÓN ===
document.addEventListener("DOMContentLoaded", function() {
    const modalLetra = document.getElementById("modalLetraUnico");
    const btnVerLetra = document.getElementById("btnVerLetraUnico");
    const btnCerrarLetra = document.querySelector(".cerrar-modal-letra");

    if(btnVerLetra && modalLetra && btnCerrarLetra) {
        // Abrir la letra
        btnVerLetra.addEventListener("click", function() {
            modalLetra.style.display = "flex";
            setTimeout(() => { modalLetra.classList.add("mostrar"); }, 10);
        });

        // Cerrar la letra con la X
        btnCerrarLetra.addEventListener("click", function() {
            modalLetra.classList.remove("mostrar");
            setTimeout(() => { modalLetra.style.display = "none"; }, 400);
        });
    }
});

// === CERRAR CUALQUIER VENTANA (FOTO O LETRA) AL HACER CLIC AFUERA ===
window.onclick = function(event) {
    const photoModal = document.getElementById("photoModal");
    const modalLetra = document.getElementById("modalLetraUnico");
    
    // Si hizo clic fuera de la foto grande
    if (event.target == photoModal) {
        photoModal.style.display = "none";
    }
    
    // Si hizo clic fuera de la ventana de la letra
    if (event.target == modalLetra) {
        modalLetra.classList.remove("mostrar");
        setTimeout(() => { modalLetra.style.display = "none"; }, 400);
    }
}
