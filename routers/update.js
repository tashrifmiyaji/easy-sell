// external input
const express = require("express")
// internal input
const { restock, sell } = require("../controllers/update/update")
const { getFruitList } = require("../controllers/getfrute/getfruit")

const router = express.Router()

//  update
router.all("/restock", restock, getFruitList);
router.all("/sell", sell, getFruitList);

module.exports = router; 