import page from 'page';
import {render, html} from 'lit-html';

const root = document.querySelector('#root');

const homeTemplate = () => html`<h1>Home</h1>`

const homeView = () => render(homeTemplate(), root);

const aboutTemplate = () => html`<h1>About</h1>`

const aboutView = () => render(aboutTemplate(), root);


page('/', homeView);
page('/about', aboutView);
page('/', homeView);

page.start();