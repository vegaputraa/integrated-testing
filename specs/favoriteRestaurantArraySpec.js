/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
 
let favoriteRestaurants = [];
 
const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }
 
    return favoriteRestaurants.find((resto) => resto.id == id);
  },
 
  getAllResto() {
    return favoriteRestaurants;
  },
 
  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getResto(resto.id)) {
      return;
    }
 
    favoriteRestaurants.push(resto);
  },
 
  deleteResto(id) {
    // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
    // kecuali restaurant dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id != id);
  },
};
 
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);
 
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});