// Datasæt
const kundeA = { navn: "A", rabat: 0.25 }; // tal
const kundeB = { navn: "B", rabat: 0.25 }; // streng
const kundeC = { navn: "C"}; // mangler rabat
const pris = 100;

// Opgave: indsæt tre logs: [in], [calc], [out]
function rabatLabel(kunde, pris) {
    //[in]
    console.log(`Pris: ${pris}\nRabat: ${kunde.rabat}\nTypeOf på rabat: ${typeof (kunde.rabat)}`);
    const procent = kunde.rabat.toFixed(2);
    const nyPris = pris - pris * kunde.rabat;
    //[Calc]
    console.log(nyPris);
    //[out]
    console.log(procent, " ", nyPris);
    return `[${procent}] ${nyPris}`;
}
// Kør ét af nedenstående kald ad gangen og læs fejlbeskeden + dine logs:
//rabatLabel(kundeA, pris);
//rabatLabel(kundeB, pris);
rabatLabel(kundeC, pris);