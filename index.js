const slider = document.querySelector(".slider");
const innerblock = document.querySelector(".innerblock");
const items = [...document.querySelectorAll(".item")];

// const innerblockWidth = innerblock.getBoundingClientRect().width;
// const sliderWidth = slider.getBoundingClientRect().width;
// let scrollingArea = innerblockWidth - sliderWidth;
let scrollingArea;

let clones = [];

//
// 1.Calculating scrollable
// 2.Total width of slider(visible) - Total width of innerblock(hidden due to overflow)
const getArea = () => {
  scrollingArea =
    innerblock.getBoundingClientRect().width -
    slider.getBoundingClientRect().width;
  return scrollingArea;
};

//
// 1.Creating a deep clone for each item
// 2.Pushing clone into new array
// 3.Appending clone to my innerblock element
// 4.Recalculating scrollable area after clones are injected
const addClones = () => {
  items.forEach((item, index) => {
    const clone = item.cloneNode(true);
    clones.push(clone);
    innerblock.appendChild(clone);
  });
  getArea();
};

//
//1.listening to scroll
//2.if inners block is moved equally or more than the scrollable area
//  we run the function
slider.addEventListener("scroll", e => {
  if (e.target.scrollLeft >= getArea()) {
    addClones();
    // clones = clones.slice(0, items.length);
    // innerblock.innerHTML = "";
    // clones.forEach(clone => {
    //   innerblock.appendChild(clone);
    // });
  }
});
