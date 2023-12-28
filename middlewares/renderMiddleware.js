import { html, render } from 'lit-html';

const root = document.querySelector('#root');

const renderLayout = (ctx, template) => {
  render(template, root); 
};

export const renderMiddleware = (ctx, next) => {
  ctx.render = renderLayout.bind(null, ctx);

  next();
}