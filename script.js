// Alterna o menu responsivo
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Navega até uma seção específica
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Configurações do carrossel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

// Mostra o próximo slide
function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Mostra o slide anterior
function prevSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Navegação automática do carrossel
setInterval(() => {
    nextSlide();
}, 5000);

// Filtrar imóveis (simulado)
function filterProperties() {
    const type = document.getElementById("property-type").value;
    const maxPrice = document.getElementById("price-range").value;

    alert(
        `Filtrando propriedades do tipo "${type}" com preço máximo de "${maxPrice}".`
    );
}

// Enviar formulário de contato
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });
