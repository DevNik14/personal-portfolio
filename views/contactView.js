import {render, html} from 'lit-html';

const root = document.querySelector('#root');

const contactTemplate = () => html`<h1 class="heading heading-text">Contact</h1>`

export const contactView = () => render(contactTemplate(), root);