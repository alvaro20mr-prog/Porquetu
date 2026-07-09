// Desplazamiento suave del menú

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Animación de aparición al hacer scroll

const elementos = document.querySelectorAll(
    '.historia, .cancion, .carta, .final, .polaroid'
);


const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add('visible');

        }

    });

},{
    threshold:0.15
});


elementos.forEach(elemento=>{

    observador.observe(elemento);

});


// Efecto ligero en las fotografías

const fotos = document.querySelectorAll('.polaroid');


fotos.forEach((foto,index)=>{

    foto.style.setProperty(
        '--orden',
        index
    );


    foto.addEventListener('mouseenter',()=>{

        foto.style.zIndex = 10;

    });


    foto.addEventListener('mouseleave',()=>{

        foto.style.zIndex = 1;

    });

});
