// external input
const express = require("express")
// internal input
const { login } = require("../controllers/login/login_controler")
const { loginValidation } = require("../controllers/login/login_validation")
const { getFruitList } = require("../controllers/getfrute/getfruit")

const router = express.Router()

// login page
router.get("/login", login);
router.post("/login/easysell", loginValidation, getFruitList);

module.exports = router; 