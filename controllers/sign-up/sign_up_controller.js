// external input
const bcrypt = require("bcrypt");
// internal input
const User = require("../../models/People");

// get sign-up page
function getSign_up(req, res, next) {
    res.render("sign_up");
  }

  // add user
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  

  // save user or send error
  try {
    await newUser.save();
    next();
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
} 

module.exports = {
    getSign_up,
    addUser
}