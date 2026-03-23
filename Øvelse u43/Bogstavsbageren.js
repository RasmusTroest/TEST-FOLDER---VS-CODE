function countLetter(str, bogstav) {
    let substr = str.toUpperCase();
    let bigBogstav = bogstav.toUpperCase();
    let sum = 0;
    for (let index = 0; index < substr.length; index++) {
        if (substr[index] === " ") {
            return "Hov et mellemrum";
        }
        if (substr[index] == bigBogstav) {
            sum++;
        }
    }
    return sum;
}

console.log(countLetter("Hej", "h"))