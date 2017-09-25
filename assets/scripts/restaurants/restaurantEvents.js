'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const restaurantApi = require('./restaurantApi')
const restaurantUi = require('./restaurantUi')

const onCreateNewRestaurant = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  restaurantApi.createRestaurant(data)
    .then(restaurantUi.createRestaurantSuccess)
    .catch(restaurantUi.createRestaurantFailure)
}

const onIndexRestaurant = function (event) {
  event.preventDefault()
  $('.restaurant-divs').hide()
  $('.auth-message').hide()
  $('.restaurant-message').hide()
  restaurantApi.indexRestaurant()
    .then(restaurantUi.indexRestaurantSuccess)
    .catch(restaurantUi.indexRestaurantFailure)
}

module.exports = {
  onCreateNewRestaurant,
  onIndexRestaurant
}
