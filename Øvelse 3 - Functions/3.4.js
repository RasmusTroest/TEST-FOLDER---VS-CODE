//3.4.1
function square(n) {
    return n * n
}
let start = 1;
let end = 6;
let total = 0;

while (start <= end) {
    total = total + start; start++
}
console.log("Summen er: " + total);

for (let i = 1; i <= 5; i++) {
    console.log("Kvadratet af " + i + " er " + square(i))
}
let k = 1;
do {
    if (k % 2 === 0) {
        console.log(k + " er lige")
    } else {
        console.log(k + " er ulige")
    } k++
} while (k <= 5);
function greet(name) {
    return "Hej " + name + "!"
}
console.log(greet("Anna"));
console.log(greet("Mikkel"));
if (total > 15) {
    console.log("Stor sum!")
} else {
    console.log("Lille sum.")
}

//3.4.2
function simulateNameRoll() {
    // Array of student names
    const students = [
        "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace",
        "Hank", "Ivy", "Jack", "Kara", "Liam", "Mona", "Nina",
        "Oscar", "Paul", "Quinn", "Rita", "Sam", "Tina"
    ];
    // Initialize global variables:
    let presentStudents = [];
    let absentStudents = [];
    let totalStudents = students.length;
    // Loop through students and push random student to be absent:
    while (absentStudents.length < 3) {
        let randomIndex = Math.floor(Math.random() * totalStudents);
        let student = students[randomIndex];
        if (!absentStudents.includes(student)) {
            absentStudents.push(student);
        }
    }
    // Loop through absentStudents and push NOT absentStudents to presentStudents:
    for (let i = 0; i < totalStudents; i++) {
        let student = students[i];
        if (!absentStudents.includes(student)) {
            presentStudents.push(student);
        }
    }
    // Start Roll Call -- Loop through students and print if the the student is absent or present:
    console.log("Roll Call:");
    for (let i = 0; i < totalStudents; i++) {
        let student = students[i];
        if (absentStudents.includes(student)) {
            console.log(`${student} is absent.`);
        }
        else {
            console.log(`${student} is present.`);
        }
    }
    // Print list of absent students:
    console.log("\nAbsent Students:");
    let i = 0;
    while (i < absentStudents.length) {
        console.log(`${absentStudents[i]} is absent.`);
        i++;
    }
    // Print list of present students:
    console.log("\nPresent Students:");
    for (let i = 0; i < presentStudents.length; i++) {
        console.log(`${presentStudents[i]} is present.`);
    }
}
// Call the function to simulate the name roll:
simulateNameRoll();