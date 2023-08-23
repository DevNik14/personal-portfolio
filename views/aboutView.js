import {render, html} from 'lit-html';

const aboutTemplate = () => html`<h1 class="heading heading-text">About</h1>`

export const aboutView = (ctx, next) => {
  ctx.render(aboutTemplate());
}