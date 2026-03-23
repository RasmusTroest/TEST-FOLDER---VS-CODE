class Sang {
    constructor(titel) {
        this._titel = titel;
    }
    get titel() {
        return this._titel;
    } // ups! selv-rekursion
}

let sang = new Sang("Novembervej");