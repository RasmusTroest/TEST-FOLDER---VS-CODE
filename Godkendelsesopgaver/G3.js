// SKAL KØRES I BROWSER, da der bruges "prompt()"
class Eng {
    constructor(rows, columns, blomsterbed, bier) {
        this.rows = rows;
        this.columns = columns;
        this.blomsterbed = blomsterbed;
        this.bier = bier;
        this.eng = []
    }
    generate() { // Generate "Eng" - Nested array / Matrix structure with objects and two empty properties, shown by boolean false
        for (let indexrow = 0; indexrow < this.rows; indexrow++) {
            this.eng.push([])
            for (let index = 0; index < this.columns; index++) {
                const currentItem = {
                    occupier: false,
                    flower: false
                }
                this.eng[indexrow].push(currentItem)
            }
        }
    }
    fillFlowerbed() { // Populate "Eng" with "blomsterbed" filling out an area of 3x3 in our constructed table, starting from row 0, column 0, going left to right filling array, and pagenating 
        let startingPoint = {
            row: 0,
            column: 0
        }
        for (let index = 0; index < this.blomsterbed; index++) {
            if (startingPoint.row + 2 >= this.rows || startingPoint.column + 2 >= this.columns) { // Checks if there is enough space for flowerbed and throws error if not
                throw new Error("Eng har ikke plads til nok blomsterbede")
            } else {
                for (let indexFlowerbedRows = 0; indexFlowerbedRows < 3; indexFlowerbedRows++) {
                    for (let indexFlowerbedColumns = 0; indexFlowerbedColumns < 3; indexFlowerbedColumns++) {
                        this.eng[startingPoint.row][startingPoint.column].flower = true;
                        startingPoint.column++;

                    }
                    startingPoint.column -= 3;
                    startingPoint.row++;
                }
                // Positions starting point to next "block" of 3x3 array
                startingPoint.column += 3;
                startingPoint.row -= 3;
                // Determines if there is space for the 3x3 column and if not sets the column to 0 and jumps three lines down
                if (startingPoint.column + 2 >= this.columns) {
                    startingPoint.column = 0;
                    startingPoint.row += 3;
                }
            }
        }
        console.log("Blomsterbede succesfuldt tilføjet")
    }
    fillBees() { // Populate "Eng" with "bier" at random spots
        if (this.bier > this.columns * this.rows) {
            throw new Error("Fejl: Flere bier end antal felter på engen");

        }
        function plotBeeAtRandomSpot(array) { // Finds random location for bee
            const randomRow = Math.floor(Math.random() * array.rows);
            const randomColumn = Math.floor(Math.random() * array.columns);
            if (!array.eng[randomRow][randomColumn].occupier)    { // If there is no other bee, places bee
                array.eng[randomRow][randomColumn].occupier = true
            } else { // else, recursive till it finds empty spot
                plotBeeAtRandomSpot(array);
            }
        }
        for (let index = 0; index < this.bier; index++) { // run function for each bee to be added
            plotBeeAtRandomSpot(this)
        }
    }
    beesHarvest() { // Iterates through array to check if both bee and flower is present, and sets flower to false + resets bee, else resets bee
        for (let index = 0; index < this.rows; index++) {
            for (let subIndex = 0; subIndex < this.columns; subIndex++) {
                if (
                    this.eng[index][subIndex].occupier === true &&
                    this.eng[index][subIndex].flower === true
                ) {
                    this.eng[index][subIndex].occupier = false;
                    this.eng[index][subIndex].flower = false;
                } else {
                    this.eng[index][subIndex].occupier = false;
                }
            }
        }
    }
    printPretty() { // Makes a more readable / user-friendly string and prints it to the console
        let print = ``;
        for (let index = 0; index < this.rows; index++) {
            for (let subIndex = 0; subIndex < this.columns; subIndex++) {
                if (this.eng[index][subIndex].occupier) {
                    print = print + `🐝`;
                } else {
                    print = print + `🌱`;
                }
                if (this.eng[index][subIndex].flower) {
                    print = print + `🌻`;
                } else {
                    print = print + `🌱`;
                }
            }
            print = print + `\n`;
        }
        console.log(print + `\n`)
    }
    countFlowers() {
        let count = 0;
        for (let index = 0; index < this.rows; index++) {
            for (let subIndex = 0; subIndex < this.columns; subIndex++) {
                if (this.eng[index][subIndex].flower) {
                    count++;
                }
            }
        }
        return count;
    }
}


class Simulation {
    constructor(rows, columns, blomsterbed, bier) {
        this.currentMap = new Eng(rows, columns, blomsterbed, bier)
    }
    run() {
        // Fills out "eng" to the right structure, and populates with "blomsterbede" and "bier"
        this.currentMap.generate();
        this.currentMap.fillFlowerbed();
        this.currentMap.fillBees();
        console.log("Bier succesfuldt tilføjet");

        let index = 0;
        // Loops while there is flowers on "eng"
        while (this.currentMap.eng.find(e => e.some(element => element.flower === true)) !== undefined) {
            index++;
            console.log("Iteration nummer: " + index);
            console.log(`Antal blomster tilbage: ${this.currentMap.countFlowers()}`)
            this.currentMap.printPretty();
            this.currentMap.beesHarvest();
            this.currentMap.fillBees(); // After the "beesHarvest"-function, there is no bees on map, and they get randomly plotted in again
        }
        console.log(`Alle blomster høstet efter ${index} iterationer`)
    }
}

const minSimulation = new Simulation(
    prompt("Antal rækker"),
    prompt("Antal kolonner"),
    prompt("Antal blomsterbed (Et blomsterbed er en 3x3 formation af blomster"),
    prompt("Antal Bier"));
minSimulation.run();