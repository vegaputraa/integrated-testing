import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteResto-idb';

const Detail = {
    async render() {
      return `
      <div id="detail-section" class="detail-section">Detail Resto</div>
      <div id="likeButtonContainer"></div>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await TheRestoDbSource.detailResto(url.id);
      const restoContainer = document.querySelector('#detail-section');
      restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestoIdb,
        resto: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
      });
    },
  };
   
  export default Detail;