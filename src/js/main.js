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


const svg = document.querySelector('.hero__path');
const heroSection = document.querySelector('.hero');

document.addEventListener('scroll', () => {

  const modicator = window.innerWidth > 760 ? 500 : 100

  const visibleBottomPosition = window.scrollY + window.innerHeight

  const heroSectionBottom = heroSection.getBoundingClientRect().bottom + window.scrollY;
  const heroSectionTop = heroSection.getBoundingClientRect().top + window.scrollY;
  const svgTopPosition = svg.getBoundingClientRect().top + window.scrollY;



  if (visibleBottomPosition > svgTopPosition) {
    svg.style.strokeDashoffset = 6488 + 1500 * ((heroSectionBottom - modicator - visibleBottomPosition) / (heroSectionBottom - modicator - heroSectionTop));
  } else {
    svg.style.strokeDashoffset = 0;
  }

});

const svg_camps = document.querySelector('.camps__path');
const message = document.querySelector('.camps__message');

document.addEventListener('scroll', () => {
  const visibleBottomPosition = window.scrollY + window.innerHeight
  const messagesTop = message.getBoundingClientRect().top + window.scrollY - 50;
  const messagesBottom = message.getBoundingClientRect().bottom + window.scrollY + 100;


  console.log((1 - ((visibleBottomPosition - messagesTop) / (messagesBottom - messagesTop))))
  console.log("visibleBottomPosition - messagesTop", visibleBottomPosition - messagesTop)
  console.log("visibleBottomPosition", visibleBottomPosition)
  console.log("messagesTop", messagesTop)

  if (visibleBottomPosition > messagesTop && visibleBottomPosition < messagesBottom) {
    svg_camps.style.strokeDashoffset = 1270 * (1 - ((visibleBottomPosition - messagesTop) / (messagesBottom - messagesTop)))
  } else if (visibleBottomPosition < messagesTop) {
    svg_camps.style.strokeDashoffset = 1270;
  } else {
    svg_camps.style.strokeDashoffset = 0;
  }
});

