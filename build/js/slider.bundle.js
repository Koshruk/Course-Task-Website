/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enableOffersSwiper: function() { return /* binding */ enableOffersSwiper; }\n/* harmony export */ });\n\nconst swiperHero = new Swiper('.swiperHero',{\n    direction: 'horizontal',\n    loop: true,\n    allowTouchMove: false,\n    navigation:{\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'  \n    },\n    pagination:{\n        el: '.swiper-pagination-hero',\n        bulletClass: 'slider-hero__pagination-bullet',\n        bulletActiveClass: 'slider-hero__pagination-bullet--active',\n    },\n});\n\nlet swiperClients;\nfunction enableClientsSwiper(){\n    if (swiperClients) return;\n    console.log(\"created_client\");\n    swiperClients = new Swiper('.swiperClients',{\n        freeMode: true,\n        spaceBetween: 0,\n        slidesPerView: 2,\n        allowTouchMove: true,\n        loop: true,\n        autoplay: {\n            delay: 0,\n        },\n        speed: 5000,\n        freeModeMomentum: false,\n        freeModeSticky: false,\n    });\n};\n\nlet swiperOffers;\nfunction enableOffersSwiper(){\n    if (swiperOffers) return;\n    console.log(\"created_offer\");\n    swiperOffers = new Swiper('.swiperOffers',{\n        freeMode: true,\n        slidesPerView: 3,\n        spaceBetween: 10,\n    });\n};\n\nwindow.enableOffersSwiper = enableOffersSwiper;\n\n\nlet swiperBlogs;\nfunction enableBlogsSwiper(){\n    if (swiperBlogs) return;\n    swiperBlogs = new Swiper('.swiperBlogs',{\n        direction: 'horizontal',\n        slidesPerGroup: 3,\n        slidesPerView: 3,\n        spaceBetween: 50,\n        allowTouchMove: true,\n        pagination:{\n            el: '.swiper-pagination-blogs',\n            bulletClass: 'slider-blogs__pagination-bullet',\n            bulletActiveClass: 'slider-blogs__pagination-bullet--active',\n            clickable: true,\n        },\n    });\n}\n\nlet swiperReviews;\nfunction enableReviewsSwiper(direction){\n\n    swiperReviews = new Swiper('.swiperReviews',{\n        slidesPerView: 1,\n        spaceBetween: 50,\n        direction: direction,\n        allowTouchMove: true,\n        navigation:{\n            nextEl: '.swiper-button-next-reviews',\n            prevEl: '.swiper-button-prev-reviews'  \n        },\n        pagination:{\n            el: '.swiper-pagination-reviews',\n            bulletClass: 'slider-reviews__pagination-bullet',\n            bulletActiveClass: 'slider-reviews__pagination-bullet--active',\n        },\n\n        breakpoints:{\n            768:{\n                allowTouchMove: false,\n            }\n        }\n});\n}\nfunction breakpointChecker(){\n    if(window.innerWidth < 768){\n        if (swiperOffers !== undefined){\n            swiperOffers.destroy(true, true);\n       }\n       swiperOffers = undefined;\n    } \n    else{\n        enableOffersSwiper();\n    }   \n\n    if(window.innerWidth >= 768){\n        if (swiperClients !== undefined){\n             swiperClients.destroy(true, true);\n        }\n        swiperClients = undefined;\n    }\n    else{\n        enableClientsSwiper();\n    }\n\n    if(window.innerWidth < 768){\n        if (swiperBlogs !== undefined){\n             swiperBlogs.destroy(true, true);\n        }\n        swiperBlogs = undefined;\n    }\n    else{\n        enableBlogsSwiper();\n    }\n\n    if(window.innerWidth < 768){\n        if (swiperReviews !== undefined){\n             swiperReviews.destroy(true, true);\n        }\n        enableReviewsSwiper('horizontal');\n    }\n    else{\n        if (swiperReviews !== undefined){\n            swiperReviews.destroy(true, true);\n       }\n        enableReviewsSwiper('vertical');\n    }\n}\n\nwindow.addEventListener('load', breakpointChecker);\nwindow.addEventListener('resize', breakpointChecker);\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/slider.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;