
// internal imports
const User = require("../../models/People");

// add user
const sign_upValidation = async function (req, res, next) {
  const username = await User.findOne({ username: req.body.username });
  const mobile = await User.findOne({ mobile: req.body.mobile });
  const email = await User.findOne({ email: req.body.email });
  if (username) {
    next("username is already exist!")
  }
  else if (mobile) {
    next("mobile is already exist!")
  }
  else if (email) {
    next("email is already exist!")
  } else {
    next()
  }

}


module.exports = { 
sign_upValidation
};