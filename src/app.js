import page from 'page';
import { homeView } from '../views/homeView.js';
import { aboutView } from '../views/aboutView.js';
import { projectsView } from '../views/projectsView.js';
import { contactView } from '../views/contactView.js';
import { renderMiddleware } from '../middlewares/renderMiddleware.js';
import { changeActiveHandler } from './navigationLinks.js';

page(renderMiddleware);

page('/', homeView);
page('/about', aboutView);
page('/projects', projectsView);
page('/contact', contactView);

page.start();