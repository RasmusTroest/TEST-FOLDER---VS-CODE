const Playliste = {
    navn: "todaysBeats",
    sange: [],
    tilføjSang(s) {
        this.sange.push(s);
    },
    fjernSang(s) {
        this.sange = this.sange.filter(x => x !== s);
    },
    sangAfKunstner(k) {
        return this.sange.filter(x => x.kunstner == k);
    }
}

let sang1 = {
    navn: "Sol over København",
    kunstner: "Kesi"
}

let sang2 = {
    navn: "Swimming Pools",
    kunstner: "Kendrick"
}

let sang3 = {
    navn: "Headlines",
    kunstner: "Drake"
}

console.log(Playliste.sange);
Playliste.tilføjSang(sang1);
Playliste.tilføjSang(sang2);
Playliste.tilføjSang(sang3);
console.log(Playliste.sange);
console.log(Playliste.sangAfKunstner("Kesi"));
Playliste.fjernSang(sang2);
console.log(Playliste.sange);