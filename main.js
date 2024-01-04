const sidebarNivagationElement = document.querySelector('.sidebar');
const mobileNavigationIcon = document.querySelector('.mobile-navigation-icon');
const navigationLinkElements = [...document.querySelectorAll('.nav-link')];
const currentHashLocation = window.location.hash.split('#')[1];

//handle navigation

if (mobileNavigationIcon) {
  mobileNavigationIcon.addEventListener('click', () => {
    sidebarNivagationElement.classList.toggle('to-left');
    mobileNavigationIcon.classList.toggle('open-navigation');
  })
}

const clearActiveElements = (elements) => [...elements].forEach(link => link.classList.remove('active'));

navigationLinkElements.forEach(link => link.addEventListener('click', (e) => {
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
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

hiddenElements.forEach(el => observer.observe(el));

//end add animations on scroll

//handle experience tab items
const tabsListElement = document.querySelector('.tabs');
const experienceList = {
  "Upwork":{
    "job-title": "Freelance front-end developer",
    "from-year": "May 2018",
    "untill": "October 2019",
    roles: ["Translated PSD designs into responsive and pixel-perfect HTML/CSS, ensuring accurate representation of the original design.",
    "Implemented responsive design for webpages using CSS media queries or Bootstrap, ensuring optimal user experience across various devices and screen sizes.",
    "Refactored legacy JavaScript code into modern ECMAScript 6 (ES6+) code, enhancing readability and leveraging the latest language features.",
    "Developed and integrated various functionalities, such as modals and sliders, to enhance user interactions and improve overall user experience.",
    "Engaged in the Agile development methodology, actively contributing to Scrum processes and participating in iterative sprints."]
  },
  "Break": {}
};

[...Object.keys(experienceList)]
  .forEach(key => {
    const liElement = document.createElement('li');
    liElement.textContent = key;
    liElement.classList.add('tab-items');
    tabsListElement.appendChild(liElement);
  })

tabsListElement.addEventListener('click', (e) => {
  if(e.target.classList.value == 'tab-items') {
    const tabItems = document.querySelectorAll('.tab-items');
    clearActiveElements(tabItems);
    e.target.classList.add('active');
  }
})