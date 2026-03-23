class Animal {
    constructor(navn, alder) {
        this.navn = navn;
        this.alder = alder;
    }
    makeNoise() {
        console.log("Ingen lyd")
    }
}

class Cat extends Animal {
    constructor() {
        super("Emil", 2);
        this.lyd = "Miaw";
    }
    makeNoise() {
        console.log(this.lyd);
    }
}
class Dog extends Animal {
    constructor() {
        super("Fido", 5);
        this.lyd = "Vov";
    }
    makeNoise() {
        console.log(this.lyd);
    }
}

let dyr = [
    new Dog, new Cat
];

dyr.forEach(element => {
    element.makeNoise()
});