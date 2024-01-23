// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import '../scss/blocks/_swiper-train.scss';


const swiper = new Swiper(".swiper-train", {
  pagination: {
    el: ".swiper-train__pagination",
  },
});
