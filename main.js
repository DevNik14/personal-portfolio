const sidebarNivagationElement = document.querySelector('.sidebar');
const mobileNavigationIcon = document.querySelector('.mobile-navigation-icon');
const navigationLinkElements = [...document.querySelectorAll('.nav-link')];
const currentHashLocation = window.location.hash.split('#')[1];
const roleDescriptionElement = document.querySelector('.role-description');

//handle navigation

if (mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click', () => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open-navigation');
  })
}

const clearActiveElements = (elements) => [...elements].forEach(link => link.classList.remove('active'));

navigationLinkElements.forEach(link => link.addEventListener('click', () => {
  clearActiveElements(navigationLinkElements);
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
  const currentSection = document.querySelector(`.${currentHashLocation}`);
  currentSection.scrollIntoView();

  const isSectionSelected = navigationLinkElements
    .find(link => link.textContent === currentHashLocation);
  if (isSectionSelected) {
    isSectionSelected.classList.add('active');
  }
}

// if(window.screen.width <= 768) {
//   window.addEventListener('scroll', (e) => {
//     console.log(window.top);
//   })
// }

//end handling navigation

//add animations on scroll
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

hiddenElements.forEach(el => observer.observe(el));

//end add animations on scroll

//handle experience tab items
const tabsListElement = document.querySelector('.tabs');
const experienceList = {
  "Upwork": {
    "job-title": "Freelance front-end developer",
    "from-year": "May 2018",
    "untill": "October 2019",
    roles: ["Translated PSD designs into responsive and pixel-perfect HTML/CSS, ensuring accurate representation of the original design.",
      "Implemented responsive design for webpages using CSS media queries or Bootstrap, ensuring optimal user experience across various devices and screen sizes.",
      "Refactored legacy JavaScript code into modern ECMAScript 6 (ES6+) code, enhancing readability and leveraging the latest language features.",
      "Developed and integrated various functionalities, such as modals and sliders, to enhance user interactions and improve overall user experience.",
      "Engaged in the Agile development methodology, actively contributing to Scrum processes and participating in iterative sprints."]
  },
  "Break": {
    "job-title": "Personal Break",
    "from-year": "2020",
    "untill": "2023",
    roles: [
      "During this time, I took a break to focus on personal development, overcome challenges, and prepare for my return to the tech industry."
    ]
  }
};

Object.keys(experienceList)
  .forEach(key => {
    const liElement = document.createElement('li');
    liElement.textContent = key;
    liElement.classList.add('tab-items');
    tabsListElement.appendChild(liElement);
  });

const initRoleList = (experienceKey = 'Upwork', isThereFirstTabItem = true) => {
  if(isThereFirstTabItem) {
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
    if(roleDescriptionElement.children[0]) roleDescriptionElement.children[0].remove();
    e.target.classList.add('active');

    initRoleList(e.target.textContent, false);
  }
})