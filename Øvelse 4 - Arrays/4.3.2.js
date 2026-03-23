
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

console.log(kunde2.email);
console.log(kunde3.navn + kunde3.lokation);
console.table(kunde1);

//change kontaktperson and display change
kunde1.kontaktperson = "Malthe"
console.log("Ny kontaktperson for kunde1 er " + kunde1.kontaktperson);

//delete attribute email
delete kunde1.email;
console.table(kunde1);

//modificer kunde
function modificerKunde(kundeObjekt, kundeAttribut, nyVærdi) {
    console.log("Ændrer: " + kundeAttribut + `\n til: ` + nyVærdi + `\n for: ` + kundeObjekt.navn);
    kundeObjekt.kundeAttribut = nyVærdi;
    console.table(kundeObjekt);
}

modificerKunde(kunde2,"kontaktperson", "salg@netto.dk");