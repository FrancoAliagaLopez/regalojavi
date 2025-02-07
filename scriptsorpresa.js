document.addEventListener("DOMContentLoaded", function () {
    let audio = document.querySelector("audio");
    if (audio) {
        audio.play().catch(error => console.log("Autoplay bloqueado: ", error));
    }

    let index = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    // Ajustar el ancho del carrusel para que encaje con las imágenes
    carousel.style.width = `${totalImages * 100}%`;

    function updateCarousel() {
        const offset = -index * (100 / totalImages); // Calcula correctamente el desplazamiento
        carousel.style.transform = `translateX(${offset}%)`;

        // Ocultar el botón izquierdo si estamos en la primera imagen
        prevBtn.style.display = index === 0 ? "none" : "block";

        // Ocultar el botón derecho si estamos en la última imagen
        nextBtn.style.display = index === totalImages - 1 ? "none" : "block";
    }

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (index < totalImages - 1) {
            index++;
            updateCarousel();
        }
    });

    updateCarousel();
    
});
