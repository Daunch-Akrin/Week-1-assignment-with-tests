/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {
  //calculate total of price in every category
  let finalPrice = {};
  for(let item of transactions) {
    //check if the category exist in your object
    if(finalPrice[item.category]) {
      finalPrice[item.category] += item.price;
    }
    else {
      finalPrice[item.category] = item.price;
    }
  }
  //making an array of objects by using it's keys
  let keys = Object.keys(finalPrice);
  let answer = [];
  for(let i=0; i<keys.length; i++) {
    let category = keys[i];
    let obj = {
      category: category,
      totalSpent: finalPrice[category]
    }
    answer.push(obj);
  }
  return answer;
}


module.exports = calculateTotalSpentByCategory;
