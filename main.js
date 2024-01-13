import domElements from "./src/scripts/domElements";
import { clearActiveElements, getParentSectionId } from "./src/scripts/utils";

import navigation from "./src/scripts/navigation";
import roleTabs from "./src/scripts/roleTabs";
import projects from "./src/scripts/projects";
import intersections from "./src/scripts/intersections";

navigation();
roleTabs();
projects();

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(el => intersections().observe(el));

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