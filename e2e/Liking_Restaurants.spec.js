/* eslint-disable object-curly-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable func-call-spacing */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });

Scenario('Test Liking Restaurant',  async ({ I }) => { 
    I.amOnPage('/#/');

    I.waitForElement('.resto-item__content .name a')

    const firstRestaurant = (locate('.resto-item__content .name a').first())
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
    I.click(firstRestaurant)
    
    I.waitForElement('#likeButton')
    I.seeElement('#likeButton')
    I.click('#likeButton')

    I.amOnPage('/#/favorite')
    I.waitForElement('.resto-item__content .name a');
    I.seeElement('.resto-item__content .name a')
  
    const likedRestauranTitle = await I.grabTextFrom('.resto-card .name')
    assert.strictEqual(firstRestaurantTitle, likedRestauranTitle);
  });

Scenario ('Test Unliking Restaurant', async ({I}) => {
  I.amOnPage('/#/');

  I.waitForElement('.resto-card')
  I.seeElement('.resto-card')

  const firstRestaurant = (locate('.resto-item__content .name a').first())
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)
  
  I.waitForElement('#likeButton')
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.waitForElement('.resto-card');
  I.seeElement('.resto-card')

  const likedRestauranTitle = await I.grabTextFrom('.resto-card .name')
  assert.strictEqual(firstRestaurantTitle, likedRestauranTitle);

  const firstRestaurantLiked = (locate('.resto-item__content .name a').first())
  I.click(firstRestaurantLiked)
  
  I.waitForElement('#likeButton')
  I.seeElement('#likeButton')

  I.click('#likeButton')

  I.amOnPage('/#/favorite')

  I.dontSee(likedRestauranTitle)
});
