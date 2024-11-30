
const swiperHero = new Swiper('.swiperHero',{
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'  
    },
    pagination:{
        el: '.swiper-pagination-hero',
        bulletClass: 'slider-hero__pagination-bullet',
        bulletActiveClass: 'slider-hero__pagination-bullet--active',
    },
});

let swiperClients;
function enableClientsSwiper(){
    if (swiperClients) return;
    console.log("created_client");
    swiperClients = new Swiper('.swiperClients',{
        freeMode: true,
        spaceBetween: 0,
        slidesPerView: 2,
        allowTouchMove: true,
        loop: true,
        autoplay: {
            delay: 0,
        },
        speed: 5000,
        freeModeMomentum: false,
        freeModeSticky: false,
    });
};

let swiperOffers;
function enableOffersSwiper(){
    if (swiperOffers) return;
    console.log("created_offer");
    swiperOffers = new Swiper('.swiperOffers',{
        freeMode: true,
        slidesPerView: 3,
        spaceBetween: 10,
    });
};


let swiperBlogs;
function enableBlogsSwiper(){
    if (swiperBlogs) return;
    swiperBlogs = new Swiper('.swiperBlogs',{
        direction: 'horizontal',
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50,
        allowTouchMove: true,
        pagination:{
            el: '.swiper-pagination-blogs',
            bulletClass: 'slider-blogs__pagination-bullet',
            bulletActiveClass: 'slider-blogs__pagination-bullet--active',
            clickable: true,
        },
    });
}

const swiperReviews = new Swiper('.swiperReviews',{
    slidesPerView: 1,
    spaceBetween: 50,
    direction: 'vertical',
    allowTouchMove: false,
    navigation:{
        nextEl: '.swiper-button-next-reviews',
        prevEl: '.swiper-button-prev-reviews'  
      },
    pagination:{
        el: '.swiper-pagination-reviews',
        bulletClass: 'slider-reviews__pagination-bullet',
        bulletActiveClass: 'slider-reviews__pagination-bullet--active',
    },
});

function breakpointChecker(){
    if(window.innerWidth < 768){
        if (swiperOffers !== undefined){
            swiperOffers.destroy(true, true);
       }
       swiperOffers = undefined;
    } 
    else{
        enableOffersSwiper();
    }   

    if(window.innerWidth >= 768){
        if (swiperClients !== undefined){
             swiperClients.destroy(true, true);
        }
        swiperClients = undefined;
    }
    else{
        enableClientsSwiper();
    }

    if(window.innerWidth < 768){
        if (swiperBlogs !== undefined){
             swiperBlogs.destroy(true, true);
        }
        swiperBlogs = undefined;
    }
    else{
        enableBlogsSwiper();
    }
}

window.addEventListener('load', breakpointChecker);
window.addEventListener('resize', breakpointChecker);