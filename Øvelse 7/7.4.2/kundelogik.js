// kundelogik.js
// Intern implemention
function normalizeRabat(r) {
    if (typeof r === "number" && r >= 0 && r <= 1) return r;
    if (typeof r === "string" && r.trim() !== "" && Number.isFinite(Number(r))) {
        const n = Number(r);
        return (n >= 0 && n <= 1) ? n : 0;
    }
    return 0;
}
//Offentligt API
export function rabatPris(pris, rabat) {
    const r = normalizeRabat(rabat);
    return pris - pris * r;
}
export function label(kunde, pris) {
    const out = rabatPris(pris, kunde.rabat);
    return `${kunde.navn}: ${out}`;
}
// TODO (1): export function rabatProcent(r) { /* brug normalizeRabat */ }
export function rabatProcent(kunde) {
    const r = Math.round(normalizeRabat(kunde.rabat) * 100);
    return `${kunde.navn}'s rabatprocent: ${r}%`;
}