function opg5_3_1() {
    const priser = [100, 150, 200];
    let priserInklMoms = priser.map(a => a * 1.25);
    console.log(priserInklMoms);
}

function opg5_3_2() {
    const priser = [80, 120, 60, 200];
    console.log(priser.filter(a => a > 100))
}

function opg5_3_3() {
    const kurv = [99, 149, 79];
    let total = kurv.reduce((a, b) => a + b);
    console.log(total)
}

function opg5_3_4() {
    function rabat(p) {
        return p * 0.9;
    }
    const priser = [100, 200, 300];
    let rabatPriser = priser.map(a => rabat(a));
    console.log(rabatPriser);
}

function opg5_3_5() {
    function lavTest(tærskel) {
        return function (x) {
            return x > tærskel;
        };
    }
    const varer = [50, 120, 200, 90];
    filtretListe = varer.filter(a => lavTest(100)(a));
    console.log(filtretListe);
}

function opg5_3_6() {
    const priser = [80, 120, 160];
    let sum = priser.reduce((a, b) => a + b)
    let avg = sum / priser.length;
    console.log(`Gennemsnittet er ${avg}`);
}

function opg5_3_7() {
    const priser = [60, 90, 150, 40];
    let filtered = priser.filter(a => a > 80);
    let medMoms = filtered.map(a => a * 1.25);
    console.log(medMoms);
}

opg5_3_7()