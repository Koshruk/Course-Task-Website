

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

const displayOffers = (data, filter) => {
  const filteredOffers = filter === 'all' ? data : data.filter((offer) => offer.deal === filter);

  const sliceLimit = window.innerWidth >= 768 ? 10 : 4;
  console.log(sliceLimit);
  const offersToDisplay = filteredOffers.slice(0, sliceLimit);

  offerList.innerHTML = offersToDisplay.map(createOfferHTML).join('');

  if (window.innerWidth >= 768) {
      enableOffersSwiper();
  }
};

fetch('./data/offers.json')
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    if (Array.isArray(data) && data.length > 0) {
      let currentFilter = 'all';

      const updateOffersOnResize = () => displayOffers(data, currentFilter);

      displayOffers(data, currentFilter);

      allButton.addEventListener('click', () => {
        currentFilter = 'all';
        displayOffers(data, currentFilter);
      });
      sellButton.addEventListener('click', () => {
        currentFilter = 'sell';
        displayOffers(data, currentFilter);
      });
      rentButton.addEventListener('click', () => {
        currentFilter = 'rent';
        displayOffers(data, currentFilter);
      });

      window.addEventListener('resize', updateOffersOnResize);
    } else {
      console.warn('No offers found in the JSON data.');
      offerList.innerHTML = `<p class="error-message">No offers available at the moment.</p>`;
    }
  })
  .catch((error) => {
    console.error('Error fetching offers:', error);
    offerList.innerHTML = `<p class="error-message">Failed to load offers. Please try again later.</p>`;
  });

