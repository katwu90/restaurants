'use strict'
const store = require('../store')

const hideAuthDivs = () => $('.auth').hide()
const authMessage = (text) => $('.auth-message').text(text)

const signUpSuccess = function (data) {
  authMessage('Successfully signed up! Please sign in.')
  $('#sign-up').trigger('reset')
  hideAuthDivs()
}

const signUpFailure = function () {
  authMessage('Error on sign up! Please try again.')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  authMessage('Successfully signed in!').show()
  $('#sign-in').trigger('reset')
  hideAuthDivs()
  $('.signup-link').hide()
  $('.signin-link').hide()
  $('.managepassword-link').show()
  $('.signout-link').show()
  $('.restaurant-crude').show()
}

const signInFailure = function () {
  authMessage('Error on signing in! Please enter correct email and password.').show()
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function () {
  authMessage('Successfully changed password!').show()
  $('.change-password').hide()
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  authMessage('Error on changing password!').show()
  $('#change-password').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  authMessage('Successfully signed out!').show()
  $('.auth').hide()
  $('.signout-link').hide()
  $('.managepassword-link').hide()
  $('.restaurant-crude').hide()
  $('.signup-link').show()
  $('.signin-link').show()
  $('.restaurant-content').hide()
  $('.restaurant-message').hide()
  $('.restaurant-divs').hide()
}

const signOutFailure = function () {
  authMessage('Error on signing out!').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
