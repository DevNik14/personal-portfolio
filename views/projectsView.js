import {render, html} from 'lit-html';

const projectsTemplate = () => html`
  <main class="main-projects">
    <h1 class="heading heading-text projects-heading">Projects</h1>
    <section class="projects-container">
      <div class="project">
        <div class="project-description">
          <h3 class="project-title heading-text">Project Title</h3>
          <p class="body-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <footer class="project-footer">
          <ul class="project-tools-list body-text">
            <li class="project-item">HTML</li>
            <li class="project-item">HTML</li>
            <li class="project-item">HTML</li>
          </ul>
          <ul class="links">
            <li class="link-item">
              <a href="https://github.com/DevNik14" target="_blank">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li class="link-item">
              <a href="https://github.com/DevNik14" target="_blank">
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div class="project">
        <div class="project-description">
          <h3 class="project-title heading-text">Project Title</h3>
          <p class="body-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <footer class="project-footer">
          <ul class="project-tools-list body-text">
            <li class="project-item">HTML</li>
            <li class="project-item">HTML</li>
            <li class="project-item">HTML</li>
          </ul>
          <ul class="links">
            <li class="link-item">
              <a href="https://github.com/DevNik14 target="_blank">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li class="link-item">
              <a href="https://github.com/DevNik14" target="_blank">
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div class="project">
        <div class="project-description">
          <h3 class="project-title heading-text">Project Title</h3>
          <p class="body-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <footer class="project-footer">
          <ul class="project-tools-list body-text">
            <li class="project-item">HTML</li>
            <li class="project-item">HTML</li>
            <li class="project-item">HTML</li>
          </ul>
          <ul class="links">
            <li class="link-item">
              <a href="https://github.com/DevNik14" target="_blank">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li class="link-item">
              <a href="https://github.com/DevNik14" target="_blank">
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </main>
`

export const projectsView = (ctx, next) => {
  ctx.render(projectsTemplate());
}