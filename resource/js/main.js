'use strict';

const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".sliderItem:first-child");
function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove("showing");
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add("showing");
        } else {
            firstSlide.classList.add("showing");
        }
    } else {
        firstSlide.classList.add("showing");
    }
}
slide();
setInterval(slide, 3000);
