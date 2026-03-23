// Datasæt
const produkter = [
    { varenr: "A1", navn: "Bog", pris: 199 },
    { varenr: "B2", navn: "Mus", pris: 149 },
    { varenr: "C3", navn: "Kabel", pris: 49 }
];
// Naiv implementering: indexOf på nyt objekt → sammenligner referencer (fejler)
function findProduktByVarenr_bad(vareliste, varenr) {
    const element = { varenr }; // element er et nyt objekt
    const idx = vareliste.indexOf(element);
    if (idx >= 0) { return vareliste[idx] };
    return undefined;
}
// Afprøv ækvivalensklasser (enkle udskrifter)
// "A1" skal gå godt jvnf. produkter
// resten af forespørgslerne er enten ugyldige eller findes ikke i listen
const forespørgsler = [undefined, "A1", "Z9", "a1", " A1 "];
for (const q of forespørgsler) {
    // [in] udskriv { varenr: q, type: typeof q }
    const out = findProduktByVarenr_bad(produkter, q);
    // [out] udskriv out
}
