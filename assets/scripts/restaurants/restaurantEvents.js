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
  $('.restaurant-content').empty()
  $('.restaurant-divs').hide()
  $('.auth-message').hide()
  $('.restaurant-message').hide()
  restaurantApi.indexRestaurant()
    .then(restaurantUi.indexRestaurantSuccess)
    .catch(restaurantUi.indexRestaurantFailure)
}

const onShowRestaurant = function (event) {
  event.preventDefault()
  $('.restaurant-divs').hide()
  $('.auth-message').hide()
  $('.restaurant-message').hide()
  const data = getFormFields(event.target)
  const id = data.restaurant.id
  console.log(id)
  restaurantApi.showRestaurant(id)
    .then(restaurantUi.showRestaurantSuccess)
    .catch(restaurantUi.showRestaurantFailure)
}

module.exports = {
  onCreateNewRestaurant,
  onIndexRestaurant,
  onShowRestaurant
}
