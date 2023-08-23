import {render, html} from 'lit-html';

const root = document.querySelector('#root');

const aboutTemplate = () => html`<h1 class="heading heading-text">About</h1>`

export const aboutView = () => render(aboutTemplate(), root);