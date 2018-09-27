const infoTabsUl = document.querySelector(".infoTabs");
const socialTabsUl = document.querySelector(".socialTabs");

const infoTabArray = Array.from(document.querySelectorAll(".infoTab"));
const socialTabArray = Array.from(document.querySelectorAll(".socialTab"));

const infoContentArray = Array.from(document.querySelectorAll(".infoContent"));
const socialContentArray = Array.from(
  document.querySelectorAll(".socialContent")
);
const carouselArray = Array.from(
  document.querySelectorAll(".js-carouselBackground")
);
const leftArrow = document.querySelector(".carousel__arrow--left");
const rightArrow = document.querySelector(".carousel__arrow--right");
let activeCarouselIndex = 0;

function removeClass(list, option) {
  list.forEach(item => {
    item.classList.remove(option);
  });
}

function handleTabSwitching(event) {
  if (event.target.classList.contains("tab")) {
    if (event.target.classList.contains("infoTab")) {
      removeClass(infoTabArray, "activeTab");
      removeClass(infoContentArray, "active");
      infoContentArray.some(item => {
        const idMatches = event.target.dataset.id === item.dataset.id;
        if (idMatches) {
          item.classList.add("active");
        }
      });
    } else if (event.target.classList.contains("socialTab")) {
      removeClass(socialTabArray, "activeTab");
      removeClass(socialContentArray, "active");
      socialContentArray.some(item => {
        const idMatches = event.target.dataset.id === item.dataset.id;
        if (idMatches) {
          item.classList.add("active");
        }
      });
    }

    event.target.classList.add("activeTab");
  }
}

function handleCarouselLeftClick() {
  carouselArray.forEach(item => {
    item.classList.remove("activeImg");
  });

  activeCarouselIndex -= 1;

  if (activeCarouselIndex < 0) {
    activeCarouselIndex = carouselArray.length - 1;
  }

  showActiveCarouselItem();
}

function handleCarouselRightClick() {
  carouselArray.forEach(item => {
    item.classList.remove("activeImg");
  });

  activeCarouselIndex += 1;

  if (activeCarouselIndex > carouselArray.length - 1) {
    activeCarouselIndex = 0;
  }

  showActiveCarouselItem();
}

function showActiveCarouselItem() {
  carouselArray.some((item, index) => {
    if (index === activeCarouselIndex) {
      item.classList.add("activeImg");
    }
  });
}

infoTabsUl.addEventListener("click", handleTabSwitching);
socialTabsUl.addEventListener("click", handleTabSwitching);
leftArrow.addEventListener("click", handleCarouselLeftClick);
rightArrow.addEventListener("click", handleCarouselRightClick);
