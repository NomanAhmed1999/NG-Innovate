// alert("Hello Switch")


// switch

// let day = "fri"

// if (day == "mon") {
//     console.log("Today is monday");
// } else if (day == "tue") {
//     console.log("Today is Tuesday");
// } else if (day == "wed") {
//     console.log("Today is Wednesday");
// }
// else if (day == "thur") {
//     console.log("Today is Thursday");
// } else {
//     console.log("Today is holiday")
// }


// --------------------

// let day = "wed"

// switch (day) {
//     case "mon":
//         console.log("Today is monday");
//         break;
//     case "tue":
//         console.log("Today is Tuesday");
//         break
//     case "wed":
//         console.log("Today is Wednesday");
//         break
//     case "thur":
//         console.log("Today is Thursday");
//         break

//     default:
//         console.log("Today is Holiday")
//         break;
// }


// For Loop
// - Range Loop - > 1 to 100

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// While loop
// - Conditional loop 


// initialization

// condition

// updation/iteration


// let count = 0;

// while (count < 10) {

//     console.log(count)

//     // Updation
//     count++
// }

// Program to ask user to calculate square game


let startGame = prompt("Are you interested to play game? (Yes/No)")

if (startGame.toLowerCase() === "yes") {
    console.log("Lets play")
    let askAgain = "yes";
    while (askAgain.toLowerCase() != "no") {
        let num = +prompt("Please select number from 1 to 10")
        let square = num * num
        alert("Your number Square is " + square)
        askAgain = prompt("Are you to play again (yes/no)")
    }
    if (askAgain.toLowerCase() == "no") {
        console.log("Thanks for Playing")
    }

}
else {
    console.log("No Problem")
}
