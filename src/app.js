import page from 'page';
import {render, html} from 'lit-html';

const root = document.querySelector('#root');

const homeTemplate = () => html`<h1 class="heading heading-text">Home</h1>`

const homeView = () => render(homeTemplate(), root);

const aboutTemplate = () => html`<h1 class="heading heading-text">About</h1>`

const aboutView = () => render(aboutTemplate(), root);

const projectsTemplate = () => html`<h1 class="heading heading-text">Projects</h1>`

const projectsView = () => render(projectsTemplate(), root);

const contactTemplate = () => html`<h1 class="heading heading-text">Contact</h1>`

const contactView = () => render(contactTemplate(), root);


page('/', homeView);
page('/about', aboutView);
page('/projects', projectsView);
page('/contact', contactView);

page.start();