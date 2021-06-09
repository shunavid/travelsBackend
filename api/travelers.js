const express = require("express");

const {
  getTraveler,
  getTravelers,
  createTraveler,
  deleteTraveler,
  updateTraveler,
} = require("../controllers/travelers.js");

const authenticate = require("../middlewares/authenticate");

const api = express.Router();

api.route("/").get(getTravelers).post(createTraveler);

api.route("/:id").get(getTraveler).delete(deleteTraveler).put(updateTraveler);

module.exports = api;
