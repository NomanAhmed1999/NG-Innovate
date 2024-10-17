// alert("Hello")


// var students = ["Bilal", "Noman", "Abdullah", "Ahmed"]

// console.log(students)

// Splice -> add delete update

// delete
// .splice(start index, delete count, updated item(optional))
// students.splice(1, 2)
// console.log(students)


// Add
// students.splice(1, 0, "ALI")
// console.log(students)


// update
// students.splice(2, 1, "Abdur Rehman")
// console.log(students)


// Slice -> copy array elements

// var students = ["Bilal", "Noman", "Abdullah", "Ahmed"]
// console.log("STUDENTS", students)

// .slice(start index[included], ending index[excluded])

// var class7 = students.slice(1, 2) // Noman, Abdullah
// console.log("Class 7", class7)


// Challenge - Swap
// var arr = ["A", "B", "C"]
// // result arr = ["C","B","A"]

// console.log(arr)

// var temp = arr[0]
// console.log(temp)

// arr[0] = arr[2]
// console.log(arr)

// arr[2] = temp
// console.log("swap result", arr)

// Class 17 -> For Loops


// table 2
// document.write(2 + " x + 1 = " + (2 * 1) + "<br>")
// document.write(2 + " x + 1 = " + (2 * 1))
// document.write(2 + " x + 1 = " + (2 * 1))
// document.write(2 + " x + 1 = " + (2 * 1))
// document.write(2 + " x + 1 = " + (2 * 1))
// document.write(2 + " x + 1 = " + (2 * 1))

// SYNTAX
// for (initiazation; codition; increament) {
//     // statement
// }


// for (var i = 0; i <= 10; i++) {
//     console.log("Val ", i)
// }

// Q1
// 1 -> 100 -> print(EVEN)
// 2 -> EVEN
// => EVEN % 2 === 0

// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log("EVEN-> ", i)
//     }
// }

// Q2
// user -> number -> 1 to n sum = ?

// var userNumber = +prompt("Enter Number from 1 to 100")

// var sum = 0;
// if (userNumber >= 0 && userNumber <= 100) {
// for (var i = 1; i <= userNumber; i++) {
//     sum = sum + i
// }
// }
// console.log("SUM", sum)
// user -> 5
// result 1+2+3+4+5 = > 15


// Loop is array
// var arr = ["Karachi", "Lahore", "Multan", "Sukkar"]

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// console.log(arr.length);


// arr.push("Islamabd", "Dadu", "Peshawar")

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     // console.log(i)
// }


// Question

// User give multiple value
// how many value ask by user

// calculate the sum of user values


// var userTime = +prompt("How many values you want to enter")

// var userValues = [];

// for (var i = 0; i < userTime; i++) {
//     var newValue = +prompt("Enter value" + (i + 1) + " :")
//     userValues.push(newValue)
// }

// console.log(userValues)

// var userSum = 0
// for (var i = 0; i < userValues.length; i++) {
//     userSum = userSum + userValues[i]
// }

// console.log("The sum of user values is: ", userSum)


// loop is String

// var myname = "Muhammad Bilal"

// for (var i = 0; i < myname.length; i++) {
//     console.log(myname[i])
// }



// String Methods

// var myName = "muhamMad biLal"

// console.log(myName.toLowerCase())
// console.log(myName.toUpperCase())


// var firstChar = myName.slice(0, 1).toUpperCase()
// var otherChar = myName.slice(1).toLowerCase()
// console.log(firstChar + otherChar)


// if (myName.toLowerCase() === "muhammad bilal".toLowerCase()) {
//     console.log("Match")
// }


// var myName = "muhammad bilal"

// console.log(myName.indexOf('o')) // find the index of given characters

// console.log(myName.lastIndexOf('m')) // return last index

// console.log(myName.charAt(9))


// var text = "two different ways to replace World War II with in a string"

// var replaceWord = "World War II"

// console.log("old ", text)
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + replaceWord.length) === "World War II") {
//         text = text.slice(0, text.indexOf(replaceWord)) + "the Second World War" + text.slice(i + 12);
//     }
// }

// console.log("New Text ", text)


var text = "two different ways to replace World War II with in a string"

var newText = text.replace("World War II", "Second World War")
console.log("old ", text)
console.log("new ", newText)
