import {render, html} from 'lit-html';

const root = document.querySelector('#root');

const homeTemplate = () => html`<h1 class="heading heading-text">Home</h1>`

export const homeView = () => render(homeTemplate(), root);