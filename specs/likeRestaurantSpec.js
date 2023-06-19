/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteResto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
      };

      beforeEach(() => {
        addLikeButtonContainer();
      });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

          expect(document.querySelector('[aria-label="like this restaurant"]'))
          .toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('[aria-label="unlike this restaurant!"]'))
            .toBeFalsy();
      });

      it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getResto(1);
        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurantIdb.deleteResto(1);
      });
      
    it('should not add a Restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disukai
        await FavoriteRestaurantIdb.putResto({ id: 1 });
        // Simulasikan pengguna menekan tombol suka restaurant
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
         // tidak ada restaurant yang ganda
        expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([{ id: 1 }]);
        FavoriteRestaurantIdb.deleteResto(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
      });
  });