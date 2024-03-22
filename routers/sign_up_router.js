// external input
const express = require("express")
// internal input
const { getSign_up, addUser } = require("../controllers/sign-up/sign_up_controller")
const { sign_upValidation } = require("../controllers/sign-up/sign_upValidation")
const { getFruitList } = require("../controllers/getfrute/getfruit")

const router = express.Router()

// sign-up page
router.get("/", getSign_up);
router.all("/", sign_upValidation, addUser, getFruitList);


module.exports = router; 