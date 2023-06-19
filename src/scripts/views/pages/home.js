import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
      return `
      <header class="header">
          <div class="detail-section" id="detail-section">
          </div>
      </header>
      <main class="main-content">
        <div class="main-title">
          <h1>Explore Restaurant</h1>
          <span></span>
        </div>
        <div class="body-card" id="body-card">
        </div>
      </main>
      `;
    },
   
    async afterRender() {
      const restos = await TheRestoDbSource.listOfResto();
      // eslint-disable-next-line no-unused-vars
      const restoHeader = document.querySelector('#detail-selection');
      const restoContainer = document.querySelector('#body-card');
      restos.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    },
  };
   
  export default Home;