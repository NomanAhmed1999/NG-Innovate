// alert("abcd")


// class 9

// var arr = [1, 2, 3, 4];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// Flags

// var cities = ["karachi", "lahore", "islamabad", "multan"]
// var cityName = prompt("Enter your city name?");

// console.log("User City", cityName);

// // var flag = "no"

// var isCityFound = false


// break statement

// for (var i = 0; i < cities.length; i++) {
//     // console.log(cities[i]);
//     // without flag
//     // if (cities[i] === cityName.toLowerCase()) {
//     //     // flag = "yes"
//     //     isCityFound = true
//     // }else{
//     //     alert("Not Found")
//     // }

//     // With Flag
//     if (cities[i] === cityName.toLowerCase()) {
//         // flag = "yes"
//         isCityFound = true
//         break; // loop ko tor kr bahir aajao
//     }
//     console.log(cities[i]);
// }


// flag === "yes"
// if (isCityFound) {
//     alert(cityName + " has been found!")
// } else {
//     alert(cityName + " not found!")
// }

// Break Statement
// for (var i = 0; i <= 100; i++) {
//     console.log(i)
//     if (i > 5) {
//         break;
//     }
// }

// Continue Statement
// for (var i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue
//     }
//     console.log(i);
// }


// Nested loop
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         console.log("j=> ", j)
//     }
//     console.log("i=> ", i)
// }


// Nested Array
var studentsData = [
    ["Bilal", "Ahmed", "Ali"],
    [500, 478, 254],
]

// console.log(studentsData[0][1]) // Bilal, ahmed
// console.log(studentsData[1][0]) // 500

// print data in this form
// name: Bilal
// marks: 500


// for (var i = 0; i < studentsData.length; i++) {
//     // console.log("students data => ", studentsData[i]) // Bilal 500
//     for (var j = 0; j < studentsData[i].length; j++) {
//         if (i === 0) {

//             console.log("Name ", studentsData[i][j])
//         } else {
//             console.log("Marks ", studentsData[i][j])

//         }
//     }
// }


// Number Methods
// round of value

// var userScore = prompt("Enter Floating numer")
// var userScore = 56.1
// console.log(userScore);
// // console.log(Math.round(userScore))
// console.log(Math.floor(userScore))
// console.log(Math.ceil(userScore))


// Random number
// return random values from 0 to 1
// var random = Math.random()

// console.log(random)

// O to 5
// var random0to5 = random * 5 + 1
// console.log(Math.floor(random0to5))
// console.log(Math.floor(random0to5))
// console.log(Math.floor(random0to5))
// console.log(Math.floor(random0to5))
// console.log(Math.floor(random0to5))


// Task # 1
// - > Dice Rolling System
// generate random numbers from 1 to 6

// Task #2
// -> Toss System
// asked from user what you choose [Head or tail]
// 0 = head, 1 = tail

// Sets

// var a = [4, 5, 8]
// var b = [3, 2, 1, 4]

// var union = []

// for (var i = 0; i < a.length; i++) {
//     union.push(a[i])
// }

// for (var i = 0; i < b.length; i++) {
//     if (union.indexOf(b[i])) {
//         union.push(b[i])
//     }
// }

// console.log("A UNION B =  ", union.sort())


var matrixA = [
    [1, 2],
    [3, 4]
]

var matrixB = [
    [2, 5],
    [3, 4]
]

// find matrixA + matrixB = matrixC

// var MatrixC = [
//     [3, 7],
//     [6, 8],
// ]


var matrixC = []


for (var i = 0; i < matrixA.length; i++) {

    var matrix = [];
    for (var j = 0; j < matrixB.length; j++) {
        var sum = matrixA[i][j] + matrixB[i][j];
        matrix.push(sum)
        console.log("A + B ", sum);
        // console.log("B= ", matrixB[i]);
    }
    matrixC.push(matrix)
}

console.log(matrixC)

// find matrixA - matrixB = matrixC