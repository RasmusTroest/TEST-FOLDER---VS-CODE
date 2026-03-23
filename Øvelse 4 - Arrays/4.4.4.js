let kundeliste = [];
let kunde1 = {
    navn: "Bilka",
    lokation: "Aarhus",
    email: "info@bilka.dk",
    kontaktperson: "Jørgen"
};

let kunde2 = {
    navn: "Netto",
    lokation: "København",
    email: "info@netto.dk",
    kontaktperson: "Ole"
};

let kunde3 = {
    navn: "Føtex",
    lokation: "Frederiksberg",
    email: "info@føtex.dk",
    kontaktperson: "Flemming"
};

function sætKundeIKø(kundeliste,kundeObjekt) {
    kundeliste.push(kundeObjekt);
    console.table(kundeliste)
}

sætKundeIKø(kundeliste, kunde1);
sætKundeIKø(kundeliste, kunde2);
sætKundeIKø(kundeliste, kunde3);

kundeliste.forEach(kunde => {
    console.log(kunde.lokation);
});