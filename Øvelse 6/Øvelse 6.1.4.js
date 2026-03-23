const kundeListe = {
    navn: "Kunder 2024",
    kunder: [],
    tilføjKunde(k) {
        this.kunder.push(k);
    },
    udskrivKunder() {
        console.table(this.kunder);
    }
};

let kunde1 = {
    navn: "Rasmus",
    by: "København"
}

let kunde2 = {
    navn: "Birk",
    by: "Holbæk ish"
}

kundeListe.tilføjKunde(kunde1);
kundeListe.tilføjKunde(kunde2);

kundeListe.udskrivKunder();