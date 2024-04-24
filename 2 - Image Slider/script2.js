const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

const slideWidth = slides [0].clientWidth;
let index = 0;

nextBtn.addEventListener("click", () => {
  index++;
  slidesContainer.style.transform = `translateX(${-slideWidth*index}px)`;
})

prevBtn.addEventListener("click", () => {
  index--;
  slidesContainer.style.transform = `translateX(${-slideWidth*index}px)`;
})