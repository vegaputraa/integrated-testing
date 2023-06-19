import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
      return `
      <div class="content">
      <h2 class="content__heading">Your Liked resto</h2>
      <div id="restos" class="restos">

      </div>
    </div>
  `;
    },

    async afterRender() {
      const restos = await FavoriteRestoIdb.getAllResto();
      const restoContainer = document.querySelector('#restos');
      
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
    },
  };
  export default Favorite;