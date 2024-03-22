// external input
const express = require("express")
// internal input
const { fruitList, fruitListValidation } = require("../controllers/frutitList/fruitList")
const { getFruitList } = require("../controllers/getfrute/getfruit")

const router = express.Router()

// login page
router.post("/fruitList", fruitListValidation, fruitList, getFruitList);

module.exports = router; 