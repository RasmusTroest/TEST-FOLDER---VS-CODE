const tal = [10, 20, 30, 40, 50];

const [første, andet, ...resten] = tal;
console.log(første);//10
console.log(andet);//20
console.log(resten);//30,40,50

const farver = ["rød", "grøn", "blå", "gul"];
const [primær, , tredje] = farver;
console.log(primær);//rød
console.log(tredje);//blå

const printNavn = ([fornavn, efternavn]) => {
    console.log(`Hej, ${fornavn} ${efternavn}`);
};
let navne = ["Anna", "Jensen"];
printNavn(navne);// Hej, Anne Jensen
