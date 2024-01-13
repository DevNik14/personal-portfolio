import {clearActiveElements, getParentSectionId} from './utils.js';
import domElements from "./domElements";

const intersections = (() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        const sectionId = entry.target.id || getParentSectionId(entry.target);
        if (sectionId && sectionId !== 'hero') {
          clearActiveElements(domElements.navigationLinkElements);
          domElements.navigationLinkElements.find(link => link.textContent === sectionId).classList.add('active');
        }
      }
    })
  }, { threshold: 0.5 })
  
  return observer;
})

export default intersections;