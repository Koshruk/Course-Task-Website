const offerList = document.querySelector('.slider-offers__wrapper');
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

fetch('./data/offers.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(offer => {
            
            const badgeIcon = badgeIcons[offer.type];
            const badgeText = badgeTexts[offer.type];
            offerList.insertAdjacentHTML(
                'beforeend',

                `<figure
                class="swiper-slide figure-offer slider-offers__figure-offer">
                <div class="figure-offer__image-container">
                  <img
                    class="figure-offer__image"
                    src="${offer.image}"
                    alt="${offer.alt}"
                  />
                  <div class="figure-offer__badge figure-offer__badge--${offer.type}">
                    <svg class="figure-offer__badge-svg">
                      <use href="./images/svg/icons.svg#${badgeIcon}"></use>
                    </svg>
                    <p class="figure-offer__badge-text">${badgeText}</p>
                  </div>
                </div>
                <figcaption class="figure-offer__figcaption">
                  <p class="figure-offer__cost">$ ${offer.cost}</p>
                  <h4 class="figure-offer__title">
                    ${offer.title}
                  </h4>
                  <p class="regular-text figure-offer__regular-text">
                    ${offer.address}
                  </p>
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
              </figure>`
            )
        });
    });