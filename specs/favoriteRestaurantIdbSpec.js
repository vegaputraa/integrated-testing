/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteResto-idb';
 
describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestaurantIdb.deleteResto(resto.id);
    });
  });
 
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});