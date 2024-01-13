import domElements from "./src/scripts/domElements";
import {clearActiveElements, getParentSectionId} from './src/scripts/utils';

import navigation from "./src/scripts/navigation";

import rolesData from './src/data/roles.json';
import projectsData from './src/data/projects.json';

navigation();

const roleDescriptionElement = document.querySelector('.role-description');

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

// handle dynamic project section
const projectsContentElement = document.querySelector('.projects .projects-content');
const projectFragment = document.createDocumentFragment();

projectsData.forEach(project => {
  // Create article element
  const article = document.createElement('article');
  article.classList.add('project-card', 'hidden');

  // Create project details div
  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');

  // Create card title
  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  const titleHeading = document.createElement('h3');
  titleHeading.textContent = project['project-title'];
  cardTitle.appendChild(titleHeading);

  // Create project description
  const projectDescription = document.createElement('div');
  projectDescription.classList.add('project-description');
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = project['project-description'];
  projectDescription.appendChild(descriptionParagraph);

  // Create used technologies list
  const usedTechnologiesList = document.createElement('div');
  usedTechnologiesList.classList.add('used-technologies-list');
  const technologiesList = document.createElement('ul');
  project['used-technologies-list'].forEach(tech => {
    const techItem = document.createElement('li');
    techItem.textContent = tech;
    technologiesList.appendChild(techItem);
  });
  usedTechnologiesList.appendChild(technologiesList);

  // Create links to GitHub and project
  const linksTo = document.createElement('div');
  linksTo.classList.add('links-to');
  const linksList = document.createElement('ul');

  // GitHub link
  const githubLink = document.createElement('li');
  const githubAnchor = document.createElement('a');
  githubAnchor.href = project['url-github'];
  githubAnchor.target = '_blank';
  githubAnchor.rel = 'noopener noreferrer';

  // Create an <i> element for Font Awesome
  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab', 'fa-github');

  githubAnchor.appendChild(githubIcon);
  githubLink.appendChild(githubAnchor);
  linksList.appendChild(githubLink);

  // Project URL
  const projectLink = document.createElement('li');
  const projectAnchor = document.createElement('a');
  projectAnchor.href = project['url-to-project'];
  projectAnchor.target = '_blank';
  projectAnchor.rel = 'noopener noreferrer';

  const urlIcon = document.createElement('i');
  urlIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');

  projectAnchor.appendChild(urlIcon);
  projectLink.appendChild(projectAnchor);
  linksList.appendChild(projectLink);

  //create project image div
  const projectImageDiv = document.createElement('div');
  projectImageDiv.classList.add('project-image');

  //create image element
  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', project['img-src']);
  imageElement.setAttribute('alt', project['project-title']);

  projectImageDiv.appendChild(imageElement);

  article.appendChild(projectDetails);
  projectDetails.appendChild(cardTitle);
  projectDetails.appendChild(projectDescription);
  projectDetails.appendChild(usedTechnologiesList);
  projectDetails.appendChild(linksTo);
  linksTo.appendChild(linksList);
  article.appendChild(projectImageDiv);

  projectFragment.appendChild(article);
})
projectsContentElement.appendChild(projectFragment);

// end handle dynamic project section/

//add animations on scroll
const hiddenElements = document.querySelectorAll('.hidden');
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

hiddenElements.forEach(el => observer.observe(el));

//end add animations on scroll

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