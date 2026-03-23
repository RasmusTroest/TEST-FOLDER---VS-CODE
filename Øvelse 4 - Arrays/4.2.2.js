const minListe = [2, 4, 'abc', 42, true, 30, 40, 50];
minListe[2] = true;
console.log(minListe); // [2,4,true,42,true,30,40,50]

// shift() moves first element from array to another variable / deletes it
let førsteElement = minListe.shift();
console.log(førsteElement); // 2
console.log(minListe); // 4, true, 42,true, 30, 40, 50

// push() appends element to end of array
minListe.push(50);
console.log(minListe); //4, true, 42, true, 30, 40, 50, 50

// pop() last element from array and moves it / deletes it
let sidsteElement = minListe.pop();
console.log(minListe) // [4, true, 42, true, 30, 40, 50]
console.log(sidsteElement); // 50

// indicering
console.log(minListe[0]);//4
console.log(minListe[1]);//true
console.log(minListe.length);//7
console.log(minListe[8]);//undefined