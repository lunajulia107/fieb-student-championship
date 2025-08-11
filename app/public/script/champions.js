// Carregamento dos vencedores
const containerloader = document.querySelector("#loader-container");
const container = document.querySelector("#container");

setTimeout(() => {
  containerloader.style.display = "none";
  container.style.display = "block";
}, 2000);
