// =====================================================
// JAVASCRIPT - Funcionalidades Interactivas
// =====================================================

// Modal para ver fotos en grande
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');

function openModal(element) {
    const img = element.querySelector('img');
    if (img) {
        modal.style.display = 'block';
        modalImage.src = img.src;
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Reproducir/Pausar música al hacer clic
const audioPlayer = document.getElementById('audioPlayer');

if(audioPlayer) {
    audioPlayer.addEventListener('play', function() {
        console.log('🎵 Reproduciendo canción...');
    });

    audioPlayer.addEventListener('pause', function() {
        console.log('⏸️ Música pausada');
    });
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Observador de intersección para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.timeline-item, .polaroid-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Mensaje de bienvenida en consola
console.log('%c💕 Bienvenido a "Porque Tú" 💕', 'color: #800020; font-size: 16px; font-weight: bold;');
console.log('%cUna página hecha con amor para Melissa', 'color: #C41E3A; font-size: 14px; font-style: italic;');
console.log('%c❤️ Te amo, Melissa. Para siempre. ❤️', 'color: #800020; font-size: 13px; font-weight: bold;');

// Función para cambiar música (opcional)
function changeMusic(url) {
    if(audioPlayer) {
        audioPlayer.src = url;
        audioPlayer.play();
    }
}

// Efecto de clic en corazones (interactividad extra)
document.addEventListener('click', function(e) {
    // Detectar si se hace clic en un corazón
    if (e.target.textContent.includes('♥') || e.target.textContent.includes('❤')) {
        createHeartAnimation(e);
    }
});

function createHeartAnimation(e) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = '2em';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'heartFloat 1s ease-out forwards';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
}

// Agregar estilos de animación para corazones flotantes
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Inicialización completada
console.log('✨ Página cargada correctamente ✨');
