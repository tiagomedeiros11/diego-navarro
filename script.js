$(document).ready(() => {
  const slickOptions = {
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev--arrow " >Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next--arrow " >Next</button>;',
  };
  $(".slider").slick(slickOptions);
});

const btnMenu = document.querySelector(".nav__btn");

function mostrarMenuMobile() {
  const navegacao = document.querySelector(".navegacao__links");
  navegacao.classList.toggle("active");
  const mudarSVG = document.querySelector(".fa-bars");
  mudarSVG.classList.toggle("fa-xmark");
}

btnMenu.addEventListener("click", mostrarMenuMobile);
