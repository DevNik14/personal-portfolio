import {clearActiveElements, getParentSectionId} from './utils.js';

const navigationLinkElements = [...document.querySelectorAll('.nav-link')];

const intersections = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        const sectionId = entry.target.id || getParentSectionId(entry.target);
        if (sectionId && sectionId !== 'hero') {
          clearActiveElements(navigationLinkElements);
          navigationLinkElements.find(link => link.textContent === sectionId).classList.add('active');
        } else if (sectionId === 'hero') {
          clearActiveElements(navigationLinkElements);
        }
      }
    })
  }, { threshold: 0.5 })
  
  return observer;
}

export default intersections;