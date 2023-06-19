import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-bar';
import './component/jumbo-hero';
import './component/footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';
 
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
