const kunde1 = {
    navn: "Anna",
    rabatSats: 0.10,
    rabat(pris) {
        let rabatpris = pris + pris * this.rabatSats;
        return rabatpris;
    }
};

const kunde2 = {
    navn: "Rasmus",
    rabatSats: 0.05,
    rabat(pris) {
        let rabatpris = pris + pris * this.rabatSats;
        return rabatpris;
    }
};

const kunde3 = {
    navn: "Magne",
    rabatSats: 0.5,
    rabat(pris) {
        let rabatpris = pris + pris * this.rabatSats;
        return rabatpris;
    }
};

let kundeListe = [
    kunde1,
    kunde2,
    kunde3
];

kundeListe.forEach(element => {
    console.log(
        `Rabatprisen for kunden: ${element.navn}, er: ${element.rabat(100)}`
    )
});