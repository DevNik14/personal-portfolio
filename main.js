const sidebarNivagationElement = document.querySelector('.sidebar');
const mobileNavigationIcon = document.querySelector('.mobile-navigation-icon');

if(mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click',() => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open-navigation');
  })
}