// Egne fejltyper
class InputError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "InputError";
    }
}// Validering af brugerinput (kunde-objekt)
function parseKunde(raw) {
    if (!raw || typeof raw.navn !== "string" || raw.navn.trim() === "") {
        throw new InputError("Mangler navn");
    }
    if (!raw.email || typeof raw.email !== "string" || raw.email.trim() ===
        "") {
        throw new InputError("Mangler email");
    }
    const rabat = Number(raw.rabat) || 0; // valgfri normalisering
    return { navn: raw.navn.trim(), email: raw.email.trim(), rabat };
}
// Selektiv håndtering af InputError
function handleSubmit(input) {
    try {
        const k = parseKunde(input);
        console.log("[OK]", k);
        return k;
    } catch (err) { //Så snart en error bliver kastet, køres catch, og der bliver så kastet ud i konsollen hvad fejlkoden er
        if (err instanceof InputError) {
            console.log("[Inputfejl]", err.message);
            return null; // venlig håndtering
        }
        throw err; // andre fejl genkastes
    }
}
// Eksperimentér:
handleSubmit({ navn: "Anna", email: "a@b.dk", rabat: "0.25" }); // Returnere bare resultatet af parseKunde
handleSubmit({ navn: "", email: "a@b.dk" }); // Returnere Inputfejl, mangler navn. "" evaluerer til false
handleSubmit({ email: "a@b.dk" }); // Returnere Inputfejl, mangler navn. Property navn mangler, og derfor false
handleSubmit("");
