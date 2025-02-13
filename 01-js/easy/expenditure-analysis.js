/*
    Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
    and return a list of objects where each object is unique category-wise and has total price spent as its value.
    Transaction - an object like { itemName, category, price, timestamp }.
    Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
  */

function calculateTotalSpentByCategory(transactions) {
  let ans = {};
  for(let i=0;i<transactions.length;i++){
    const {category,price}=transactions[i];
    if(ans[category]==undefined){
      ans[category]=price;
    }else{
      ans[category]+=price;
    }
  }
 
  const results = Object.entries(ans).map(([category, total])=>({
    "category" : category,
    "totalSpent" : total
  }));
  return results;
}

module.exports = calculateTotalSpentByCategory;
