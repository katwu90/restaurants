'use strict'
// const store = require('../store')
const showRestaurants = require('./restaurant-listing.handlebars')

const hideRestaurantDivs = () => $('.restaurant-divs').hide()
const restaurantMessage = (text) => $('.restaurant-message').text(text).show()

const createRestaurantSuccess = function (data) {
  restaurantMessage('Successfully created new favorite restaurant!')
  $('#create-fave').trigger('reset')
  hideRestaurantDivs()
}

const createRestaurantFailure = function () {
  restaurantMessage('Error on creating new favorite restaurant! Please try again.')
  $('#create-fave').trigger('reset')
}

const indexRestaurantSuccess = function (data) {
  console.log(data)
  hideRestaurantDivs()
  restaurantMessage('Here are all your favorite restaurants')
  const showRestaurantsHTML = showRestaurants({restaurants: data.restaurants})
  $('.restaurant-content').append(showRestaurantsHTML)
  $(() => $('.delete').on('click', confirmDelete))
}

const indexRestaurantFailure = function (data) {
  hideRestaurantDivs()
  restaurantMessage('Error on getting all your favorite restaurants!')
}

const confirmDelete = function () {}

module.exports = {
  createRestaurantSuccess,
  createRestaurantFailure,
  indexRestaurantSuccess,
  indexRestaurantFailure
}
