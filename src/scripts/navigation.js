import {clearActiveElements} from "./utils";

const navigationLinkElements = [...document.querySelectorAll('.nav-link')];
const navigationElement = document.querySelector('.site-navigation ul')
const scrollToTopElement = document.querySelector('.scroll-to-top');
const mobileNavigationIcon = document.querySelector('.mobile-navigation-icon');
const sidebarNivagationElement = document.querySelector('.sidebar');
const currentHashLocation = window.location.hash.split('#')[1];

const navigation = (() => {
  if (mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click', () => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open');
    document.querySelector('.content').classList.toggle('blured');
    document.querySelector('body').classList.toggle('stop-scrolling');
  })
}

navigationElement.addEventListener('click', (e) => {
  if(e.target.tagName === 'A') {
    clearActiveElements(navigationLinkElements);
    e.target.classList.add('active');
  }

  if (mobileNavigationIcon) {
    sidebarNivagationElement.classList.remove('to-left');
    mobileNavigationIcon.classList.remove('open');
    document.querySelector('.content').classList.remove('blured');
    document.querySelector('body').classList.remove('stop-scrolling');
  }
})

if (currentHashLocation) {
  const currentSection = document.querySelector(`.${currentHashLocation}`);
  currentSection.scrollIntoView();

  const isSectionSelected = navigationLinkElements
    .find(link => link.textContent === currentHashLocation);

  if (isSectionSelected) {
    isSectionSelected.classList.add('active');
  }
}

if (window.screen.width <= 768) {
  window.addEventListener('scroll', (e) => {
    const currentScrollY = window.scrollY;
    if (currentScrollY >= 250) {
      scrollToTopElement.classList.add('show');
    } else {
      scrollToTopElement.classList.remove('show');
    }
  })
}

if (scrollToTopElement) {
  scrollToTopElement.addEventListener('click', () => {
    const heroSection = document.querySelector('.hero')
    heroSection.scrollIntoView();
    window.location.hash = `#${heroSection.id}`;
  })
}
})

export default navigation;