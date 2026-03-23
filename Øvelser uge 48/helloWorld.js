const fs = require("fs");

let text = "Hej";

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.error('Fejl ved læsning:', err);
        return;
    }
    console.log("Indhold af fil:\n" + data);
})

console.log(text);

fs.writeFile("test.txt", text);