import {render, html} from 'lit-html';

const projectsTemplate = () => html`
  <main class="main-projects">
    <h1 class="heading heading-text">Projects</h1>
    <section class="projects-container">
      <div class="project">
          <div class="image"><span class="text">This is a project</span></div>
          <span class="title">Cool Project</span>
          <span class="price">$100</span>
      </div>
      <div class="project">
          <div class="image"><span class="text">This is a project.</span></div>
          <span class="title">Cool Project</span>
          <span class="price">$200</span>
      </div>
      <div class="project">
          <div class="image"><span class="text">This is a project.</span></div>
          <span class="title">Cool Project</span>
          <span class="price">$300</span>
      </div>
    </section>
  </main>
`

export const projectsView = (ctx, next) => {
  ctx.render(projectsTemplate());
}