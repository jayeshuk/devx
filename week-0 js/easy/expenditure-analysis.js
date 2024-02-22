/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let resSpend = {};

  transactions.forEach(element => {
    if(resSpend[element.category] === undefined){
      resSpend[element.category] = element.price
    }else{
      resSpend[element.category] += element.price
    }
  });

  let result = Object.keys(resSpend).map(key => ({category:key, totalSpent: resSpend[key]}))
  return result;
}

module.exports = calculateTotalSpentByCategory;
