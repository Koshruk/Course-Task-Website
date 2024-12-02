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

/***/ "./src/js/generate-data.js":
/*!*********************************!*\
  !*** ./src/js/generate-data.js ***!
  \*********************************/
/***/ (function() {

eval("\n\nconst offerList = document.querySelector('.slider-offers__wrapper');\nconst allButton = document.querySelector('#all-button');\nconst sellButton = document.querySelector('#sell-button');\nconst rentButton = document.querySelector('#rent-button');\n\nconst badgeIcons = {\n  popular: 'fire-icon',\n  new: 'fill-home-icon',\n  discount: 'dollar-icon',\n};\n\nconst badgeTexts = {\n  popular: 'Popular',\n  new: 'New Listing',\n  discount: 'Discounted Price',\n};\n\nconst createOfferHTML = (offer) => {\n  const badgeIcon = badgeIcons[offer.type];\n  const badgeText = badgeTexts[offer.type];\n\n  return `\n    <figure class=\"swiper-slide figure-offer slider-offers__figure-offer\">\n      <div class=\"figure-offer__image-container\">\n        <img class=\"figure-offer__image\" src=\"${offer.image}\" alt=\"${offer.alt}\" />\n        <div class=\"figure-offer__badge figure-offer__badge--${offer.type}\">\n          <svg class=\"figure-offer__badge-svg\">\n            <use href=\"./images/svg/icons.svg#${badgeIcon}\"></use>\n          </svg>\n          <p class=\"figure-offer__badge-text\">${badgeText}</p>\n        </div>\n      </div>\n      <figcaption class=\"figure-offer__figcaption\">\n        <p class=\"figure-offer__cost\">$${offer.cost}</p>\n        <h4 class=\"figure-offer__title\">${offer.title}</h4>\n        <p class=\"regular-text figure-offer__regular-text\">${offer.address}</p>\n        <div class=\"figure-offer__rooms\">\n          <p class=\"figure-offer__rooms-text\">\n            <svg class=\"figure-offer__svg figure-offer__svg--wide\">\n              <use href=\"./images/svg/icons.svg#bed-icon\"></use>\n            </svg>\n            ${offer.beds} Bedrooms\n          </p>\n          <p class=\"figure-offer__rooms-text\">\n            <svg class=\"figure-offer__svg figure-offer__svg--thin\">\n              <use href=\"./images/svg/icons.svg#bathroom-icon\"></use>\n            </svg>\n            ${offer.bath} Baths\n          </p>\n        </div>\n      </figcaption>\n    </figure>`;\n};\n\nconst displayOffers = (data, filter) => {\n  const filteredOffers = filter === 'all' ? data : data.filter((offer) => offer.deal === filter);\n\n  const sliceLimit = window.innerWidth >= 768 ? 10 : 4;\n  console.log(sliceLimit);\n  const offersToDisplay = filteredOffers.slice(0, sliceLimit);\n\n  offerList.innerHTML = offersToDisplay.map(createOfferHTML).join('');\n\n  if (window.innerWidth >= 768) {\n      enableOffersSwiper();\n  }\n};\n\nfetch('./data/offers.json')\n  .then((response) => {\n    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);\n    return response.json();\n  })\n  .then((data) => {\n    if (Array.isArray(data) && data.length > 0) {\n      let currentFilter = 'all';\n\n      const updateOffersOnResize = () => displayOffers(data, currentFilter);\n\n      displayOffers(data, currentFilter);\n\n      allButton.addEventListener('click', () => {\n        currentFilter = 'all';\n        displayOffers(data, currentFilter);\n      });\n      sellButton.addEventListener('click', () => {\n        currentFilter = 'sell';\n        displayOffers(data, currentFilter);\n      });\n      rentButton.addEventListener('click', () => {\n        currentFilter = 'rent';\n        displayOffers(data, currentFilter);\n      });\n\n      const mediaQuery = window.matchMedia('(min-width: 768px)');\n\n      mediaQuery.addEventListener('change', updateOffersOnResize);\n    } else {\n      console.warn('No offers found in the JSON data.');\n      offerList.innerHTML = `<p class=\"error-message\">No offers available at the moment.</p>`;\n    }\n  })\n  .catch((error) => {\n    console.error('Error fetching offers:', error);\n    offerList.innerHTML = `<p class=\"error-message\">Failed to load offers. Please try again later.</p>`;\n  });\n\n\n\n//# sourceURL=webpack:///./src/js/generate-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/generate-data.js"]();
/******/ 	
/******/ })()
;