// alert("Hello")


// Arrays - Collection of multi type data
// var std0 = "Haram"
// var std1 = "Ayyan"
// var std2 = "Rabiqa"

// console.log(std0);
// console.log(std1);
// console.log(std2);


// var students = ["Haram", "Ayyan", "Bilal", "Noman"]
// console.log(students);


// var arr = ["Bilal", 123, true, { a: 1 }, [1, 2, 3]]
// console.log(arr);


// var arr = new Array(5);
// console.log(arr[0]);

// Question : [] or new Array


// Access Index value
// index -> 0 start
// length -> total elements

// var arr = ["Bilal", "Noman", "Ayyan", "Haram"]
// console.log("length=>", arr.length);

// get array items

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[3]);
// console.log(arr[4]); // undefined
// console.log(arr[5]);


// Last element of array
// console.log(arr[arr.length - 1]);

// update item
// arr[0] = "Abdullah"
// console.log(arr[0]);

// delete array item
// delete arr[0]
// console.log(arr)


// ----------------> Arrays Methods <---------------------


// var arr = ["Karachi", "Lahore", "Islamabad"]
// arr[6] = "Multan"
// console.log(arr);


// Push() -> add value in last

// arr.push("Multan", "Peshawar", "Rawalpindi")

// console.log(arr);
// pop() -> remove item from last
// arr.pop()
// console.log(arr);


// Insert and remove from start
// unshift() -> add from start

// arr.unshift("Multan", "Peshawar")
// console.log(arr);

// arr.shift()
// console.log(arr);


// school opening
// var students = ["Bilal", "Haram", "Noman", "Abdullah"];
// students.push("Bilal")
// console.log(students);

// push and unshift return the length of updated array

// var returnVal = students.unshift("Haram")
// console.log("Students", students);
// console.log("return ==>", returnVal);

// pop and shift return the deleted values

// console.log("before deleted Students", students);
// var returnVal = students.shift()
// console.log("Students", students);
// console.log("return ==>", returnVal);


// Delete multiple values
// splice() -> add, delete, update

// var stds = ["Bilal", "Haram", "Noman", "Abdullah"]

// console.log(stds);

// delete elements
// stds.splice(1, 2) // delete 2 elements


// add 2 more name after haram
// stds.splice(2, 0, "A.Rehman", "Ali")

// update Haram to Ayesha
// stds.splice(1, 1, "Ayesha")
// console.log(stds);


// copy array item

var stds = ["Bilal", "Haram", "Noman", "Ayesha", "Abdullah"]
var copyArr = stds.slice(1, 4)
console.log(copyArr);


// Similar method array and string
// slice
// length

// var myName = "Muhammad Bilal"
// // console.log(myName.length);
// console.log(myName.slice(0, 8));
// console.log(myName.slice(9));


// Challenge
var arr = ["Bilal", "Noman", "Abdullah"]
// result
// arr = ["Abdullah", "Noman", "Bilal"]


