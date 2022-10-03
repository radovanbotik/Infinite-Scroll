const slider = document.querySelector(".slider");
const innerblock = document.querySelector(".innerblock");
const items = [...document.querySelectorAll(".item")];

const innerblockWidth = innerblock.getBoundingClientRect().width;
const sliderWidth = slider.getBoundingClientRect().width;
let scrollingArea = innerblockWidth - sliderWidth;

const clones = [];

const getArea = () => {
  scrollingArea =
    innerblock.getBoundingClientRect().width -
    slider.getBoundingClientRect().width;
  return scrollingArea;
};

const addClones = () => {
  items.forEach((item, index) => {
    const clone = item.cloneNode(true);
    clones.push(clone);
    innerblock.appendChild(clone);
  });
  getArea();
};

slider.addEventListener("scroll", e => {
  //   console.log(e.target.scrollLeft);
  if (e.target.scrollLeft >= scrollingArea) {
    addClones();
  }
  console.log(clones);
});
