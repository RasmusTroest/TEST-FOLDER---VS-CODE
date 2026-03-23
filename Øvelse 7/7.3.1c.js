let busy = false;
function transaktion(pris, rabat) {
    busy = true;
    console.log("[start] busy =", busy);
    try {
        if (!Number.isFinite(pris)) {
            // brug en tydelig fejlbesked
            throw new Error("Ugyldig pris (forventet et endeligt tal)");
        }
        const r = (typeof rabat === "number" && rabat >= 0 && rabat <= 1) ?
            rabat : 0;
        const out = pris * (1 - r);
        console.log("[calc]", { pris, rabat: r, out });
        return out;
    } catch (err) {
        // Fanges her — uanset hvad vi kastede i try-blokken
        console.log("[catch]", { name: err.name, message: err.message });
        return NaN;
    } finally {
        // Kører ALTID, også når der kastes fejl
        busy = false;
        console.log("[finally] busy =", busy);
    }
}
// Eksperimentér:
console.log("→ OK:");
console.log("result =", transaktion(100, 0.25));
console.log("[efter kald] busy =", busy);
console.log("Ugyldig pris:");
console.log("result =", transaktion(NaN, 0.25));
console.log("[efter kald] busy =", busy);
console.log("Ugyldig type:");
console.log("result =", transaktion("100", 0.25));
console.log("[efter kald] busy =", busy);