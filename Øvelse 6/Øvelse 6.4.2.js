class Produkt {
    constructor(varenr, pris, moms = 0.25) {
        this.varenr = varenr;
        this.pris = pris;
        this.moms = moms;
    }
    total() {
        return this.pris + this.pris * this.moms;
    }
}

class FysiskProdukt extends Produkt {
    constructor(varenr, pris, moms = 0.25) {
        super(varenr, pris, moms);
        this.fragt = 39;
    }
    total() {
        return super.total() + this.fragt;
    }
}

class DigitaltProdukt extends Produkt {
    constructor(varenr, pris, moms = 0.25) {
        super(varenr, pris, moms);
    }
}

function kurvTotal(varer) {
    let total = 0;
    varer.forEach(element => {
        total += element.total();
    });
    console.log(`Din kurvs total er:\n${total}`);
}

let subs = new DigitaltProdukt(1, 100);
let papkasse = new FysiskProdukt(2, 10);
let dør = new FysiskProdukt(3, 200);
let licens = new DigitaltProdukt(4, 100);

let varer = [
    subs, papkasse, dør, licens
];

kurvTotal(varer);
