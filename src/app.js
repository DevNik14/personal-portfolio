import page from 'page';
import { homeView } from '../views/homeView.js';
import { aboutView } from '../views/aboutView.js';
import { projectsView } from '../views/projectsView.js';
import { contactView } from '../views/contactView.js';

page('/', homeView);
page('/about', aboutView);
page('/projects', projectsView);
page('/contact', contactView);

page.start();