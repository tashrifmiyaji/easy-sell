// internal input
const FruitList = require("../../models/fruitList");

async function getFruitList(req, res, next) {
   // 1
	let fruitname1
	let quantity1
	// 2
	let fruitname2
	let quantity2
	// 3
	let fruitname3
	let quantity3
	// 4
	let fruitname4
	let quantity4
	// 5
	let fruitname5
	let quantity5
	// GET ALL THE TODOS
	await FruitList.find()
		.select({
			_id: 0,
			date: 0,
		}) 
		.then((data) => {
			// 1
			if (data[0]) {
				fruitname1 = data[0].addFruitName
				quantity1 = data[0].addFruitQuantity
			} else {
				fruitname1 = "fruit name"
				quantity1 = '0'
			}

			// 2
			if (data[1]) {
				fruitname2 = data[1].addFruitName
				quantity2 = data[1].addFruitQuantity
			} else {
				fruitname2 = "fruit name"
				quantity2 = '0'
			}

			// 3
			if (data[2]) {
				fruitname3 = data[2].addFruitName
				quantity3 = data[2].addFruitQuantity
			} else {
				fruitname3 = "fruit name"
				quantity3 = '0'
			}

			// 4
			if (data[3]) {
				fruitname4 = data[3].addFruitName
				quantity4 = data[3].addFruitQuantity
			} else {
				fruitname4 = "fruit name"
				quantity4 = '0'
			}

			// 5
			if (data[4]) {
				fruitname5 = data[4].addFruitName
				quantity5 = data[4].addFruitQuantity
			} else {
				fruitname5 = "fruit name"
				quantity5 = '0'
			}
			res.render("main", {
				// 1
                fruitname1,
                quantity1,
				// 2
                fruitname2,
                quantity2,
				// 3
                fruitname3,
                quantity3,
				// 4
                fruitname4,
                quantity4,
				// 5
                fruitname5,
                quantity5,

            });
		})
		.catch((err) => {
			res.status(500).json({
				error: "There was a problem!",
			});
			console.log(err);
		});
}



module.exports = {
	getFruitList,
};
