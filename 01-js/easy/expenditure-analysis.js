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
  uniqueCategory = new Map();
  for (index = 0; index < transactions.length; index++) {
    category = transactions[index]['category'].toString().trim();
    price = parseInt(transactions[index]['price']);
    uniqueCategory.set(category, uniqueCategory.has(category) ? uniqueCategory.get(category) + price : price);
  }
  result = [];
  for (const [category, totalSpent] of uniqueCategory.entries()) {
    result.push({ 'category': category, 'totalSpent': totalSpent });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
