const maze = [
    [
        ['+', '>', '+', '-', '-', '-', '+'],
        ['|', ' ', '|', ' ', ' ', ' ', '|'],
        ['|', ' ', '|', ' ', '|', ' ', '|'],
        ['|', ' ', ' ', ' ', '|', ' ', '|'],
        ['+', '-', '-', '-', '+', ' ', '|'],
        ['<', ' ', ' ', ' ', ' ', ' ', '|'],
        ['+', '-', '-', '-', '-', '-', '+']
    ]
];

// Initializes variable starting pos. Could be dynamic so it searches array for ">", and sets the starting pos. there.
let robotPosition = { x: 1, y: 0 };

// Prints maze, uses global variables
function printMaze() {
    // Local variable, maze with robot
    const mazeRobot = maze[0];
    let temp = mazeRobot[robotPosition.y][robotPosition.x];
    mazeRobot[robotPosition.y][robotPosition.x] = "@";

    // Translates array to more readable string
    let printPretty = "";
    for (let iRows = 0; iRows < mazeRobot.length; iRows++) {
        for (let iCols = 0; iCols < mazeRobot[iRows].length; iCols++) {
            printPretty += mazeRobot[iRows][iCols] + " ";
        }
        printPretty += "\n";
    }
    console.log(printPretty);
    mazeRobot[robotPosition.y][robotPosition.x] = temp;
}

// Function to test if movement is possible
function testMovement(x, y) {
    let tempMaze = maze[0];
    if (tempMaze[robotPosition.y + y][robotPosition.x + x] === " " || tempMaze[robotPosition.y + y][robotPosition.x + x] === "<") {
        return true
    } else {
        console.log(`Bevægelse med ændringen x: ${x} y: ${y} er ikke mulig \nPrøv igen\n`);
        return false
    }
}

function moveRobot(direction) {
    switch (direction) {
        case "w":
            if (testMovement(0, -1)) {
                robotPosition.y -= 1;
            }
            break;
        case "s":
            if (testMovement(0, +1)) {
                robotPosition.y += 1;
            }
            break;
        case "a":
            if (testMovement(-1, 0)) {
                robotPosition.x -= 1;
            }
            break;
        case "d":
            if (testMovement(+1, 0)) {
                robotPosition.x += 1;
            }
            break;
        case "x":
            return true;

        default:
            console.log("Input ikke gyldigt")
            break;
    }
}

function iMaze() {
    printMaze();

    // Infinite function, as both a winning move and ending output breaks loop
    while (true) {
        let input = prompt("Indtast retning\n(w: op, s: ned, a: venstre, d: højre) eller x for at afslutte:");
        console.clear();
        // Da moveRobot har indbygget at håndterrer andre inputs end w,s,a,d,x kaldes den direkte
        if (moveRobot(input)) {
            console.log("Spillet afsluttes")
            break;
        }
        if (robotPosition.x === 0 && robotPosition.y === 5) {
            console.log("Spillet er vundet");
            break;
        }
        printMaze();
    }

}

iMaze();