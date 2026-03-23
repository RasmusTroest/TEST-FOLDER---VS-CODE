//1
let navne = ['Anders', 'Andreas', 'Anna'];
// Med loop igennem indicerne (også muligt med in):
for (let i = 0; i < navne.length; i++) {
    console.log(navne[i]);
};

//Loops through each "navn" and prints it
navne.forEach(navn => {
    console.log(navn)
});


//2
const flowers = ['peony', 'daffodil', 'marigold'];

//Adds "lily" to list
function addFlower(arr) {
    arr.push('lily');
}
addFlower(flowers);
console.table(flowers);


//3
const koordinatSæt = [
    [2, 3],
    [3, 5],
    [3, 6]
];
console.log(koordinatSæt[0][1] == 3)

koordinatSæt.forEach(koordinat => {
    console.log(koordinat)
});

//3.1
const tripletter = [
    [1, 2, 3],
    [2, 2, 2],
    [7, 9, 8]
];
//Checks if all attributes of object is the same and prints if true
for ([a, b, c] of tripletter) {
    if (a == b && a == c) {
        console.log("Alle er ens", [a, b, c]);
    }
}