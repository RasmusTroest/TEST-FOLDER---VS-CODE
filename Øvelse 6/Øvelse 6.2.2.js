class Playliste{
    constructor(navn, genre) {
        this.navn = navn;
        this.genre = genre;
        this.sange = [];
        this.alleKunstnere = [];
    }
    antalSange() {
        return this.sange.length;
    }
    tilføjSange(sang) {
        this.sange.push(sang);
        this.alleKunstnere.push(sang.kunstner)
    }
}

class Sange{
    constructor(navn, kunstner) {
        this.navn = navn;
        this.kunstner = kunstner;
    }
}

let playliste1 = new Playliste(
    "The GOAT's",
    "Rock"
);

let sang1 = new Sange(
    "Highway to Hell",
    "ACDC"
);

let sang2 = new Sange(
    "Welcome to the jungle",
    "Guns n Roses"
);

console.log(playliste1.antalSange());
playliste1.tilføjSange(sang1);
console.log(playliste1.antalSange());
playliste1.tilføjSange(sang2);
console.log(playliste1.alleKunstnere);