class Kunde{
    constructor(navn, adresse) {
        this.navn = navn;
        this.adresse = adresse;
    }
}

class KundeListe{
    constructor(navn) {
        this.navn = navn;
        this.kunder = [];
    }
}

let kunde1 = new Kunde(
    "Peters Cykler",
    "Væltepeters vænge 44"
);

let kunde2 = new Kunde(
    "Amagercykel",
    "Amagerbrogade 100"
);

let kundeListe = new KundeListe(
    "Kunder 2025"
);

kundeListe.kunder.push(kunde1);
kundeListe.kunder.push(kunde2);

console.log(`Samlet antal kunder i kundelisten: ${kundeListe.kunder.length}\n`);
console.table(kundeListe.kunder);