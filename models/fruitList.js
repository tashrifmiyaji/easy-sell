const mongoose = require("mongoose");

const fruitList = mongoose.Schema(
  {
    addFruitName: {
      type: String,
      required: true,
      trim: true,
    },
    addFruitQuantity: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const addFruitList = mongoose.model("fruitList", fruitList);

module.exports = addFruitList; 