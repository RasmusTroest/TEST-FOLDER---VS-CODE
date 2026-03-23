function opg7_1_2a() {
    function findTitel(playlist, t) {
        return playlist.find(s => s.titel === t);
    }
    const playlist = [{ titel: "Hello" }, { titel: "Skyfall" }];
    findTitel(playlist, "Hello");
}

function opg7_1_2b() {
    const sange = [
        { id: 1, titel: "Hello", længde: 216 },
        { id: 3, titel: "Skyfall", længde: 285 }
    ];
    function totalSpilletid_bad(sange) {
        return sange.reduce((sum, s) => sum + s.længde, 0);
    }
    console.log(totalSpilletid_bad(sange));
}

function opg7_1_2c() {
    const playlist = [
        { titel: "Track1", længde: 216 },
        { titel: "Track2", længde: 180 },
        { titel: "Track3", længde: 0 },
        { titel: "Track4", længde: -5 },
        { titel: "Track5", længde: 0 }
    ];
    function totalSpilletid_bad(sange) {
        let sum = 0;
        for (const s of sange) {
            sum += s.længde;
        }
        return sum;
    }
    console.log("total (bad):", totalSpilletid_bad(playlist));
}

opg7_1_2c();