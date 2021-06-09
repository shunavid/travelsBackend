const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registers = (req, res, next) => {
  bcrypt.hash(req.body.Password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      UserName: req.body.UserName,
      // email: req.body.email,
      // phone: req.body.phone,
      Password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json({
          message: "Registers login Successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "An Error occured",
        });
      });
  });
};

const login = (req, res, next) => {
  const UserName = req.body.UserName;
  const Password = req.body.Password;

  User.findOne({
    $or: [{ email: UserName }, { phone: UserName }, { UserName }],
  }).then((user) => {
    if (user) {
      bcrypt.compare(Password, user.Password, function (err, result) {
        if (err) {
          res.json({});
        }
        if (result) {
          let token = jwt.sign({ UserName: UserName }, "secretValue", {
            expiresIn: "48h",
          });
          res.json({
            message: "Login Successfully",
            token,
          });
        } else {
          res.json({
            message: "Password does not Matched!",
          });
        }
      });
    } else {
      res.json({
        message: "User Not Found!!",
      });
    }
  });
};
module.exports = {
  login,
};
