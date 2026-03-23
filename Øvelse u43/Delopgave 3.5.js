let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
function matrix_2nd(A) {
    let reult = []; // stavet forkert
    for (let i = 0; i < A.length; i++) {
        let result_i = [];
        for (j = 0; j < A.length; j++) {
            result_i.push(A[j][i] * A[j][i]); // Bytter rundt på matricen, så hver linje bliver lagt som en kolonne og omvendt
        }
        result.push(result_i);
    }
    return result;
}

function matrix_2nd_2(A) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        let result_i = [];
        for (j = 0; j < A.length; j++) {
            result_i.push(A[i][j] * A[i][j]);
        }
        result.push(result_i);
    }
    return result;
}

console.log(matrix_2nd_2(A));
