const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let current = 0;
let interval;

// Função para mostrar a imagem atual
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// Avançar imagem
function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

// Voltar imagem
function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

// Troca automática a cada 4 segundos
function startCarousel() {
    interval = setInterval(nextImage, 4000);
}

// Parar troca automática ao interagir
function stopCarousel() {
    clearInterval(interval);
}

// Eventos dos botões
nextBtn.addEventListener('click', () => {
    nextImage();
    stopCarousel();
    startCarousel();
});
prevBtn.addEventListener('click', () => {
    prevImage();
    stopCarousel();
    startCarousel();
});

// Inicializa o carrossel
showImage(current);
startCarousel();