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
function enableSwiper(){
    if (swiperClients) return;
    console.log("created");
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


const swiperOffers = new Swiper('.swiperOffers',{
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 30,
});

const swiperBlogs = new Swiper('.swiperBlogs',{
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 50,
    allowTouchMove: true,
    pagination:{
        el: '.swiper-pagination-blogs',
        bulletClass: 'slider-blogs__pagination-bullet',
        bulletActiveClass: 'slider-blogs__pagination-bullet--active',
        clickable: true,
    },
});

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
    if(window.innerWidth > 750){
        if (swiperClients !== undefined){
             swiperClients.destroy(true, true);
             console.log("deleted");
        }
        swiperClients = undefined;
        return;
    }
    else{
        enableSwiper();
    }
}

window.addEventListener('load', breakpointChecker);
window.addEventListener('resize', breakpointChecker);

/*
const slidesContainer = document.querySelector(".slider__images-container");
const slides = document.querySelectorAll(".slider__image");
const bars =document.querySelectorAll(".slider__bar");
let slideIndex = 0;
function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;
  
  slidesContainer.style.transform = `translateX(-${slideIndex * 540}px)`;
  updateProgressBar(slideIndex);
}

function updateProgressBar(index) {
    bars.forEach((bar, i) => {
        if (i === index) {
            bar.classList.add('slider__bar--active');
        } else {
            bar.classList.remove('slider__bar--active');
        }
    });
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function backSlide() {
  showSlide(slideIndex - 1);
}

/*const slides = document.querySelectorAll(".slider__image");

let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide(index){

    if(index >= slides.length){

        slideIndex = 0;

    }

    else if(index < 0){

        slideIndex = slides.length - 1;

    }



    slides.forEach(slide => {

        slide.classList.remove("displaySlide");

    });

    slides[slideIndex].classList.add("displaySlide");

}



function backSlide(){

    slideIndex--;

    showSlide(slideIndex);

}



function nextSlide(){

    slideIndex++;

    showSlide(slideIndex);

}*/