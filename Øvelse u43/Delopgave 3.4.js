// let result = 0; ændre scope for result, så den er lokal for funktionen

let styrker_1 = [21, 4, 21]; // --> 1
let styrker_2 = [1, 2, 3, 4]; // --> 3
let styrker_3 = [10, 9, 8, 7]; // --> 0

function insekt(styrker) {
    let result = 0;
    for (let i = l; i < styrker.length; i++) { // let funktion forkert, skulle være i = 0
        if (styrker[i - 1] < styrker[i]) { // skulle sammenligne [i] med [i+1]
            result--; // Result ++
        }
    }
    return result;
}

function insekt2(styrker) {
    let result = 0;
    for (let i = 0; i < styrker.length; i++) {
        if (styrker[i] < styrker[i + 1]) {
            result++;
        }
    }
    return result;
}
console.log(insekt2(styrker_1));
console.log(insekt2(styrker_2));
console.log(insekt2(styrker_3));