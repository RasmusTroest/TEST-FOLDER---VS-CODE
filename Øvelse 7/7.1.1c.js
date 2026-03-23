function rabatPris_bad(pris, rabat) {
    return pris - pris * rabat; // antager: rabat i [0..1]; data kan være "0.25" eller 15
}
const rabatter = [undefined, 0, 0.25, "0.25", 15];
const priser = [0, 100];
const rows = [];
for (const rabat of rabatter) {
    for (const pris of priser) {
        const out = rabatPris_bad(pris, rabat);
        rows.push({
            pris,
            rabat,
            type: typeof rabat,
            out,
            ok: Number.isFinite(out) && out >= 0 && out <= pris // simpelt check for rimelige værdier
        });
    }
}
console.table(rows);