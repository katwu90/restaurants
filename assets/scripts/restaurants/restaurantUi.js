'use strict'
const store = require('../store')

const hideRestaurantDivs = () => $('.restaurant-divs').hide()
const restaurantMessage = (text) => $('.restaurant-message').text(text)

const createRestaurantSuccess = function (data) {
  restaurantMessage('Successfully created new favorite restaurant!')
  $('#create-fave').trigger('reset')
  hideRestaurantDivs()
}

const createRestaurantFailure = function () {
  restaurantMessage('Error on creating new favorite restaurant! Please try again.')
  $('#create-fave').trigger('reset')
}

// const signInSuccess = function (data) {
//   store.user = data.user
//   authMessage('Successfully signed in!')
//   $('#sign-in').trigger('reset')
//   hideAuthDivs()
//   $('.signup-link').hide()
//   $('.signin-link').hide()
//   $('.managepassword-link').show()
//   $('.signout-link').show()
//   $('.restaurant-crude').show()
// }
//
// const signInFailure = function () {
//   authMessage('Error on signing in! Please enter correct email and password.')
//   $('#sign-in').trigger('reset')
// }
//
// const changePasswordSuccess = function () {
//   authMessage('Successfully changed password!')
//   $('.change-password').hide()
//   $('#change-password').trigger('reset')
// }
//
// const changePasswordFailure = function () {
//   authMessage('Error on changing password!')
//   $('#change-password').trigger('reset')
// }
//
// const signOutSuccess = function () {
//   store.user = null
//   authMessage('Successfully signed out!')
//   $('.auth').hide()
//   $('.signout-link').hide()
//   $('.managepassword-link').hide()
//   $('.signup-link').show()
//   $('.signin-link').show()
// }
//
// const signOutFailure = function () {
//   authMessage('Error on signing out!')
// }

module.exports = {
  createRestaurantSuccess,
  createRestaurantFailure
}
