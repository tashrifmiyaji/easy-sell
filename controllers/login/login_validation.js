// external inputs
const bcrypt = require("bcrypt");
// internal imports
const User = require("../../models/People");

// add user
const loginValidation = async function (req, res, next) {
  const user = await User.findOne({ username: req.body.username });
  const plainPassword = req.body.password;
  const hashedPassword = user.password
  const password = bcrypt.compare(plainPassword, hashedPassword)

  if (user && password) {
    next()
  } else {
    next("username or password is invalide!")
  }

}


module.exports = {
loginValidation
}; 