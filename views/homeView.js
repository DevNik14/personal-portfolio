import {html} from 'lit-html';

const homeTemplate = () => html`<h1 class="heading heading-text">Home</h1>`

export const homeView = (ctx, next) => {
  ctx.render(homeTemplate());
}