// Ækvivalensklasser for rabat
const rabatter = [
    0, 1, 0.25, // tal i [0..1]
    0.25, // streng med tal
    15 // uden for [0..1]
];
// Grænseværdier for pris
const priser = [0, 100];
// funktionen der skal testes
function rabatPris_bad(pris, rabat) {
    return pris - pris * rabat;
}
// Indlejret for-of til udskrifter: simple [in]/[out]-udskrifter
for (const pris of priser) {
    for (const rabat of rabatter) {
        // [in]
        console.log([pris, rabat, typeof (rabat)]);
        
        // her er beregningen
        const out = rabatPris_bad(pris, rabat);

        // [out]
        console.log(out);

    }
}