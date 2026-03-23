// Funktion med kontraktkrav
function rabatPris(pris, rabat) {
    if (typeof pris !== "number" || !Number.isFinite(pris)) {
        throw new TypeError("pris skal være et tal");
    }
    if (typeof rabat !== "number" || !Number.isFinite(rabat)) {
        throw new TypeError("rabat skal være et tal");
    }
    if (rabat < 0 || rabat > 1) {
        throw new RangeError("rabat skal ligge i [0..1]");
    }
    return pris * (1 - rabat);
}
// Selektiv catch
function tryRabat(pris, rabat) {
    try {
        const out = rabatPris(pris, rabat);
        console.log("[OK]", { pris, rabat, out });
        return out;
    } catch (err) {
        if (err instanceof RangeError) {
            console.log("[RangeError]", err.message);
            return NaN;
        }
        if (err instanceof TypeError) {
            console.log("[TypeError]", err.message);
            return NaN;
        }
        // andre fejl bobler videre
        throw err;
    }
}
// Eksperimentér: Overvej om de giver fejl? Hvilke? check det!
// tryRabat(100, 0.2);
// tryRabat("100", 0.2); // TypeError
tryRabat(100, 1.5); //RangeError 