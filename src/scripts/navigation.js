import domElements from "./domElements";

if (mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click', () => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open');
  })
}

navigationElement.addEventListener('click', (e) => {
  if(e.target.tagName === 'A') {
    clearActiveElements(domElements.navigationLinkElements);
    e.target.classList.add('active');
  }

  if (mobileNavigationIcon) {
    sidebarNivagationElement.classList.remove('to-left');
    mobileNavigationIcon.classList.remove('open');
  }
})

if (currentHashLocation) {
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