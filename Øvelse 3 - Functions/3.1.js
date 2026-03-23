/*
beregnRabat:
Input: pris
Output: rabat-pris
Trin:
1: beregn pris med 10% rabat
2: returner rabatprisen.
*/
function beregnRabat(pris) {
    let rabatsats = 0.2;
    return pris - (pris * rabatsats);
}
let nyPris = beregnRabat(1000);
console.log("Pris med rabat:", nyPris);


//3.1.2
function sigHej(navn) {
    console.log("Hej, " + navn + "!");
}
sigHej("Camilla");

function dobbeltOgSig(tal) {
    let resultat = tal * 2;
    console.log("Resultat: " + resultat);
    return resultat;
}
dobbeltOgSig(21);


//3.1.3
const sum = function (x,y) {
    if (x + y > 10) {
        return (x+y)+" is greater than 10"
    } else {
        return (x+y)+" is less than or equal to 10"
    }
};

console.log(sum(5, 5));

const countUpTo = function (x) {
    i = 1
    do {
        console.log(i);
        i += 1;
    } while (i <= x)
};
countUpTo(115);

const convert = function (x, y) {
    switch (y) {
        case "kmToMiles":
            console.log(x * 0.621371);
            break;
        case "fahrenheitToCelsius":
            console.log((x - 32) * 5 / 9);
            break;
        case "kiloToTon":
            console.log(x / 1000);
            break;
    }
};
convert(4213421, "kiloToTon");


const convert2 = function (x, y) {
    if (y == "kmToMiles") {
        console.log(x * 0.621371);
    } else if (y == "fahrenheitToCelsius") {
        console.log((x - 32) * 5 / 9);
    } else if (y == "kiloToTon") {
        console.log(x / 1000);
    }
};
convert2(4213421, "kiloToTon");