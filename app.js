const abrirMenuHamburguer = document.querySelector(".hamburguer__icon");
const itensNavegacaoCabecalho = document.querySelector(".cabecalho-lista");

function open() {
  itensNavegacaoCabecalho.classList.toggle("open");
  if (cabecalho.classList.contains("open")) {
    abrirMenuHamburguer.classList.add("close");
  } else {
    abrirMenuHamburguer.classList.remove("close");
  }
}

abrirMenuHamburguer.addEventListener("click", open);

// seletor para todos os elementos .fade-in
const elementos = document.querySelectorAll('.fade-in');

// função para verificar se um elemento está na janela visível
const elementoNaViewport = (el) => {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    (rect.top <= windowHeight * 0.4) // o elemento está 90% na janela visível
  );
};

// adicionar evento de scroll aos elementos .fade-in
elementos.forEach((el) => {
  window.addEventListener('scroll', () => {
    if (elementoNaViewport(el)) {
      el.classList.add('visivel');
      setTimeout(() => {
        removerMargemSuperiorNegativa(el);
      }, 600); // tempo de espera para remover a margem superior negativa depois que a animação terminar
    }
  });
});


