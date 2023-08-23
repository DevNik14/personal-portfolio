const mainNavElement = document.querySelector('.main-nav');
const navigationLinks = [...mainNavElement.querySelectorAll('a')];
const logoElement = document.querySelector('.logo');
const homeLink = navigationLinks.find(link => link.textContent == 'Home');

const clearActiveClass = () => {
  navigationLinks.forEach(link => {
    link.classList.remove('active');
  });
}

const logoLinkClickHandler = () => {
  clearActiveClass();
  mainNavElement.querySelector('a').classList.add('active');
}

export const changeActiveHandler = (event) => {
  if(event.target.tagName == 'A') {
    clearActiveClass();
    event.target.classList.add('active');
  }
}

mainNavElement.addEventListener('click', changeActiveHandler);
logoElement.addEventListener('click', logoLinkClickHandler);

window.addEventListener('load' ,() => {
  clearActiveClass();
  const pathname = window.location.pathname
    .split('/')
    .slice(1)
    .join('');
  const correctLinkItem = navigationLinks
    .find(link => link.textContent.toLowerCase() == pathname);

  if(correctLinkItem) {
    correctLinkItem.classList.add('active');
  } else if(window.location.pathname == '/') {
    homeLink.classList.add('active');
  } else {
    console.log('404');
  }
})