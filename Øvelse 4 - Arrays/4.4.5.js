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

function nytKundeNavn(kundeObject, nytNavn) {
    console.log("Gammelt navn: " + kundeObject.navn);
    console.log("Nyt navn: " + nytNavn)
    kundeObject.navn = nytNavn;
    console.table(kundeObject)
}

nytKundeNavn(kunde3,"Lidl")