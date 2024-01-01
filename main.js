const sidebarNivagationElement = document.querySelector('.sidebar');
const mobileNavigationIcon = document.querySelector('.mobile-navigation-icon');
const navigationLinkElements = document.querySelectorAll('.nav-link');

if(mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click',() => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open-navigation');
  })
}

const clearActiveLinks = () => navigationLinkElements.forEach(link => link.classList.remove('active'));

navigationLinkElements.forEach(link => link.addEventListener('click', (e) => {
  clearActiveLinks();
  link.classList.add('active');
}))