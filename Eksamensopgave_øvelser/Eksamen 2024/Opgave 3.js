const punctuation = ['.', ',', '!', '?', ';', ':', '-', '_', '(', ')',
    '[', ']', '{', '}', '"', "'", ' '];

let str = "Dette er en test. Dette er kun en test."


function cleanText(string) {
    cleanString = "";
    for (let i = 0; i < string.length; i++) {
        current = string[i];
        if (!punctuation.find(e => e === current)) {
            cleanString += current;
        }
    }
    let cleanStringFinal = cleanString.toLowerCase();
    return cleanStringFinal
}

function frekvensAnalyse(tekst) {
    let rensetTekst = cleanText(tekst);

    // Opret et objekt til at holde bogstaver og deres frekvenser
    const frekvens = {};

    for (char of rensetTekst) {
        if (char in frekvens) {
            frekvens[char]++;
        } else {
            frekvens[char] = 1;
        }
    }

    // Konvertér objektet til et array af [bogstav, frekvens] par
    const frekvensArray = Object.entries(frekvens);

    // Sortér arrayet efter frekvens i faldende rækkefølge
    frekvensArray.sort((a, b) => b[1] - a[1]);

    return frekvensArray;
}

console.log(frekvensAnalyse(str));