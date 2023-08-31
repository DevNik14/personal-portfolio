import { render, html } from 'lit-html';

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
          <ul class="links project-link">
            <li class="link-item project-link">
              <a href="https://github.com/DevNik14" class="project-link" target="_blank">
                <i class="fa fa-github project-link" aria-hidden="true"></i>
              </a>
            </li>
            <li class="link-item project-link">
              <a href="https://github.com/DevNik14" class="project-link" target="_blank">
                <i class="fa fa-external-link project-link" aria-hidden="true"></i>
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
          <ul class="links project-link">
            <li class="link-item project-link">
              <a href="https://github.com/DevNik14" class="project-link" target="_blank">
                <i class="fa fa-github project-link" aria-hidden="true"></i>
              </a>
            </li>
            <li class="link-item project-link">
              <a href="https://github.com/DevNik14" class="project-link" target="_blank">
                <i class="fa fa-external-link project-link" aria-hidden="true"></i>
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
          <ul class="links project-link">
            <li class="link-item project-link">
              <a href="https://github.com/DevNik14" class="project-link" target="_blank">
                <i class="fa fa-github project-link" aria-hidden="true"></i>
              </a>
            </li>
            <li class="link-item project-link">
              <a href="https://github.com/DevNik14" class="project-link" target="_blank">
                <i class="fa fa-external-link project-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </main>
`

window.addEventListener('load', () => {
  console.log('loaded');
  const isIncludesProjectLink = (element) => {
    return [...element.classList].includes('project-link')
  }

  const projectContainer = document.querySelectorAll('.project');

  projectContainer.forEach(el => {
    el.addEventListener('mouseover', (event) => {
      if(!isIncludesProjectLink(event.target)) {
        event.currentTarget.querySelector('.project-title').style.color = 'var(--support-color)';
      } else {
        event.currentTarget.querySelector('.project-title').style.color = '#fff';
      }
    })
  })

  projectContainer.forEach(el => {
    el.addEventListener('mouseleave', (event) => {
      if(!isIncludesProjectLink(event.target)) {
        event.currentTarget.querySelector('.project-title').style.color = '#fff';
      }
    })
  })
})

export const projectsView = (ctx, next) => {
  ctx.render(projectsTemplate());
}