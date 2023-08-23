import {html} from 'lit-html';
const lines = ['Hi,', 'I\'m Nikolay,', 'front-end developer'];

const homeTemplate = () => html`
<main class="main-home">
  <header class="home-header">
      ${lines.map(line => {
        return html
        `<h1 class="heading heading-text">${line.split('')
          .map(char => 
            char == ' ' 
              ? html`<span>${char}</span> ` 
              : html`<span>${char}</span>`
            )}
        </h1>`
      })}
  </header>
</main>
`

export const homeView = (ctx, next) => {
  ctx.render(homeTemplate());
}