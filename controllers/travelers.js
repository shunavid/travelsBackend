const Traveler = require("../models/Traveler");

const getTravelers = async (req, res, next) => {
  try {
    const travelers = await Traveler.find();

    res.json({
      success: true,
      msg: "Show all Traveler",
      data: travelers,
    });
  } catch (err) {
    next(err);
  }
};

const getTraveler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const traveler = await Traveler.findById(id);
    res.json({
      success: true,
      msg: "Show selected Traveler",
      data: traveler,
    });
  } catch (err) {
    next(err);
  }
};

const createTraveler = async (req, res, next) => {
  try {
    const { FirstName, LastName, Email, Gender, PhoneNumber, Age } = req.body;
    const traveler = await Traveler.create({
      FirstName,
      LastName,
      Email,
      Gender,
      PhoneNumber,
      Age,
    });

    res.json({
      success: true,
      msg: "New passenger Created",
      data: traveler,
    });
  } catch (err) {
    next(err);
  }
};

const updateTraveler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { FirstName, LastName, Email, Gender, PhoneNumber, Age } = req.body;

    const traveler = await Traveler.findByIdAndUpdate(
      id,
      { FirstName, LastName, Email, Gender, PhoneNumber, Age },
      { new: true }
    );

    res.json({
      success: true,
      msg: `traveler with id ${id} updated`,
      data: traveler,
    });
  } catch (err) {
    next(err);
  }
};

const deleteTraveler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const traveler = await Traveler.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `traveler with id ${id} deleted`,
      data: traveler,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTraveler,
  getTravelers,
  createTraveler,
  updateTraveler,
  deleteTraveler,
};
