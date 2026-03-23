const mitArray = [20, 30, 41, 42, 70];
[første, andet, tredje, ...rest] = mitArray;
console.log(første, andet, tredje);
// 20 30
console.log(rest);
// [41,42,70]