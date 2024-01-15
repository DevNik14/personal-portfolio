import rolesData from '../data/roles.json';
import { clearActiveElements } from './utils';

const roleDescriptionElement = document.querySelector('.role-description');
const tabsListElement = document.querySelector('.tabs');

const roleTabs = () => {
  Object.keys(rolesData)
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
    const experienceListValues = Object.values(rolesData[experienceKey]);
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
}

export default roleTabs;