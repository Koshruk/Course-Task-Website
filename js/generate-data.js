

const offerList = document.querySelector('.slider-offers__wrapper');
const allButton = document.querySelector('#all-button');
const sellButton = document.querySelector('#sell-button');
const rentButton = document.querySelector('#rent-button');

const badgeIcons = {
  popular: 'fire-icon',
  new: 'fill-home-icon',
  discount: 'dollar-icon',
};

const badgeTexts = {
  popular: 'Popular',
  new: 'New Listing',
  discount: 'Discounted Price',
};

const createOfferHTML = (offer) => {
  const badgeIcon = badgeIcons[offer.type];
  const badgeText = badgeTexts[offer.type];

  return `
    <figure class="swiper-slide figure-offer slider-offers__figure-offer">
      <div class="figure-offer__image-container">
        <img class="figure-offer__image" src="${offer.image}" alt="${offer.alt}" />
        <div class="figure-offer__badge figure-offer__badge--${offer.type}">
          <svg class="figure-offer__badge-svg">
            <use href="./images/svg/icons.svg#${badgeIcon}"></use>
          </svg>
          <p class="figure-offer__badge-text">${badgeText}</p>
        </div>
      </div>
      <figcaption class="figure-offer__figcaption">
        <p class="figure-offer__cost">$${offer.cost}</p>
        <h4 class="figure-offer__title">${offer.title}</h4>
        <p class="regular-text figure-offer__regular-text">${offer.address}</p>
        <div class="figure-offer__rooms">
          <p class="figure-offer__rooms-text">
            <svg class="figure-offer__svg figure-offer__svg--wide">
              <use href="./images/svg/icons.svg#bed-icon"></use>
            </svg>
            ${offer.beds} Bedrooms
          </p>
          <p class="figure-offer__rooms-text">
            <svg class="figure-offer__svg figure-offer__svg--thin">
              <use href="./images/svg/icons.svg#bathroom-icon"></use>
            </svg>
            ${offer.bath} Baths
          </p>
        </div>
      </figcaption>
    </figure>`;
};

fetch('./data/offers.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (Array.isArray(data) && data.length > 0) {
      const offersHTML = data.map(createOfferHTML).join('');
      offerList.innerHTML = offersHTML;

      const displayOffers = (filter) => {
        const filteredOffers = filter === 'all' ? data : data.filter((offer) => offer.deal === filter);

        if (swiperOffers) {
          swiperOffers.destroy(true, true);
          swiperOffers = undefined;
          console.log('Deleted Swiper instance');
        }

        offerList.innerHTML = filteredOffers.map(createOfferHTML).join('');
        console.log('html in the offer swiper was generated');

        if(window.innerWidth >= 768){
          enableOffersSwiper();
        }
      };

      displayOffers('all');

      allButton.addEventListener('click', () => displayOffers('all'));
      sellButton.addEventListener('click', () => displayOffers('sell'));
      rentButton.addEventListener('click', () => displayOffers('rent'));

      /*const offersToDisplay = data.slice(0, 4); 
      const offersHTML = offersToDisplay.map(createOfferHTML).join('');
      offerList.innerHTML = offersHTML;

      const mediaQuery = window.matchMedia('(min-width: 768px)');
      const updateOfferList = (e) => {
        offerList.innerHTML = e.matches
          ? data.map(createOfferHTML).join('')
          : offersHTML;
      };
      
      updateOfferList(mediaQuery);
      mediaQuery.addEventListener('change', updateOfferList);
*/
      
    } else {
      console.warn('No offers found in the JSON data.');
      offerList.innerHTML = `<p class="error-message">No offers available at the moment.</p>`;
    }
  })
  .catch((error) => {
    console.error('Error fetching offers:', error);
    offerList.innerHTML = `<p class="error-message">Failed to load offers. Please try again later.</p>`;
  });

