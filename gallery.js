// gallery.js

let slideIndex = 1;

// Función para abrir el lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

// Función para cerrar el lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Función para mostrar la diapositiva actual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función para cambiar entre diapositivas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar las diapositivas
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("lightbox-image");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}