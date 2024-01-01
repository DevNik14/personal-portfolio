const sidebarNivagationElement = document.querySelector('.sidebar');
const mobileNavigationIcon = document.querySelector('.mobile-navigation-icon');
const navigationLinkElements = [...document.querySelectorAll('.nav-link')];
const currentHashLocation = window.location.hash.split('#')[1];

if (mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click', () => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open-navigation');
  })
}

const clearActiveLinks = () => navigationLinkElements.forEach(link => link.classList.remove('active'));

navigationLinkElements.forEach(link => link.addEventListener('click', (e) => {
  clearActiveLinks();
  if (link.textContent.trim() === "</DevNik>") {
    navigationLinkElements
      .find(link => link.textContent === "home")
      .classList
      .add('active');
  } else {
    link.classList.add('active');
  }
}))

if (currentHashLocation) {
  const isSectionSelected = navigationLinkElements
    .find(link => link.textContent === currentHashLocation);
  if (isSectionSelected) {
    isSectionSelected.classList.add('active');
  }
}