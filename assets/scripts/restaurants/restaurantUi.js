'use strict'
// const store = require('../store')
const restaurantApi = require('./restaurantApi')
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

const deleteDiv = `Are you sure you want to delete?<button type="submit" class="no-delete btn btn-default">No</button><button type="submit" class="yes-delete btn btn-default">Yes</button>`
let currentId = null

const noDelete = function (event) {
  event.preventDefault()
  $(this).parent().hide()
  $('.confirmation').show()
}

const deleteRestaurantSuccess = function () {
  console.log('Successfully deleted!')
  let id = `[data-id="${currentId}"]`
  console.log(id)
  $(id).hide()
}

const deleteRestaurantFailure = function (err) {
  console.log(err)
}

const onYesDelete = function (event) {
  event.preventDefault()
  currentId = $(this).parent().parent().parent().attr('data-id')
  console.log(currentId)
  restaurantApi.deleteRestaurant(currentId)
    .then(deleteRestaurantSuccess)
    .catch(deleteRestaurantFailure)
}

const confirmDelete = function (event) {
  event.preventDefault()
  $(this).parent().html(deleteDiv)
  $(this).hide()
  $('.no-delete').on('click', noDelete)
  $('.yes-delete').on('click', onYesDelete)
}

const indexRestaurantSuccess = function (data) {
  hideRestaurantDivs()
  restaurantMessage('Here are all your favorite restaurants')
  const showRestaurantsHTML = showRestaurants({restaurants: data.restaurants})
  $('.restaurant-content').append(showRestaurantsHTML).show()
  $(() => $('.confirmation').on('click', confirmDelete))
}

const indexRestaurantFailure = function (data) {
  hideRestaurantDivs()
  restaurantMessage('Error on getting all your favorite restaurants!')
}

module.exports = {
  createRestaurantSuccess,
  createRestaurantFailure,
  indexRestaurantSuccess,
  indexRestaurantFailure
}
