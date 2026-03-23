function nedtæl(n) {
    console.log(n);
    if (n <= 0) {
        return;
    } else {
        n -= 1;
        nedtæl(n);
    }
}

function tælop(n, i) {
    console.log(i);
    if (i >= n) {
        return;
    } else {
        i += 1;
        tælop(n, i);
    }
}

function sum(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sum(n - 1);
    }
}

function simulerAfdrag(rest, rate) {
    if (rest <= 0) {
        return 0;
    } else {
        rest -= rate;
        console.log(`Nuværende restbeløb ${rest}`)
        return 1 + simulerAfdrag(rest, rate);
    }
}

function beregnTerminer() {
    console.log(`Antal terminer i alt: ${simulerAfdrag(1000, 100)}`);
}

//Head=Action sker før recursive, Tail=Recursive skal være det sidste i funktionen
function gangeHead(a, b) {
    if (a <= 0) {
        return 0;
    } else {
        //Beregning sker (b+...) sker før recursion = Head
        return b + gangeTail(a-1, b);
    }
}

function gangeTail(a, b, acc = 0) {
    if (a <= 0) {
        return acc;
    } else {
        //Beregningen sker i argumenterne, og acc bliver hevet ud fra dybeste recursion, derfor Tail
        return gangeTail(a - 1, b, acc + b);
    }
}

console.log(gangeHead(10, 10));

console.log(gangeTail(10, 10));