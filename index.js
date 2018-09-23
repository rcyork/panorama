const carouselNodeList = document.querySelectorAll(".js-carouselBackground");
const leftArrow = document.querySelector(".carousel__arrow--left");
const rightArrow = document.querySelector(".carousel__arrow--right");
let activeCarouselIndex = 0;

function handleCarouselLeftClick() {
  activeCarouselIndex -= 1;

  if (activeCarouselIndex < 0) {
    activeCarouselIndex = carouselNodeList.length - 1;
  }

  showActiveCarouselItem();
}

function handleCarouselRightClick() {
  activeCarouselIndex += 1;

  if (activeCarouselIndex > carouselNodeList.length - 1) {
    activeCarouselIndex = 0;
  }

  showActiveCarouselItem();
}

function showActiveCarouselItem() {
  carouselNodeList.forEach((item, index) => {
    item.classList.remove("active");

    if (index === activeCarouselIndex) {
      item.classList.add("active");
    }
  });
}

leftArrow.addEventListener("click", handleCarouselLeftClick);
rightArrow.addEventListener("click", handleCarouselRightClick);
