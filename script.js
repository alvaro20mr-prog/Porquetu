function iniciarHistoria() {

    const musica = document.getElementById("musica");

    musica.scrollIntoView({
        behavior: "smooth"
    });

    const audio = document.querySelector("audio");

    if (audio) {
        audio.play().catch(() => {});
    }

}

// Cambia el color del menú al hacer scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background = "rgba(255,255,255,.95)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";

        document.querySelector(".logo").style.color = "#8b1e3f";

        document.querySelectorAll("nav a").forEach(link => {
            link.style.color = "#333";
        });

    } else {

        nav.style.background = "rgba(0,0,0,.15)";
        nav.style.boxShadow = "none";

        document.querySelector(".logo").style.color = "white";

        document.querySelectorAll("nav a").forEach(link => {
            link.style.color = "white";
        });

    }

});
