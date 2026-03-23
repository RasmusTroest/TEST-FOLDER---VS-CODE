function count_zeros(A) {
    let zeros = 0;
    do { //Forkert brug af loops, evaluerer først efter kørslen
        A.shift();
        zeros++;
    } while ((A[0] = 0)); // Vil køre for evigt, såfremt index 0 i arrayet er 0, og "=" bliver rettet til "==" eller "==="
    return [zeros, A];
}
//console.log(count_zeros([0, 0, 0, 0, 1, 1, 1, 1, 1, 1]));

function count_zeros2(arr) {
    let zeros = 0;
    let ones = [];
    arr.forEach(element => {
        if (element === 0) {
            zeros++;
        } else if (element === 1) {
            ones.push(element);
        }
    });
    return [zeros, ones];
}

console.log(count_zeros2([0, 0, 0, 0, 1, 1, 1, 1, 1, 1]));