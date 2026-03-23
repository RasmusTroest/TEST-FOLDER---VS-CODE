// myMathModule.js
const PI = 3.14159; // intern konstant (ikke eksporteret)
export function add(a, b) {
    return a + b;
}
export function mul(a, b) {
    return a * b;
}
export function arealCirkel(r) {
    return PI * r * r;
}
export function sub(a, b) {
    return a - b;
}