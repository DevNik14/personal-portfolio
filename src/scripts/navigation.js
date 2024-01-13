import domElements from "./domElements";
import {clearActiveElements} from "./utils";

const navigation = (() => {
  if (domElements.mobileNavigationIcon) {
  domElements.mobileNavigationIcon.addEventListener('click', () => {
    domElements.sidebarNivagationElement.classList.toggle('to-left');
    domElements.mobileNavigationIcon.classList.toggle('open');
  })
}

domElements.navigationElement.addEventListener('click', (e) => {
  if(e.target.tagName === 'A') {
    clearActiveElements(domElements.navigationLinkElements);
    e.target.classList.add('active');
  }

  if (domElements.mobileNavigationIcon) {
    domElements.sidebarNivagationElement.classList.remove('to-left');
    domElements.mobileNavigationIcon.classList.remove('open');
  }
})

if (domElements.currentHashLocation) {
  const currentSection = document.querySelector(`.${domElements.currentHashLocation}`);
  currentSection.scrollIntoView();

  const isSectionSelected = domElements.navigationLinkElements
    .find(link => link.textContent === domElements.currentHashLocation);

  if (isSectionSelected) {
    isSectionSelected.classList.add('active');
  }
}

if (window.screen.width <= 768) {
  window.addEventListener('scroll', (e) => {
    const currentScrollY = window.scrollY;
    if (currentScrollY >= 250) {
      domElements.scrollToTopElement.classList.add('show');
    } else {
      domElements.scrollToTopElement.classList.remove('show');
    }
  })
}

if (domElements.scrollToTopElement) {
  domElements.scrollToTopElement.addEventListener('click', () => {
    const heroSection = document.querySelector('.hero')
    heroSection.scrollIntoView();
    window.location.hash = `#${heroSection.id}`;
  })
}
})

export default navigation;