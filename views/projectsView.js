import {render, html} from 'lit-html';

const projectsTemplate = () => html`
  <main class="main-projects">
    <h1 class="heading heading-text projects-heading">Projects</h1>
    <section class="projects-container">
      <div class="project">
        <div class="project-description">
          <h3 class="project-title heading-text">Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <span class="price">$100</span>
      </div>
      <div class="project">
        <div class="project-description">
          <h3 class="project-title heading-text">Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <span class="price">$200</span>
      </div>
      <div class="project">
        <div class="project-description">
          <h3 class="project-title heading-text">Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <span class="price">$300</span>
      </div>
    </section>
  </main>
`

export const projectsView = (ctx, next) => {
  ctx.render(projectsTemplate());
}