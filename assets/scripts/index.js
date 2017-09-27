'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/authEvents')
const restaurantEvents = require('./restaurants/restaurantEvents')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.restaurant-crude').hide()
  $('.signout-link').hide()
  $('.managepassword-link').hide()
  $('.auth').hide()
  // user authentication eventlisteners, hide and show divs
  $('.signup-link').on('click', () => {
    $('.auth').hide()
    $('.sign-up-nav').show('slow')
  })
  $('.signin-link').on('click', () => {
    $('.auth').hide()
    $('.sign-in-nav').show('slow')
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.signout-link').on('click', authEvents.onSignOut)
  $('.managepassword-link').on('click', () => {
    $('.change-password-nav').show('slow')
  })
  // restaurant eventlisteners, hide and show divs
  $('.restaurant-divs').hide()
  // create new restaurant
  $('.create-fave-link').on('click', () => {
    $('.restaurant-divs').hide()
    $('.auth-message').hide()
    $('.restaurant-message').hide()
    $('.create-fave').show('slow')
  })
  $('#create-fave').on('submit', restaurantEvents.onCreateNewRestaurant)
  // index all restaurants
  $('.index-fave-link').on('click', restaurantEvents.onIndexRestaurant)
  // show one restaurantEvents
  $('.show-fave-link').on('click', () => {
    $('.restaurant-divs').hide()
    $('.restaurant-content').hide()
    $('.auth-message').hide()
    $('.restaurant-message').hide()
    $('.show-fave').show('slow')
  })
  $('#show-fave').on('submit', restaurantEvents.onShowRestaurant)
})
