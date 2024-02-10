import { ScrollSnapSlider } from 'scroll-snap-slider'
import { ScrollSnapAutoplay } from 'scroll-snap-slider'
import { ScrollSnapLoop } from 'scroll-snap-slider'

import "the-new-css-reset/css/reset.css";
import '../scss/main.scss';
import './swiperControl.js';


document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll('.scroll-snap-slider')
  elements.forEach(element => {
    const slider = new ScrollSnapSlider({ element }).with([
      new ScrollSnapAutoplay(3500),
      new ScrollSnapLoop
    ])
  })

});


