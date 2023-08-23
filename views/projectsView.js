import {render, html} from 'lit-html';

const projectsTemplate = () => html`<h1 class="heading heading-text">Projects</h1>`

export const projectsView = (ctx, next) => {
  ctx.render(projectsTemplate());
}