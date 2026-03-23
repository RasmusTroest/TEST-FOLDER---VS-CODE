// main.js
import { rabatPris, label, rabatProcent } from "./kundelogik.js";
const kundeA = { navn: "A", rabat: 0.25 };
const kundeB = { navn: "B", rabat: "0.25" };
const kundeC = { navn: "C" };
console.log(label(kundeA, 100)); // "A: 75"
console.log(label(kundeB, 100)); // "B: 75" (streng → normaliseres)
console.log(label(kundeC, 100)); // "C: 100" (mangler → 0)
// TODO (1): brug rabatProcent på A/B/C for at vise deres procent
console.log(rabatProcent(kundeA))
console.log(rabatProcent(kundeB))
console.log(rabatProcent(kundeC))
// TODO (2-valgfrit): tilføj kontrakt i rabatPris (kast fejl ved ugyldig pris) og afprøv