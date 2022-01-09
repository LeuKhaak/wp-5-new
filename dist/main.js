/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
// @ts-nocheck

var colors = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple", "white"];
var slideWrapper = document.createElement("div");
slideWrapper.classList.add("slider-wrapper");
var sliderList = document.createElement("ul");
sliderList.classList.add("slider-list");
sliderList.setAttribute("style", "left: 0.5rem;");
colors.forEach(function (item) {
  console.log(item);
  var color = item;
  item = document.createElement("li");
  item.classList.add("slider-Item");
  item.setAttribute("style", "background-color: ".concat(color, ";"));
  sliderList.append(item);
});
var sliderItem2 = document.createElement("li");
sliderItem2.classList.add("slider-Item");
var slideButtonWrapper = document.createElement("div");
slideButtonWrapper.classList.add("slider-button-wrapper");
var slideButtonPrev = document.createElement("button");
slideButtonPrev.innerHTML = 'Previous slide';
slideButtonPrev.classList.add("slider-button");
var slideButtonNext = document.createElement("button");
slideButtonNext.innerHTML = 'Next slide';
slideButtonNext.classList.add("slider-button");
slideButtonWrapper.append(slideButtonPrev, slideButtonNext);
var shift = -0.5;
slideButtonNext.addEventListener('click', function () {
  if (shift < 150) {
    shift += 25.5;
    sliderList.setAttribute("style", "left: -".concat(shift, "rem;"));
  }
});
slideButtonPrev.addEventListener('click', function () {
  if (shift > 0) {
    shift -= 25.5;
    sliderList.setAttribute("style", "left: -".concat(shift, "rem;"));
  }
});
var root = document.querySelector("#root");
root.append(slideWrapper);
slideWrapper.append(sliderList, slideButtonWrapper);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map