import { html, render } from 'lit-html';
import { gsap } from 'gsap';

const root = document.querySelector('#root');

const renderLayout = (ctx, template) => {
  gsap.to(root, {
    opacity: 0, 
    x: '-100%', 
    duration: 0.5,
    onComplete: () => {
      render(template, root); 
      gsap.set(root, { x: '100%', opacity: 0 }); 
      gsap.to(root, {
        x: '0%', 
        opacity: 1, 
        duration: 0.5,
      });
    },
  });
};

export const renderMiddleware = (ctx, next) => {
  ctx.render = renderLayout.bind(null, ctx);

  next();
}