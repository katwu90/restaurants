'use strict'
const config = require('../config')
const store = require('../store')

const createRestaurant = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/restaurants',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexRestaurant = function () {
  return $.ajax({
    url: config.apiOrigin + '/restaurants',
    method: 'GET'
  })
}

module.exports = {
  createRestaurant,
  indexRestaurant
}
