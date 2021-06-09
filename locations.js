const express = require("express");
const {
  getLocations,
  getLocation,
  createLocation,
  updateLocation,
  deleteLocation
} = require('../controllers/locations');

const api = express.Router();

api
  .route("/")
  .get(getLocations)
  .post(createLocation)

api
  .route('/:id')
  .get(getLocation)
  .put(updateLocation)
  .delete(deleteLocation)

// locahost:5000/users/:id/orders

module.exports = api;