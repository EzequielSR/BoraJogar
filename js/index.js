document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById('main-header');
  const headerHeight = header.offsetHeight;
  const navSideBar = document.querySelector('.nav-side-bar');
  const overlaySideBar = document.querySelector('.overlay');

  // Lógica de rolagem para o header
  window.addEventListener('scroll', function () {
    if (window.scrollY > headerHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle para a barra lateral (nav-side-bar)
  document.querySelector('.menu-button').addEventListener('click', function () {
    navSideBar.classList.toggle('show');
    overlaySideBar.classList.toggle('active');
  });

  // Fechar a barra lateral (nav-side-bar)
  document.querySelector('.img-close-nav').addEventListener('click', function () {
    navSideBar.classList.remove('show');
    overlaySideBar.classList.toggle('active');
  });
});

function scrollToPromotion() {
  const promotionTitle = document.querySelector('.promotion-title');

  if (promotionTitle) {
    const yOffset = -90;
    const y = promotionTitle.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
//  Função para rolar para o conteúdo da página