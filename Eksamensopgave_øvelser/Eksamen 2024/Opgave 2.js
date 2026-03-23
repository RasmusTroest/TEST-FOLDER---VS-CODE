class Bog {
    constructor(titel, forfatter, isbn) {
        this.titel = titel;
        this.forfatter = forfatter;
        this.isbn = isbn;
        this.tilgængelig = true;
        this.skadet = false;
    }
    skiftStatus() {
        this.tilgængelig = !this.tilgængelig;
    }
    skiftSkadet() {
        this.skadet = !this.skadet;
    }
    hentInfo() {
        return this;
    }
}

class Låner {
    constructor(navn, lånerID) {
        this.navn = navn;
        this.lånerID = lånerID;
        this.lånteBøger = [];
        this.karantæne = false;
    }
    lånBog(bog) {
        if (!this.karantæne && bog.tilgængelig && !bog.skadet) {
            this.lånteBøger.push(bog.isbn);
            bog.skiftStatus();
        } else {
            console.log("Bogen kunne ikke udlånes af en af følgende årsager:\nGældende karantæne hos låner\nBog er allerede udlånt\nBog er skadet\n")
        }
    }
    returnerBog(bog) {
        if (!bog.tilgængelig && this.lånteBøger.filter(e => e === bog.isbn.length > 0)) {
            bog.skiftStatus();
            this.lånteBøger = this.lånteBøger.filter(e => e !== bog.isbn);
        }
    }
    sætKarantæne() {
        this.karantæne = true;
    }
    fjernKarantæne() {
        this.karantæne = false;
    }
}

class Bibliotek {
    constructor() {
        this.bøger = [];
        this.lånere = [];
    }
    tilføjBog(bog) {
        this.bøger.push(bog);
    }
    tilføjLåner(låner) {
        this.lånere.push(låner);
    }
    udlån(lånerId, isbn) {
        let bog = this.bøger.find(e => e.isbn === isbn);
        let låner = this.lånere.find(e => e.lånerID === lånerId);
        if (låner && bog) {
            låner.lånBog(bog);
        }
    }
    returnering(lånerId, isbn) {
        let bog = this.bøger.find(e => e.isbn === isbn);
        let låner = this.lånere.find(e => e.lånerID === lånerId);
        if (låner && bog) {
            låner.returnerBog(bog);
        }
    }
    reparation(isbn) {
        let bog = this.bøger.find(e => e.isbn === isbn);
        if (bog) {
            bog.skiftSkadet();
        }
    }
    karantæne(lånerId) {
        let låner = this.lånere.find(e => e.lånerID === lånerId);
        if (låner) {
            låner.sætKarantæne();
        }
    }
    fjernKarantæne(lånerId) {
        let låner = this.lånere.find(e => e.lånerID === lånerId);
        if (låner.karantæne) {
            låner.fjernKarantæne();
        }
    }
}

const bibliotek = new Bibliotek();
const bog1 = new Bog('JavaScript: The Good Parts', 'Douglas Crockford',
    '9780596517748');
const bog2 = new Bog('Hitchhikers guide to the galaxy', 'Douglas Adams',
    '9780345391803');
const bog3 = new Bog('Gödel, Escher, Bach', 'Douglas R Hofstadter', '9780465026562');
const låner1 = new Låner('Alice', '001');
const låner2 = new Låner('Benny', '002');
bibliotek.tilføjBog(bog1);
bibliotek.tilføjBog(bog3);
bibliotek.tilføjLåner(låner1);
bibliotek.tilføjLåner(låner2);
bibliotek.udlån('001', '9780596517748');
//console.log(låner1.lånteBøger); // [{ bog: bog1}]
bibliotek.returnering('001', '9780596517748');
//console.log(låner1.lånteBøger); // []
// Sæt låner i karantæne
bibliotek.karantæne('001');
bibliotek.udlån('001', '9780596517748'); // Alice er i karantæne og kanikke låne bøger.
bibliotek.fjernKarantæne('001');
bibliotek.udlån('001', '9780596517748'); // Alice kan nu låne bøger igen.

//console.log(låner1.lånteBøger); // [{ bog: bog1 }]
// Spær bøger for udlån
bibliotek.reparation('9780465026562');
bibliotek.udlån('002', '9780465026562'); // Bogen er skadet og kan ikke lånes.
bibliotek.reparation('9780465026562');