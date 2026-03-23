class KundeListe {
    constructor(navn) {
        this.navn = navn;
        this.kunder = [];
    }
    tilføjKunde(kunde) {
        this.kunder.push(kunde);
    }
    udskrivKunder() {
        if (this.kunder.length > 0) {
            this.kunder.forEach(element => {
                console.log(`${element.navn} - ${element.adresse}`)
            })
        } else {
            console.log("Der er ikke nogen kunder i kundelisten")
        }
    }
}
class Kunde{
    constructor(navn, adresse) {
        this.navn = navn;
        this.adresse = adresse;
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

let kundeListe1 = new KundeListe(
    "Kunder 2025"
);

kundeListe1.udskrivKunder();

kundeListe1.tilføjKunde(kunde1);
kundeListe1.tilføjKunde(kunde2);

kundeListe1.udskrivKunder();