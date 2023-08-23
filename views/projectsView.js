import {render, html} from 'lit-html';

const root = document.querySelector('#root');

const projectsTemplate = () => html`<h1 class="heading heading-text">Projects</h1>`

export const projectsView = () => render(projectsTemplate(), root);