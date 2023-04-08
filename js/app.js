const abrir = document.querySelector(".hamburguer__icon");
const cabecalho = document.querySelector(".cabecalho-lista");

function open() {
  cabecalho.classList.toggle("open");
  if(cabecalho.classList.contains("open")) {
    abrir.classList.add("close");
  }else {
    abrir.classList.remove("close");
  }
}

abrir.addEventListener("click", open);