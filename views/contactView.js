import {render, html} from 'lit-html';

const contactTemplate = () => html`<h1 class="heading heading-text">Contact</h1>`

export const contactView = (ctx, next) => {
  ctx.render(contactTemplate());
}