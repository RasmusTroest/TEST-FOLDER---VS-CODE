const checkPassword = function(enteredPassword) {
const correct = "hemmelig";
    switch (enteredPassword === correct) {
        case true:
            console.log("Adgang givet");
            break;
        case false:
            console.log("Forkert adgangskode");
            break;
    }
};
checkPassword("hemmelig"); // → true
checkPassword("forkert"); // → false