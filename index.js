const bgWrap = document.querySelector(".bgWrap");
const fullscreenBg = document.querySelector(".fullscreen_bg");
const bladeTabs = document.querySelectorAll(".socialTab");
const bladeContent = document.querySelectorAll(".socialContent");

const friendsTab = document.querySelector("#friendsTab");
const friendsContent = document.querySelector("#friendsContent");

const socialBlade = document.querySelector(".socialBlade");

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

function handleBackground() {
  const tallerThan1080 = window.innerHeight > 1080;
  const widerThan1920 = window.innerWidth > 1920;

  const bigBg = `<img class="fullscreen_bg" src="assests/replacement_bg.jpg">`;
  const defaultBg = `<img src="assests/pano_still.png" class="fullscreen_bg">`;

  if (tallerThan1080 || widerThan1920) {
    fullscreenBg.remove();
    bgWrap.innerHTML = bigBg;
  } else {
    bgWrap.innerHTML = defaultBg;
  }
}

function handleBlade() {
  removeClass(bladeTabs, "activeTab");
  removeClass(bladeContent, "active");

  friendsTab.classList.add("activeTab");
  friendsContent.classList.add("active");
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

handleBackground();
window.addEventListener("resize", handleBackground);
socialBlade.addEventListener("mouseleave", handleBlade);
infoTabsUl.addEventListener("click", handleTabSwitching);
socialTabsUl.addEventListener("click", handleTabSwitching);
leftArrow.addEventListener("click", handleCarouselLeftClick);
rightArrow.addEventListener("click", handleCarouselRightClick);
