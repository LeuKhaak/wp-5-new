// @ts-nocheck
import "./styles/style.scss";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "lightblue",
  "blue",
  "purple",
	"white"
];

const slideWrapper = document.createElement("div");
slideWrapper.classList.add("slider-wrapper");

const sliderList = document.createElement("ul");
sliderList.classList.add("slider-list");
sliderList.setAttribute("style", `left: 0.5rem;`);

colors.forEach((item) => {
  console.log(item);
  const color = item;
  item = document.createElement("li");
  item.classList.add("slider-Item");
  item.setAttribute("style", `background-color: ${color};`);
  sliderList.append(item);
});

const sliderItem2 = document.createElement("li");
sliderItem2.classList.add("slider-Item");

const slideButtonWrapper = document.createElement("div");
slideButtonWrapper.classList.add("slider-button-wrapper");

const slideButtonPrev = document.createElement("button");
slideButtonPrev.innerHTML = 'Previous slide';
slideButtonPrev.classList.add("slider-button");

const slideButtonNext = document.createElement("button");
slideButtonNext.innerHTML = 'Next slide';
slideButtonNext.classList.add("slider-button");
slideButtonWrapper.append(slideButtonPrev, slideButtonNext);

let shift = -0.5;

slideButtonNext.addEventListener('click', function() {
	if (shift < 150) {
		shift += 25.5;	
		sliderList.setAttribute("style", `left: -${shift}rem;`);
	}
})

slideButtonPrev.addEventListener('click', function() {
	if (shift > 0) {
		shift -= 25.5;	
		sliderList.setAttribute("style", `left: -${shift}rem;`);
	}
})



const root = document.querySelector("#root");
root.append(slideWrapper);
slideWrapper.append(sliderList, slideButtonWrapper);
