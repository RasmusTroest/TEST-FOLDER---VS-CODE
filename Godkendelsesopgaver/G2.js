let spilleBræt = ["tom", "tom", "tom", "tom", "tom", "tom", "tom", "tom", "tom"]


const spiller1 = "X";
const spiller2 = "O";
const vinderMåder = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function lavEtSpil(spilleBræt) { // Laver en funktion der kpoiere mit spilbrætt, så der spilles på en ren plade hver gang nyt spil starte.
    return [...spilleBræt]; // Kopiere hver række i spilbrættet. 
}

function hvemStarter(spiller1, spiller2) { //Opretter en funktion der tilfældigt vælger hvilken spiller der får lov at starte spillet.
    const spillerne = [spiller1, spiller2]
    let tilfældigSpiller = Math.floor(Math.random() * spillerne.length);
    console.log("Spiller: ", spillerne[tilfældigSpiller], " starter spillet")
    return spillerne[tilfældigSpiller];

}

function harViEnVinder(spilleBræt) { // Opretter en funktion der ska tjekke om vi har en vinder 
    for (let i = 0; i < vinderMåder.length; i++) { // Laver det loop der skal gennemgå spilbrættet 
        let [første, anden, tredje] = vinderMåder[i];
        if (spilleBræt[første] !== "tom" && spilleBræt[første] === spilleBræt[anden] && spilleBræt[anden] === spilleBræt[tredje]) {
            return spilleBræt[første];
        }

    }
    return null;

}


function krydsOgBolle(spilleBræt) {
    let nytSpil = lavEtSpil(spilleBræt); // Laver et nyt spil ved at kalde på min funktion lavEtSpil
    let starterSpiller = hvemStarter(spiller1, spiller2)

    while (!harViEnVinder(nytSpil) && nytSpil.includes("tom")) { // Jeg vil have min kode til at kører mens vi ikke har en vinder og der fortsat er ledeige pladser. 
        let træk = Math.floor(Math.random() * spilleBræt.length); // Finder en tilfældig plads på spilbrættet 
        if (nytSpil[træk] === "tom") { //Tjekker om den tilfældige plads på spilbrættet et taget eller ledig 
            nytSpil[træk] = starterSpiller; // Jeg sætter trækket lig med den nye spiller så tegnet fremgår 
            console.log(starterSpiller, "laver sit træk: ", træk);
            console.log("Spilbræt:", nytSpil.join(" | "));

            starterSpiller = starterSpiller === spiller1 ? spiller2 : spiller1
        }

    }
    let spilletsVinder = harViEnVinder(nytSpil)

    if (spilletsVinder) {
        console.log("Spillets vinder:", spilletsVinder);
    } else {
        console.log("Uafgjort!");
    }

    console.log(nytSpil);

};

krydsOgBolle(spilleBræt)

