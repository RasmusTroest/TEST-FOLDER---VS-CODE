
const input = "ejoifwbsdjiojiboergjiesdjvoidwjofiwefoiwjfjosidcjdgjreoit43ufjiowjwer428394e7qii8da98d";

function countCharacters(string) {
    const counts = {};
    let maxCount = 0;
    let topCharacters = [];

    // Tæl forekomster
    for (const char of string) {
        counts[char] = (counts[char] || 0) + 1;
        if (counts[char] > maxCount) {
            maxCount = counts[char];
        }
    }

    // Find karakterer med maxCount
    for (const [char, count] of Object.entries(counts)) {
        if (count === maxCount) {
            topCharacters.push(char);
        }
    }

    console.table(counts);
    console.log(`Top karakter(er): ${topCharacters.join(", ")} med ${maxCount} forekomster`);
}

countCharacters(input);
