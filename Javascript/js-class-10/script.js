// alert("Hello")


// String -> Number

// var str = "321.32";
// console.log(str, typeof str)
// var num = +str
// console.log(num, typeof num)

// var num1 = Number.parseInt(str)
// console.log(num1, typeof num1)

// var num2 = Number.parseFloat(str)
// console.log(num2, typeof num2)


// var num = 432;

// console.log(num, typeof num)

// var str = num.toString()
// console.log(str, typeof str)


// var pi = 3.141592653589793238462643383279502884197
// console.log(pi)

// console.log(Math.round(pi))
// console.log(Math.floor(pi))
// console.log(Math.ceil(pi))

// console.log(pi.toFixed(3))


// Date and Time

// var current = Date.now()
// console.log(current)

// var date = new Date()
// console.log(date)

// var year = date.getFullYear()
// console.log(year)

// var months = ["jan", "feb", "march", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"]

// var currentMonth = date.getMonth()
// console.log(months[currentMonth])
// var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"]
// console.log(date.getDay())
// console.log(days[date.getDay()])
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime())
// console.log(Date.now())

// // Find age = ?
// var dateOfBirth = new Date("12 oct 2000 12:00:00")
// console.log(dateOfBirth)

// var age = date.getFullYear() - dateOfBirth.getFullYear()
// console.log("Age", age)



// Functions
// () -> parenthesis

//  Function defination
function sayHello() {
    alert("Hello")
}


// // Function call
// sayHello();

// console.log("Hi");
// alert("Your name")
// console.log("Welcome");

// sayHello()


function sumTwoNumbers(x, y) { // parmeters
    // console.log(arguments)

    // console.log(x + y)

    return x + y
}

// sumTwoNumbers(5, 5) // arguments
// sumTwoNumbers(25, 25)
// sumTwoNumbers(25, 5)
// sumTwoNumbers(-5, 5)

// var fun = sumTwoNumbers(12, 5)
// console.log("sum", fun + 8)



var names = ["biLal", "Ali", "ahMed", "Noman"]
var newName = []

// var username = prompt("Enter name: ")
// console.log("before", username)

function titleCase(name) {
    var title = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
    return title;
}

for (var i = 0; i < names.length; i++) {
    newName.push(titleCase(names[i]))
}

console.log(names)
console.log(newName)
// console.log("after", titleCase(username))