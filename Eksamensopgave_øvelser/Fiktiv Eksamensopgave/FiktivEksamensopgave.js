let input = "ejoifwbsdjiojiboergjiesdjvoidwjofiwefoiwjfjosidcjdgjreoit43ufjiowjwer428394e7qii8da98d";

function countCharacters(string) {
    let countedCharacters = [];
    let topCharacter = {
        character: [],
        count: 0
    };
    // Iterate through string
    for (let i = 1; i <= string.length; i++) {
        const current = string[i - 1];
        // Create object with character and count, if no object exists with character
        if (countedCharacters.filter(e => e.character === current).length === 0) {
            countedCharacters.push({
                character: current,
                count: 1
            })
        } else {
            // else increment "count" property
            countedCharacters.find(e => e.character === current).count++;
        }
    }
    console.table(countedCharacters)

    // Iterates through the counted characters, if character has highter count than current top, then replaces
    // else if they have same count, pushes character
    countedCharacters.forEach(e => {
        if (e.count > topCharacter.count) {
            topCharacter.count = e.count;
            topCharacter.character = [e.character];
        } else if (e.count == topCharacter.count) {
            topCharacter.character.push(e.character);
        }
    });
    console.table(topCharacter);
}
countCharacters(input);