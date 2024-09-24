//ATIVAR HEADER PELO BTN
function ativarNav() {
  const bars = document.querySelector(".div-btn-menu-bars");
  const ul = document.querySelector(".div-ul");
  const redesSociaisNav = document.querySelector(".redes-sociais-header");
  const headerSection = document.querySelector(".header-section");

  bars.addEventListener("click", () => {
    ul.classList.toggle("ativo");
    redesSociaisNav.classList.toggle("ativo");
    headerSection.classList.toggle("ativo");
  });
}

ativarNav();
