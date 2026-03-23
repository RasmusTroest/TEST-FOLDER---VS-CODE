//3.2.1
let navn = "Bo";
function sigHej() {
    console.log("Hej, " + navn);
}
sigHej()
console.log(navn);

//3.2.3
let x = 5;
function ydre() {
    let x = 10;
    function indre() {
        let x = 15;
        console.log(x);
    }
    console.log(x);
    indre();
};
console.log(x);
ydre();

//3.2.4
const f = function (x) {
    x = x + 1;
    console.log(`inde i f(x): x =`, x);
    return x;
};
let x = 3;
let z = f(x);
console.log(`udenfor f(x): x =`, x)

//3.2.5
const f = function (y) {
    //Her ændres ikke på den lokale x, som opg. 3.2.4, men den tager fat i det ydre x og ændrer denne variabel.
    // I opgave 3.2.4 referer x inde i funktionen til den lokale x.
    x = x + 1;
    console.log(`inde i f(x): x =`, x);
    return x;
};
let x = 3;
let z = f(x);
console.log(`udenfor f(x): x =`, x);