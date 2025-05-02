const left = document.querySelector(".left");

const right = document.querySelector(".right");

const slider = document.querySelector(".slider");

const text = document.querySelectorAll(".slide");

let slideNumber = 1;

const length = text.length;


const nextSlide = () => {
    slider.style.transform = `translatex(-${slideNumber * 800}px)`;
    slideNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translatex(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translatex(0px)`;
    slideNumber = 1;
};
const getLasttSlide = () => {
    slider.style.transform = `translatex(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeClr()
});

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeClr()
});
