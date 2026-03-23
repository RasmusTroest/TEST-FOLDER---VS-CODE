const produkt = {
    varenr: "A12",
    pris: 100,
    moms: 0.25,
    total() {
        return this.pris * (1 + this.moms);
    },
    setPris(n) {
        if (n > 0) {
            this.pris = n
        }
    }
};

console.log(produkt.total());
produkt.setPris(200)
console.log(produkt.total());