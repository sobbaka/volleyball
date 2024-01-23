import "the-new-css-reset/css/reset.css";
import '../scss/main.scss';
import './trainSwiper.js';




const leftElements = document.querySelectorAll('.hero__scale-left')
const rightElements = document.querySelectorAll('.hero__scale-right')


const heroContent = document.querySelector('.hero__content');
const styles = window.getComputedStyle(heroContent);
const paddingBottom = parseFloat(styles.getPropertyValue('padding-bottom'));
const heroContentHeight = heroContent.getBoundingClientRect().height;

const applyScale = (elements, scale, origin) => {
  elements.forEach(element => {
    element.style.transform = `scale(${scale})`;
    element.style.transformOrigin = origin;
  });
};

const handleResize = () => {
  const screenWidth = window.innerWidth;
  const scale = screenWidth <= 1320 ? screenWidth / 1320 : 1;
  const padding = screenWidth <= 1320 ? scale * 0.5 : 1;
  applyScale(leftElements, scale, 'left top');
  applyScale(rightElements, scale, 'right top');
  heroContent.style.paddingBottom = `${paddingBottom * padding}px`;
  heroContent.style.height = `${heroContentHeight * scale}px`;
};

window.addEventListener('resize', handleResize);
// Initial call to apply the scaling when the script loads
handleResize();
