// Rolagem suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Animação ao carregar a página
window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 1;
        section.style.transition = 'opacity 1s ease-in-out';
    });
});
// Carrossel Automático
let index = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.slide');
  index += direcao;
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index >= slides.length) {
    index = 0;
  }
  const novaPosicao = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${novaPosicao}%)`;
}