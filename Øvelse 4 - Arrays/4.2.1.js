const minListe = [1,2,3];
[1,2,3] != [2,1,3]
console.log(minListe[0]); // 1
const enAndenListe = [3,2,2,2,500,1,1];
const enTredjeListe = [42, 'toogfyrre', true, minListe];
minListe[3] = 4; console.log(minListe); // [1,2,3,4]
minListe = 42; // error assignment to const
typeof minListe; // object