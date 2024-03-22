
const search_field = document.getElementById("search");
function searchBar() {
	let search_field_values = search_field.value;
	console.log(search_field_values);
}

// show or hide inventory
let inventoryBtn = document.querySelectorAll(".inventory-btn");
let seeInventory = document.querySelectorAll(".see-inventory");

//
function seeInv (i) {
	seeInventory[i].style.display = "none";
	let isHide = true;
	inventoryBtn[i].addEventListener("click", () => {
		if (isHide) {
			seeInventory[i].style.display = "block";
			isHide = false;
		} else {
			seeInventory[i].style.display = "none";
			isHide = true;
		}
	});
};

seeInv(0)
seeInv(1)
seeInv(2)
seeInv(3)
seeInv(4)

// show or hide sell
let sellBtn = document.querySelectorAll(".sell-btn");
let sellDiv = document.querySelectorAll(".sell-div");
let fruitName = document.querySelectorAll(".fruit-name");


//
function seeSell (i) {
	sellDiv[i].style.display = "none";
	let isHide = true;
	sellBtn[i].addEventListener("click", () => {
		if (isHide) {
			sellDiv[i].style.display = "block";
			isHide = false;
		} else {
			sellDiv[i].style.display = "none";
			isHide = true;
		}
	});

};

seeSell(0)
seeSell(1)
seeSell(2) 
seeSell(3)
seeSell(4)


// show or hide restock
let restockBtn = document.querySelectorAll(".restock-btn");
let restockDiv = document.querySelectorAll(".restock-div");

//
function seeRestock (i) {
	restockDiv[i].style.display = "none";
	let isHide = true;
	restockBtn[i].addEventListener("click", () => {
		if (isHide) {
			restockDiv[i].style.display = "block";
			isHide = false;
		} else {
			restockDiv[i].style.display = "none";
			isHide = true;
		}
	});
};

seeRestock(0)
seeRestock(1)
seeRestock(2)
seeRestock(3)
seeRestock(4)


// show or hide new added list
let addListBtn = document.querySelectorAll(".add-list-btn");
let addListDiv = document.querySelectorAll(".add-list");


//
function addList (i) {
	addListDiv[i].style.display = "none";
	let isHide = true;
	addListBtn[i].addEventListener("click", () => {
		if (isHide) {
			addListDiv[i].style.display = "block";
			isHide = false;
		} else {
			addListDiv[i].style.display = "none";
			isHide = true;
		}
	});
};

addList(0)


////////////////////////////
// const container = document.querySelectorAll(".container")
// container[4].style.display = "none"
// container[3].style.display = "none"
// container[2].style.display = "none"
// container[1].style.display = "none"
// container[0].style.display = "none"



// let i 
// function onClickContainer() {
// 	i = 1
// 	if (i === 1) {
// 		container[0].style.display = "block"
// 		i = 2
// 	}
// 	else if (i === 2) {
// 		container[0].style.display = "block"
// 		container[1].style.display = "block"
// 		i = 3
// 	}
// 	else if (i === 3) {
// 		container[0].style.display = "block"
// 		container[1].style.display = "block"
// 		container[2].style.display = "block"
// 		i = 4
// 	}
// 	else if (i === 4) {
// 		container[0].style.display = "block"
// 		container[1].style.display = "block"
// 		container[2].style.display = "block"
// 		container[3].style.display = "block"
// 		i = 5
	
// 	}
// 	else if (i === 5) {
// 		container[0].style.display = "block"
// 		container[1].style.display = "block"
// 		container[2].style.display = "block"
// 		container[3].style.display = "block"
// 		container[4].style.display = "block"
// 	}

// }
// console.log(i);