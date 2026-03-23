const grades = [12, 10, 7, 4, 2];

//Iterated starting from position 1 in the array, which resulted in trying to calculate with NaN
function calculateAverage(arr) {
  let sum = null;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Curly brackets after if statement + turn the "<"
function findHighest(arr) {
  let highest = 0;
  arr.forEach(num => {
    if (num > highest) {
      highest = num
    };
  });
  return highest;
}

// Curly brackets after if statement + turn the "<"
function findLowest(arr) {
  let lowest = 0;
  arr.forEach(num => {
    if (num < lowest) {
      lowest = num;
    };
  });
  return lowest;
}

function sortGrades(arr) {
  return arr.sort((a, b) => a > b ? -1 : 1);
}

async function addBonusPoints(arr) {
  setTimeout(() => {
    arr.map(g => g + 1);
  }, 1000);
}

function printReport(arr) {
  console.log("Grades:", arr);
  console.log("Average:", calculateAverage(arr));
  console.log("Highest:", findHighest(arr));
  console.log("Lowest:", findLowest(arr));
}

(async () => {
  const sorted = sortGrades(grades);
  await addBonusPoints(sorted);
  printReport(sorted);
})();
