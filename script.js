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

// Imóveis por cidade
const imoveis = {
  ipatinga: {
      compra: [
          {
              nome: "Casa no Nova Esperança",
              descricao: "3 quartos, 2 banheiros, garagem para 2 carros.",
              preco: "R$ 450.000",
              imagem: "imagens/NovaEsperanca.jpg"
          },
          {
              nome: "Casa de luxo no bairro Bethânia",
              descricao: "2 quartos, 1 banheiro, condomínio com área de lazer.",
              preco: "R$ 300.000",
              imagem: "imagens/Bethania.jpg"
          },
          {
              nome: "Casa no bairro Manaain",
              descricao: "Área de 450m², excelente localização.",
              preco: "R$ 200.000",
              imagem: "imagens/Manaain.jpg"
          }
      ],
      aluguel: [
          {
              nome: "Apartamento no Centro",
              descricao: "2 quartos, 1 banheiro, condomínio com segurança.",
              preco: "R$ 1.200/mês",
              imagem: "imagens/ApartamentoCentro.jpg"
          },
          {
              nome: "Casa em Ipatinga 2",
              descricao: "3 quartos, 2 banheiros, área gourmet.",
              preco: "R$ 1.800/mês",
              imagem: "imagens/CasaIpatinga2.jpg"
          },
          {
              nome: "Kitnet em Ipatinga",
              descricao: "1 quarto, ideal para solteiro.",
              preco: "R$ 750/mês",
              imagem: "imagens/Kitnet.jpg"
          }
      ]
  },
  coronel_fabriciano: {
      compra: [
          {
              nome: "Casa no Jardim Panorama",
              descricao: "4 quartos, 3 banheiros, garagem ampla.",
              preco: "R$ 600.000",
              imagem: "imagens/CasaPanorama.jpg"
          },
          {
              nome: "Apartamento no Fabriciano",
              descricao: "3 quartos, 1 banheiro, área de lazer.",
              preco: "R$ 350.000",
              imagem: "imagens/ApartamentoFabriciano.jpg"
          },
          {
              nome: "Chácara no Cruzeiro",
              descricao: "Terreno de 5.000m², ideal para lazer.",
              preco: "R$ 750.000",
              imagem: "imagens/ChacaraCruzeiro.jpg"
          }
      ],
      aluguel: [
          {
              nome: "Casa no Centro",
              descricao: "2 quartos, 1 banheiro, cozinha ampla.",
              preco: "R$ 1.500/mês",
              imagem: "imagens/CasaCentroFabriciano.jpg"
          },
          {
              nome: "Apartamento no Bairro Vale Verde",
              descricao: "3 quartos, 2 banheiros, área de lazer.",
              preco: "R$ 1.000/mês",
              imagem: "imagens/ApartamentoValeVerde.jpg"
          },
          {
              nome: "Sobrado em Fabriciano",
              descricao: "3 quartos, 2 banheiros, garagem.",
              preco: "R$ 1.800/mês",
              imagem: "imagens/SobradoFabriciano.jpg"
          }
      ]
  },
  ipaba: {
      compra: [
          {
              nome: "Casa no Bairro Jardim",
              descricao: "3 quartos, 1 banheiro, garagem.",
              preco: "R$ 250.000",
              imagem: "imagens/CasaBairroJardim.jpg"
          },
          {
              nome: "Chácara em Ipaba",
              descricao: "Área de 10.000m², ideal para fazenda.",
              preco: "R$ 500.000",
              imagem: "imagens/ChacaraIpaba.jpg"
          },
          {
              nome: "Terreno em Ipaba",
              descricao: "Terreno com 2.000m².",
              preco: "R$ 100.000",
              imagem: "imagens/TerrenoIpaba.jpg"
          }
      ],
      aluguel: [
          {
              nome: "Apartamento em Ipaba",
              descricao: "2 quartos, 1 banheiro, segurança 24h.",
              preco: "R$ 900/mês",
              imagem: "imagens/ApartamentoIpaba.jpg"
          },
          {
              nome: "Casa em Ipaba",
              descricao: "3 quartos, 2 banheiros, varanda.",
              preco: "R$ 1.400/mês",
              imagem: "imagens/CasaIpaba.jpg"
          },
          {
              nome: "Kitnet no Centro de Ipaba",
              descricao: "1 quarto, ideal para estudantes.",
              preco: "R$ 600/mês",
              imagem: "imagens/KitnetIpaba.jpg"
          }
      ]
  }
};