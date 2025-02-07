function toggleLetter() {
    const loveLetter = document.getElementById('loveLetter');
    const envelope = document.getElementById('envelope');
    const seal = document.getElementById('seal');

    // Verificar si la carta está oculta
    if (loveLetter.style.display === 'none' || loveLetter.style.display === '') {
        loveLetter.classList.add('open'); // Agregar clase para mostrar la carta
        envelope.classList.add('open'); // Agregar clase para animación de apertura
        seal.classList.add('hidden'); // Ocultar el sello
        loveLetter.style.display = 'block'; // Asegurarse de que se muestre
    } else {
        loveLetter.classList.remove('open'); // Remover clase para ocultar la carta
        envelope.classList.remove('open'); // Remover clase para volver al tamaño original
        seal.classList.remove('hidden'); // Mostrar el sello nuevamente
        setTimeout(() => {
            loveLetter.style.display = 'none'; // Ocultar la carta después de la animación
        }, 500); // Esperar a que termine la animación
    }
}

// Inicializar la carta como oculta al cargar la página
window.onload = function() {
    document.getElementById('loveLetter').style.display = 'none';
    document.getElementById('seal').innerHTML = "❤️"; // Agregar el corazón como sello
};
