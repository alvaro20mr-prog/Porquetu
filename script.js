// === LÓGICA DEL CARRUSEL DE FOTOS ===
function moveCarousel(direction) {
    const track = document.getElementById('track');
    // Calculamos cuánto desplazarnos (aproximadamente el tamaño de una foto + el margen)
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

// Permitir cerrar el modal si se hace clic fuera de la foto
window.onclick = function(event) {
    const modal = document.getElementById("photoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
