// internal input
const FruitList = require("../../models/fruitList");

const fruitListValidation = async function (req, res, next) {
	const fruitName = await FruitList.findOne({
		addFruitName: req.body.addFruitName,
	});

	if (fruitName) {
		next("this fruit list is already exist!");
	} else {
		next();
	}
};

// fruit list
async function fruitList(req, res, next) {
	let addFruitList;
	addFruitList = new FruitList({
		...req.body,
	});

	// save fruit list or send error
	try {
		await addFruitList.save();
		next();
	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log(err.message);
	}
}

module.exports = {
	fruitList,
	fruitListValidation,
};
