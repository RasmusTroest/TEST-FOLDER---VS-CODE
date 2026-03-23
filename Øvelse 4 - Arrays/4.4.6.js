let kundeliste = [];
let kunde1 = {
    navn: "Bilka",
    lokation: "Aarhus",
    email: "info@bilka.dk",
    kontaktperson: "Jørgen",
    password: "123test"
};

let kunde2 = {
    navn: "Netto",
    lokation: "København",
    email: "info@netto.dk",
    kontaktperson: "Ole",
    password: "123test"
};

let kunde3 = {
    navn: "Føtex",
    lokation: "Frederiksberg",
    email: "info@føtex.dk",
    kontaktperson: "Flemming",
    password: "123test"
};

function correctPassword(kundeObject, forsøgtPassword) {
    if (kundeObject.password == forsøgtPassword) {
        return true
    } else {
        console.log("Forkert adgangskode")
    }
}

correctPassword(kunde2,"123tst")