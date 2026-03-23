function opg5_2_1() {
    let gemtListe = [];

    function forHver(array, handling) {
        let counter = 0
        for (let element of array) {
            console.log(handling(element));
            if (element > 10) {
                counter++;
            }
        }
        console.log(`Der er ${counter} tal i input over 10`)
    }

    function forHverGem(array, handling, gemtListe) {
        for (let element of array) {
            gemtListe.push(handling(element));
        }
        return gemtListe;
    }
    function dobbel(x) {
        return x * 2;
    }
    forHver([1, 2, 11], dobbel);

    console.log(gemtListe);
    forHverGem([1, 2, 3], dobbel, gemtListe);
    console.log(gemtListe);
    //5.2.1.4
    //forHver([1, 2, 3], console.log(100)); //Fejler console.log(100), bliver evaluteret til en værdi, som så ikke kan bruges som funktion
    //forHver([1, 2, 3], console.log); Returnere faktisk en del undefined, da den laver console.log(console.log())
}

function lavRabatberegner(rabatSats) {
    const rabatBeregner = function (pris) {
        return pris * (1 - rabatSats);
    };
    return rabatBeregner;
}
const premium = lavRabatberegner(0.2);
const studieRabat = lavRabatberegner(0.15);
const ingenRabat = lavRabatberegner(0);
const fuldRabat = lavRabatberegner(1);
console.log(premium(100)); // 80

let kundeListe = [
    kunde0 = {
        navn: "Anna",
        rabat: studieRabat
    },
    kunde1 = {
        navn: "Magnus",
        rabat: premium
    },
    kunde2 = {
        navn: "Malthe",
        rabat: ingenRabat
    },
    kunde3 = {
        navn: "Rasmus",
        rabat: fuldRabat
    }
];
let varePris = 100;
for (let element of kundeListe) {
    console.log(`Kunden ${element.navn} har rabatpris på ${element.rabat(varePris)}`)
}
console.log(`Varens oprindelige pris var: ${varePris}`);