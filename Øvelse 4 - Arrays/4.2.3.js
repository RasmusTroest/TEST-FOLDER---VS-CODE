let kundeliste = ["A.C. Hansen", "Peters cykler", "De Franske Oste"]

//3.1
console.log(kundeliste[0]);
console.log(kundeliste[1]);
console.log(kundeliste[2]);

//3.2
kundeliste[1] = "Peters Cykler";
console.log(kundeliste[1]);

//3.3
kundeliste.push("Pro Skishop");
console.log(String(kundeliste[3]) + `\nlenght of string is ` + String(kundeliste.length));

//3.4
function opg3_4() {
    while (kundeliste.length > 0) {
        let førsteKunde = kundeliste.shift();
        console.log("String length is now: " + String(kundeliste.length) + `\nFørste kunde er: ` + førsteKunde);
    }
};

//3.5
function behandlKunde(array) {
    while (kundeliste.length > 0) {
        let førsteKunde = kundeliste.shift();
        console.log(`Behandler kunde: ` + førsteKunde);
    }
    if (kundeliste.length == 0) {
        console.log("Ingen kunder i kø")
    }
}
/*behandlKunde()=>
Behandler kunde: A.C. Hansen
Behandler kunde: Peters Cykler
Behandler kunde: De Franske Oste
Behandler kunde: Pro Skishop
Ingen kunder i kø
*/

//3.6
function sætIKø(array, newElement) {
    array.push(newElement);
    console.log(newElement + " er sat i kø");
    console.log("Køen er nu følgende: " + (array));
}

/*sætIKø(kundeliste,"Ralles Radler") =>
Ralles Radler er sat i kø
Køen er nu følgende: A.C. Hansen,Peters Cykler,De Franske Oste,Pro Skishop,Ralles Radler
*/

//3.7
function modificerKunde(kundeliste, index, nyKunde) {
    if (kundeliste[index] !== undefined) {
        console.log(kundeliste[index] + " ændres til " + nyKunde);
        kundeliste[index] = nyKunde;
        console.log(kundeliste);
    } else {
        console.log("Forkert index")
    }
}

/*
modificerKunde(kundeliste, 1, "Ralles Radler") =>
    Peters Cykler ændres til Ralles Radler
[ 'A.C. Hansen', 'Ralles Radler', 'De Franske Oste', 'Pro Skishop' ]


modificerKunde(kundeliste, 8, "Ralles Radler")=>
    Forkert index
*/