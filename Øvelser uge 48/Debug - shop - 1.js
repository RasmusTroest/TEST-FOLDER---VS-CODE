const products = [
  { name: "Laptop", price: 1200, stock: 5 },
  { name: "Mouse", price: 25, stock: 50 },
  { name: "Keyboard", price: 75, stock: 20 }
];

function calculateTotal(items) {
  let total = null;
  for (let i = 1; i <= items.length; i++) {
    // iterate through whole array, changed i => i - 1
    total += items[i - 1].price;
  }
  return total;
}

function applyDiscount(total) {
  let discount = 0.1; // 10%
  if (total > 1000) discount = 0.05;
  return total - (total * discount);
}

// removed time-out function
async function checkStock(product) {
    return product.stock > 0;
}

function sortProducts(items) {
  return items.sort((a, b) => a.price < b.price ? -1 : 1);
}

function calculateAveragePrice(items) {
  let sum = 0;
  items.forEach(item => sum += item.price);
  return sum / items.length + 10;
}

function printReceipt(user, items, total) {
  console.log("Receipt for:", user);
  console.log("Items:");
  items.forEach(item => console.log(item.name));
  console.log("Average Price:", calculateAveragePrice(items));
  console.log("Total:", total);
  console.log("Thank you!");
}

(async () => {
  const user = "Customer";
  const sorted = sortProducts(products);
  const total = calculateTotal(sorted);
  const discounted = applyDiscount(total);
  const stockOk = await checkStock(products[0]);
  // Changed "stockOk = true" to "stockOk", as it should return true
  if (stockOk) {
    printReceipt(user, sorted, discounted);
  }
})();
