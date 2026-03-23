//Code runs both games
//Initialize global variables
let scores = [1, 1, 2, 2, 3, 3, 4, 4, 5];

//Dartspil 1.0
function dartSpil1_0() {
    //Initialize variable inside of function, to be able to reuse variable in another function (Local scope variable)
    let sum = 0
    for (let kastNr = 0; sum < 50; kastNr++) {
        //Calculate random hit
        let hit = scores[Math.floor(Math.random() * scores.length)];
        //Add hit to sum
        sum += hit; 
        //Display "kastNr", score of current hit and total sum
        console.log(`Kast nr.: ${kastNr} ramte : ${hit}, Sum = ${sum}`);
    }
    //Display end of game
    console.log("Spil færdigt")
}
//Console.log to introduce game
console.log(`Dartspil 1.0\nBestår af én spiller der kaster indtil hans akkumulerede kast er 50 eller derover\n`)

//Run function
dartSpil1_0();

//Console.log to separate the two games
console.log(`\nDartspil 2.0\nBestår af to spillere der spiller mod hinanden, over ti runder\n`)

//Dartspil 2.0
function dartSpil2_0() {
    //Initialize array
    let scoreBoard = [];
    //Initalize object used for calculating total sums
    let finalScore = {
        sumPlayer1: 0,
        sumPlayer2: 0,
    }
    //Loop through ten rounds of play
    for (let i = 1; i <= 10; i++) {
        //Initialize local object
        let roundScore = {
            RoundNo: i,
            Player1: scores[Math.floor(Math.random() * scores.length)],
            Player2: scores[Math.floor(Math.random() * scores.length)],
        }
        //Push local object to array
        scoreBoard.push(roundScore)
    }

    //Calculate total scores from array, by looping through elements in array
    scoreBoard.forEach(element => {
        finalScore.sumPlayer1 += element.Player1;
        finalScore.sumPlayer2 += element.Player2;
    });
    
    // If else statement to determine winner
    if (finalScore.sumPlayer1 > finalScore.sumPlayer2) {
        console.log("Player1 har vundet, med følgende score:");
        console.table(finalScore);
    } else if (finalScore.sumPlayer1 < finalScore.sumPlayer2) {
        console.log("Player2 har vundet, med følgende score:");
        console.table(finalScore);
    } else {
        console.log("Spillet endte uafgjort med følgende score:")
        console.table(finalScore)
    }

    // Display array scoreBoard
    console.log(`\nScore fra alle runder:`)
    console.table(scoreBoard);
}
//Run function
dartSpil2_0();