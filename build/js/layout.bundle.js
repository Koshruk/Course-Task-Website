/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/change-layout.js":
/*!*********************************!*\
  !*** ./src/js/change-layout.js ***!
  \*********************************/
/***/ (function() {

eval("const announcement = document.querySelector('.announcement-section');\nconst hero = document.querySelector('.hero');\nconst clients = document.querySelector('.clients-section');\n\nfunction rearrangeSections(){\n    if (window.innerWidth >= 680){\n        hero.appendChild(announcement);\n    }\n    else{\n        clients.insertAdjacentElement('afterend', announcement);\n    }\n}\n\nconst pictures_info = document.querySelector('.info-section__picture-div');\nconst containers = document.querySelector('.info-section__container-div');\nconst info = document.querySelector('.info-section__flex-div');\nconst info_div = document.querySelector('.info-section__info-div');\n\nfunction rearrangeSectionsInfo() {\n    if (window.innerWidth >= 768) {\n        info.appendChild(pictures_info);\n    } else {\n        info_div.insertBefore(pictures_info, containers);\n    }\n}\n\nwindow.addEventListener('load', () =>{\n    rearrangeSections();\n    rearrangeSectionsInfo();\n});\nwindow.addEventListener('resize', () =>{\n    rearrangeSections();\n    rearrangeSectionsInfo();\n});\n\n//# sourceURL=webpack:///./src/js/change-layout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/change-layout.js"]();
/******/ 	
/******/ })()
;