const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  UserName: {
    type: String,
    required: [true, "Please add UserName"],
    maxlength: [75, "The User Name can be max 75 chars long"],
  },
  Password: {
    type: String,
    required: [true, "Please add your password"],
    max: 1024,
    min: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
