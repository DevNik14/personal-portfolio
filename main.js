import rolesData from './src/data/roles.json';
import projectsData from './src/data/projects.json';

const sidebarNivagationElement = document.querySelector('.sidebar');
const mobileNavigationIcon = document.querySelector('.mobile-navigation-icon');
const navigationLinkElements = [...document.querySelectorAll('.nav-link')];
const currentHashLocation = window.location.hash.split('#')[1];
const roleDescriptionElement = document.querySelector('.role-description');
const scrollToTopElement = document.querySelector('.scroll-to-top');

//handle navigation

if (mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click', () => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open');
  })
}

const clearActiveElements = (elements) => [...elements].forEach(link => link.classList.remove('active'));

navigationLinkElements.forEach(link => link.addEventListener('click', (e) => {
  clearActiveElements(navigationLinkElements);
  if (link.textContent.trim() !== "</DevNik>") {
    link.classList.add('active');
  }
  if (mobileNavigationIcon) {
    sidebarNivagationElement.classList.remove('to-left');
    mobileNavigationIcon.classList.remove('open');
  }
}))

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

//end handling navigation

const getParentSectionId = (childElement) => {
  if (childElement.tagName === 'ARTICLE') {
    return childElement.parentNode.parentNode.id;
  }
}

//add animations on scroll
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      const sectionId = entry.target.id || getParentSectionId(entry.target);
      if (sectionId && sectionId !== 'hero') {
        clearActiveElements(navigationLinkElements);
        navigationLinkElements.find(link => link.textContent === sectionId).classList.add('active');
      }
    }
  })
}, { threshold: 0.5 })

hiddenElements.forEach(el => observer.observe(el));

//end add animations on scroll

//handle experience tab items
const tabsListElement = document.querySelector('.tabs');
const experienceList = rolesData;

Object.keys(experienceList)
  .forEach(key => {
    const liElement = document.createElement('li');
    liElement.textContent = key;
    liElement.classList.add('tab-items');
    tabsListElement.appendChild(liElement);
  });

const initRoleList = (experienceKey = 'Upwork', isThereFirstTabItem = true) => {
  if (isThereFirstTabItem) {
    const firstItem = document.querySelector('.tabs .tab-items');
    firstItem.classList.add('active');
  }

  const rolesFragment = document.createDocumentFragment();
  const experienceListValues = Object.values(experienceList[experienceKey]);
  const roleListElement = document.createElement('ul');
  roleListElement.classList.add('role-list');
  const roleH3Element = document.createElement('h3');
  const rolePElement = document.createElement('p');
  roleH3Element.textContent = experienceListValues[0];
  rolesFragment.appendChild(roleH3Element);

  rolePElement.textContent = `${experienceListValues[1]} - ${experienceListValues[2]}`;
  rolesFragment.appendChild(rolePElement);
  experienceListValues[3].forEach(x => {
    const roleListItemElement = document.createElement('li');
    roleListItemElement.textContent = x;
    roleListItemElement.classList.add('role-item');
    rolesFragment.appendChild(roleListItemElement);
  })
  roleListElement.appendChild(rolesFragment);
  roleDescriptionElement.appendChild(roleListElement);
}

initRoleList();

tabsListElement.addEventListener('click', (e) => {
  if (e.target.classList.value == 'tab-items') {
    const tabItems = document.querySelectorAll('.tab-items');
    clearActiveElements(tabItems);
    if (roleDescriptionElement.children[0]) roleDescriptionElement.children[0].remove();
    e.target.classList.add('active');

    initRoleList(e.target.textContent, false);
  }
})

const copyEmailElement = document.querySelector('.contacts-content .copy-icon');

copyEmailElement.addEventListener('click', (e) => {
  if (e.target.tagName !== 'A') {
    const emailText = copyEmailElement.parentNode.parentNode.querySelector('a').textContent;
    navigator.clipboard.writeText(emailText);

    const tooltipElement = document.createElement('span');
    tooltipElement.textContent = 'Copied';
    tooltipElement.classList.add('show-copied-message');
    document.querySelector('.email-info').appendChild(tooltipElement);

    const timeoutId = setTimeout(() => {
      tooltipElement.remove();
    }, 2000)
  }
})