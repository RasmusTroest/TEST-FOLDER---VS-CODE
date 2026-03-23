//Opgave 5.1.1
function opg5_1_1() {
    function plusEn(x) { return x + 1; }
    function gangeTo(x) { return x * 2; }
    function kvadrat(x) { return x * x; }
    const funktioner = [plusEn, gangeTo, kvadrat];

    let gemtListe = [];

    for (let f of funktioner) {
        for (let i = 1; i <= 5; i++) {
            gemtListe.push(`${f.name}(${i}) = ${f(i)}`);
        }
    }

    console.table(gemtListe);

    let number = Number(prompt("Skriv et tal"))

    for (let f of funktioner) {
        gemtListe.push(`${f.name}(${number}) = ${f(number)}`);
    }

    console.table(gemtListe);
}

//Opgave 5.1.2
const standardRabat = function (pris) {
    return pris - 50;
}
let kundeListe = [
    kunde0 = {
        navn: "Anna",
        rabat: function (pris) {
            return pris * 0.9;
        }
    },
    kunde1 = {
        navn: "Magnus",
        rabat: standardRabat
    },
    kunde2 = {
        navn: "Malthe",
        rabat: function (pris) {
            return pris * 2;
        }
    }
]
for (kunde of kundeListe) {
    console.log(`Pris for ${kunde.navn}: ${kunde.rabat(100)}`);
}