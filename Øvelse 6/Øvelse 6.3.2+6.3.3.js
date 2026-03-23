class Playliste {
    constructor(navn, genre) {
        this.navn = navn;
        this.genre = genre;
        this.sange = [];
        this.alleKunstnere = [];
    }
    antalSange() {
        console.log("Antal sange i samlingen: " + this.sange.length);
    }
    tilføjSange(sang) {
        this.sange.push(sang);
        this.alleKunstnere.push(sang.kunstner);
    }
    listTitler() {
        console.log("Sangtitler i samlingen:");
        this.sange.forEach(element => {
            console.log(element.navn)
        });
    }
    randomSong() {
        console.log("Tilfælding sang fra array:");
        console.table(
            this.sange[Math.floor(Math.random()*this.sange.length)]
        )
    }
    sangeAfKunstner(navn) {
        console.table(this.sange.filter(sange=>sange.kunstner==navn))
    }
}

class Sange {
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

playliste1.tilføjSange(sang1);

playliste1.tilføjSange(sang2);

playliste1.antalSange();

playliste1.listTitler();

playliste1.randomSong();

playliste1.sangeAfKunstner("Guns n Roses");