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



function aTagChange(){
    if(navigator.userAgent.match(/inapp|KAKAOTALK|Instagram|kakaostory|band|twitter\/[^1]/i)){ 
        if(navigator.userAgent.match(/iPhone|iPad/i)){ 
            // ios
        }else { 
            // 안드로이드
            const aTags = document.getElementsByTagName("a");
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].href = 'intent://'+aTags[i].href.replace(/https?:\/\//i,'')+'#Intent;scheme=http;package=com.android.chrome;end';
            }
        }
    }
}
aTagChange();

document.getElementById("test").innerHTML = navigator.userAgent;


