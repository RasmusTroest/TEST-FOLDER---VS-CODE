function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3))

const kunder = [
    { id: 1, navn: "Anna", ordre: { total: 1250 } },
    { id: 2, navn: "Bo", ordre: { total: 1000 } },
    { id: 3, navn: "Chen", ordre: { total: 0 } }
];
function totalOmsætning_bad(kunder) {
    return kunder.reduce((s, k) => s + k.ordre.total, 0);
}
console.log(totalOmsætning_bad(kunder)); // Forvent: TypeError (reading 'total')

console.table(kunder);