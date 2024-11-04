/*import Swiper from 'swiper';
import 'swiper/css';
const swiper = new Swiper;
*/
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