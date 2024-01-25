// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

document.addEventListener("DOMContentLoaded", function () {
  const trainSwiper = new Swiper(".swiper-train", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-train__pagination",
    },
  });

  const campsSwiper = new Swiper(".camps-swiper__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".camps-swiper__button-next",
      prevEl: ".camps-swiper__button-prev",
    },
    pagination: {
      el: ".camps-swiper__pagination",
      bulletClass: "swiper-pagination-bullet camps-swiper__pagination-bullet",
    },
  });
});



