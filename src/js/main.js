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

  const modicator = window.innerWidth > 760 ? 300 : 600

  const visibleBottomPosition = window.scrollY + window.innerHeight

  const heroSectionBottom = heroSection.getBoundingClientRect().bottom + window.scrollY;
  const heroSectionTop = heroSection.getBoundingClientRect().top + window.scrollY;
  const svgTopPosition = svg.getBoundingClientRect().top + window.scrollY;



  if (visibleBottomPosition > svgTopPosition && visibleBottomPosition < heroSectionBottom + modicator) {
    svg.style.strokeDashoffset = 6488 + 2600 * (1 - (visibleBottomPosition - heroSectionTop) / (heroSectionBottom - heroSectionTop));
  } else if (visibleBottomPosition < heroSectionTop) {
    svg_camps.style.strokeDashoffset = 6488;
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

const lang = document.querySelector('.nav__wrapper')

lang.addEventListener('click', (e) => {
  if (window.innerWidth < 760 && lang.querySelector('.nav__switcher').style.display === 'block') {
    lang.querySelector('.nav__switcher').style.display = 'none';
  } else if (window.innerWidth < 760 && lang.querySelector('.nav__switcher').style.display != 'block') {
    lang.querySelector('.nav__switcher').style.display = 'block';
  }
});

const menuLinks = document.querySelectorAll('.nav__item')

menuLinks.forEach(link => link.addEventListener('click', (e) => {
  if (window.innerWidth < 760) {
    document.querySelector('.toggle-menu__input').checked = false;
  }
}))

const lang_selector = document.querySelector('.nav__link--visible')
const lang_switcher = document.querySelector('.nav__switcher')
const toggle_menu = document.querySelector('.toggle-menu')

lang_selector.addEventListener('click', (e) => {
  lang_switcher.classList.toggle('nav__none');
})
lang_switcher.addEventListener('click', (e) => {
  lang_switcher.classList.toggle('nav__none');
})
toggle_menu.addEventListener('click', (e) => {
  lang_switcher.classList.toggle('nav__none');
})


