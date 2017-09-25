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

// const onSignIn = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   authApi.signIn(data)
//     .then(authUi.signInSuccess)
//     .catch(authUi.signInFailure)
// }
//
// const onChangePassword = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   authApi.changePassword(data)
//     .then(authUi.changePasswordSuccess)
//     .catch(authUi.changePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   authApi.signOut()
//     .then(authUi.signOutSuccess)
//     .catch(authUi.signOutFailure)
// }
//
module.exports = {
  onCreateNewRestaurant,
  onIndexRestaurant
}
