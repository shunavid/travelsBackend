const mongoose = require("mongoose");
const { Schema } = mongoose;

const TravelerSchema = new Schema({
  // FirstName: {
  //   type: String,
  //   required: [true, "Please add a First Name"],
  //   maxlength: [75, "The First Name can be max 75 chars long"],
  // },
  // LastName: {
  //   type: String,
  //   required: [true, "Please add a Last Name"],
  // },
  // Email: {
  //   type: String,
  //   required: [true, "Please add an Email"],
  //   maxlength: [75, "The Email can be max 75 chars long"],
  // },
  // Gender: {
  //   type: String,
  // },
  // PhoneNumber: {
  //   type: Number,
  // },

  // Age: {
  //   type: Number,
  // },

  UserName: {
    type: String,
    required: [true, "Please add an username"],
  },
  Password: {
    type: String,
    required: [true, "Please add your password"],
    minLength: [6, "please add a password that is at least six character"],
    select: false,
  },
});

//FirstName, LastName, Email, Gender, PhoneNumber, Age, Password
// User --> users
// Movie --> movies
module.exports = mongoose.model("Traveler", TravelerSchema);
