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
// images dos imóveis/FILTRO
document.addEventListener("DOMContentLoaded", () => {
    const imoveisData = [
      { img: "imagens/imovel1.jpg", titulo: "Apartamento Luxuoso", descricao: "3 quartos, 2 banheiros", preco: "R$ 450.000", tipo: "apartamento", negocio: "comprar" },
      { img: "imagens/imovel2.jpeg", titulo: "Casa Moderna", descricao: "4 quartos, piscina", preco: "R$ 800.000", tipo: "casa", negocio: "comprar" },
      { img: "imagens/imovel3.jpg", titulo: "Cobertura Espetacular", descricao: "Vista para o mar", preco: "R$ 1.200.000", tipo: "apartamento", negocio: "alugar" },
      { img: "imagens/imovel4.jpg", titulo: "Flat no Centro", descricao: "Conforto e praticidade", preco: "R$ 350.000", tipo: "apartamento", negocio: "alugar" },
      { img: "imagens/imovel5.jpg", titulo: "Sítio Tranquilo", descricao: "Espaço verde amplo", preco: "R$ 950.000", tipo: "casa", negocio: "comprar" },
      { img: "imagens/imovel6.jpg", titulo: "Apartamento Compacto", descricao: "2 quartos, próximo ao centro", preco: "R$ 300.000", tipo: "apartamento", negocio: "alugar" },
      { img: "imagens/imovel7.png", titulo: "Casa Aconchegante", descricao: "2 quartos, ideal para família", preco: "R$ 500.000", tipo: "casa", negocio: "alugar" },
      { img: "imagens/imovel8.jpeg", titulo: "Apartamento Moderno", descricao: "Design contemporâneo", preco: "R$ 600.000", tipo: "apartamento", negocio: "alugar" },
      { img: "imagens/imovel9.jpg", titulo: "Casa de Campo", descricao: "Natureza e tranquilidade", preco: "R$ 700.000", tipo: "casa", negocio: "comprar" },
      { img: "imagens/imovel10.jpg", titulo: "Apartamento Sofisticado", descricao: "Luxo e conforto", preco: "R$ 1.000.000", tipo: "apartamento", negocio: "comprar" }
    ];
  
    const galeria = document.querySelector(".galeria");
  
    function renderImoveis(imoveis) {
      galeria.innerHTML = "";
      imoveis.forEach((imovel) => {
        const card = document.createElement("div");
        card.className = "imovel";
        card.innerHTML = `
          <img src="${imovel.img}" alt="${imovel.titulo}">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.descricao}</p>
          <p><strong>${imovel.preco}</strong></p>
        `;
        galeria.appendChild(card);
      });
    }
  
    renderImoveis(imoveisData);
  
    document.getElementById("searchForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const tipoNegocio = document.getElementById("tipo-negocio").value;
      const tipoImovel = document.getElementById("tipo-imovel").value;
  
      const filtrados = imoveisData.filter((imovel) => {
        const negocioMatch = tipoNegocio === "todos" || imovel.negocio === tipoNegocio;
        const tipoMatch = tipoImovel === "todos" || imovel.tipo === tipoImovel;
        return negocioMatch && tipoMatch;
      });
  
      renderImoveis(filtrados);
    });
  });
  



