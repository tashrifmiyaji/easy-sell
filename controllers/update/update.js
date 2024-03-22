// internal input
const FruitList = require("../../models/fruitList");

const restock = async function (req, res, next) {
	const fruitName = await FruitList.findOne({
		addFruitName: req.body.restockFruitName,
	});
	const fruitId = fruitName._id;

	// PUT TODO

	const result = await FruitList.findByIdAndUpdate(
		{ _id: fruitId },
		{
			$set: {
				addFruitQuantity: req.body.restockFruitQuantity,
			},
		},
		{
			new: true,
			useFindAndModify: false,
		}
	)
		.then((message) => {
			next();
		})
		.catch((err) => {
			res.status(500).json({
				error: "There was a problem!",
			});
		});
	// console.log(result);
};

const sell = async function (req, res, next) {
	try {
		const fruitName = await FruitList.findOne({
			addFruitName: req.body.sellingFruitName,
		});
		const fruitId = fruitName._id;
		const fruitQuantity =
			Number(fruitName.addFruitQuantity) -
			Number(req.body.sellingFruitQuantity);

		// PUT TODO

		const result = await FruitList.findByIdAndUpdate(
			{ _id: fruitId },
			{
				$set: {
					addFruitQuantity: fruitQuantity,
				},
			},
			{
				new: true,
				useFindAndModify: false,
			}
		).then((message) => {
			next();
		});
	} catch (err) {
		next("your sell quantity is geterthen stock quantity!")
	}
};

module.exports = {
	restock,
	sell,
};
