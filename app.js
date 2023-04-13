const abrir = document.querySelector(".hamburguer__icon");
const cabecalho = document.querySelector(".cabecalho-lista");

function open() {
  cabecalho.classList.toggle("open");
  if (cabecalho.classList.contains("open")) {
    abrir.classList.add("close");
  } else {
    abrir.classList.remove("close");
  }
}

abrir.addEventListener("click", open);

// selecione todos os elementos com a classe 'fade-in'
const secaoEscondida = document.querySelectorAll(".fade-in");

// adicione um evento de rolagem ao objeto window
window.addEventListener("scroll", () => {
  // para cada elemento com a classe 'fade-in'
  secaoEscondida.forEach((secoes) => {
    // verifique se o elemento está na janela visível
    if (elementoNaViewPort(secoes)) {
      // adicione a classe 'visible' para iniciar a animação
      secoes.classList.add("visivel");
    }
  });
});

// função auxiliar para verificar se um elemento está na janela visível
const elementoNaViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  const offset = 350; // ajuste o valor do offset conforme necessário
  return (
    rect.top >= 0 - offset &&
    rect.bottom <= window.innerHeight + offset &&
    rect.right <= window.innerWidth
  );
};

