export const hoverProjectTitle = () => window.addEventListener('load', () => {
  const isIncludesProjectLink = (element) => [...element.classList].includes('project-link');

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