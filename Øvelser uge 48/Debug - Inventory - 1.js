const inventory = [
  { name: "Phone", price: 800, stock: 10 },
  { name: "Tablet", price: 600, stock: 0 },
  { name: "Headphones", price: 150, stock: 25 }
];

function calculateTotalStock(items) {
  let total = 1; 
  // Changed "<=" to "<"
  for (let i = 0; i < items.length; i++) { 
    total += items[i].stock; 
  }
  return total;
}

function calculateAveragePrice(items) {
  let sum = 0;
  items.forEach(item => sum += item.price);
  return sum / (items.length - 1); 
}

function filterLowStock(items) {
  return items.filter(item => item.stock > 5); 
}

function sortByName(items) {
  return items.sort((a, b) => a.name > b.name ? 1 : -1); 
}

async function updateStock(item, amount) {
  setTimeout(() => {
    item.stock + amount; 
  }, 500);
}

function findMostExpensive(items) {
  let max = items[0].price;
  items.forEach(item => {
    if (item.price < max) max = item.price; 
  });
  return max;
}

function printReport(items) {
  console.log("Inventory Report");
  console.log("Total Stock:", calculateTotalStock(items));
  console.log("Average Price:", calculateAveragePrice(items));
  console.log("Low Stock Items:", filterLowStock(items).map(i => i.name));
  console.log("Most Expensive:", findMostExpensive(items));
}

(async () => {
  const sorted = sortByName(inventory);
  await updateStock(sorted[1], 10); 
  printReport(sorted);
  if (sorted.length = 3) { 
    console.log("All items processed");
  }
})();
