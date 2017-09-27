'use strict'
const store = require('../store')
const restaurantApi = require('./restaurantApi')
// const restaurantEvents = require('./restaurantEvents')
const showRestaurants = require('./restaurant-listing.handlebars')
const getFormFields = require('../../../lib/get-form-fields')

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

const noDelete = function (event) {
  event.preventDefault()
  $(this).parent().hide()
  $('.confirmation').show()
}

const deleteRestaurantSuccess = function () {
  restaurantMessage('Successfully deleted!')
  const id = `[data-id="${store.currentId}"]`
  $(id).hide()
}

const deleteRestaurantFailure = function () {
  restaurantMessage('Failed to delete')
}

const onYesDelete = function (event) {
  event.preventDefault()
  store.currentId = $(this).parent().parent().parent().attr('data-id')
  restaurantApi.deleteRestaurant(store.currentId)
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

const updateFormInputs = `<input class="r-name" name="restaurant[name]" type="text" value="">
<input class="r-rating" name="restaurant[rating]" type="text" value="">
<input class="r-neigh" name="restaurant[neighborhood]" type="text" value="">
<button type="submit" class="update-button btn btn-default">Update This Restaurant</button>`

const updateRestaurantSuccess = function () {
  restaurantMessage('Successfully updated restaurant!')
}

const updateRestaurantFailure = function () {
  restaurantMessage('Error updating restaurant! Please try again.')
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  store.currentId = $(this).parent().parent().attr('data-id')
  console.log(store.currentId)
  const data = getFormFields(this)
  console.log(data)
  restaurantApi.updateRestaurant(data)
    .then(updateRestaurantSuccess)
    .catch(updateRestaurantFailure)
}

const getUpdateForm = function (event) {
  event.preventDefault()
  $(this).siblings('.update-form').html(updateFormInputs)
  $(this).hide()
  $('.r-name').val($(this).parent().siblings('.name').children().text())
  $('.r-rating').val($(this).parent().siblings('.rating').children().text())
  $('.r-neigh').val($(this).parent().siblings('.neighborhood').children().text())
  $('.update-form').on('submit', onUpdateRestaurant)
}

const indexRestaurantSuccess = function (data) {
  hideRestaurantDivs()
  restaurantMessage('Here are all your favorite restaurants')
  const showRestaurantsHTML = showRestaurants({restaurants: data.restaurants})
  $('.restaurant-content').append(showRestaurantsHTML).show()
  $(() => $('.confirmation').on('click', confirmDelete))
  $(() => $('.update').on('click', getUpdateForm))
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
