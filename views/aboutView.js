import {render, html} from 'lit-html';

const aboutTemplate = () => html`
<main class="main-about">
  <section class="about-text">
    <h1 class="heading heading-text">About Me</h1>
    <p class="body-text">Hi, I'm Nikolay, a front-end developer who loves creating websites that look great and work smoothly.</p>
    <p class="body-text">
    I enjoy turning designs into real websites using HTML, CSS, and JavaScript. 
    I focus on making sure everything looks perfect and works well on different devices.
    </p>
    <p class="body-text">
    Beyond coding, I'm a competitive,  I embrace every opportunity to learn and improve.
    Sharing my web development journey is something I enjoy, and I'm open to collaborating and growing with fellow developers.
    </p>
  </section>
  <!-- <figure>
    <img src="../assets/images/personal-picture.jpg" alt="personal-picture">
  </figure> -->
</main>
`

export const aboutView = (ctx, next) => {
  ctx.render(aboutTemplate());
}