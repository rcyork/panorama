const infoTabTitlesUl = document.querySelector(".infoTabTitles");
const infoTabTitleArray = Array.from(infoTabTitlesUl.children);
const infoTabContentNodeList = document.querySelectorAll(".infoTabContent");
console.log(infoTabContentNodeList);
const carouselNodeList = document.querySelectorAll(".js-carouselBackground");
const leftArrow = document.querySelector(".carousel__arrow--left");
const rightArrow = document.querySelector(".carousel__arrow--right");
let activeCarouselIndex = 0;

function removeClass(list, option) {
  console.log(list);
  list.forEach(item => {
    item.classList.remove(option);
  });
}

function handleInfoTabSwitching(event) {
  if (event.target.classList.contains("infoTabTitle")) {
    removeClass(infoTabTitleArray, "activeTab");
    event.target.classList.add("activeTab");

    removeClass(infoTabContentNodeList, "active");

    infoTabContentNodeList.forEach(item => {
      const classesMatch = event.target.dataset.id === item.dataset.id;
      if (classesMatch) {
        item.classList.add("active");
      }
    });
  }
}

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
    item.classList.remove("activeImg");

    if (index === activeCarouselIndex) {
      item.classList.add("activeImg");
    }
  });
}

infoTabTitlesUl.addEventListener("click", handleInfoTabSwitching);
leftArrow.addEventListener("click", handleCarouselLeftClick);
rightArrow.addEventListener("click", handleCarouselRightClick);
