import API_ENDPOINT from '../globals/api-endpoint';
 
class TheRestoDbSource {
  static async listOfResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
 
export default TheRestoDbSource;