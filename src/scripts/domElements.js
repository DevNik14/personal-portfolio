const domElements = {
  "navigationLinkElements": [...document.querySelectorAll('.nav-link')],
  "sidebarNivagationElement": document.querySelector('.sidebar'),
  "mobileNavigationIcon": document.querySelector('.mobile-navigation-icon'),
  "currentHashLocation": window.location.hash.split('#')[1],
  "navigationElement": document.querySelector('.site-navigation ul'),
  "scrollToTopElement": document.querySelector('.scroll-to-top'),
  "roleDescriptionElement": document.querySelector('.role-description'),
  "tabsListElement": document.querySelector('.tabs')
}

export default domElements;