const musikSamling = [];
const addSong = function (samling, song) {
    samling.push(song);
}
let song1 = {
    title: 'Knocking on heavens Door',
    artist: 'Bob Dylan',
    genre: 'rock',
    year: 1973
};
addSong(musikSamling, song1);
for (song of musikSamling) {
    if (song.artist == 'Bob Dylan') {
        console.table(song);
    }
}