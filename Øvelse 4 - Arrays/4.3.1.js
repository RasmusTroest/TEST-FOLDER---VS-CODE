const sang = {
    title: 'Knocking on Heavens Door',
    artist: 'Bob Dylan',
    genre: 'rock',
    year: 1973
};

console.log(sang.title);
sang.title = 'Knocking\´ on Heavens Door';
console.log(sang.title);

console.log(sang);

console.log(JSON.stringify(sang))

console.table(sang);