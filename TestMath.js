let dyr=["abe","Hest","søløve"];

function randomElement (arr) {
    let index = Math.floor(Math.random()*arr.length);
    console.log(arr[index])
};

randomElement(dyr);