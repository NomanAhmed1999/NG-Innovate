// alert("Hello")

// var num = null; 
// // null -> empty
// console.log(num); // null

// var num1;
// console.log(num1); // undefined

// console.log(myname); // not defined

// -----------------------------------

// Increament num++ 
/**
 * num++ -> post Increament
 * ++num -> pre Increament
 */

// Decrement num--
/**
 * num-- -> post Decrement
 * --num -> pre Decrement
 */


// post => bd me krna
// var num = 5
// console.log("init", num);

// num++  // =>num = 5 +1  

// console.log(num); // 6
// console.log(num++); // 5

// *****
// break 
// console.log(num = num + 1) //  5
// num = 6
// *****
// console.log(num); // 6

// console.log(num++); // 5, 6, 
// console.log(num); // 5, 6


// num++ // ek step bd value ko brhaye ga

// ----------
// pre -> pehle value update kri bd me print kraa

// var num = 5
// console.log("init",num); // 5

// ++num
// console.log(num); // 6

// console.log(++num); // 6
// console.log(num); // 6

// post -> pehle printt then increase
// pre -> pehle increase then print


// var num = 5
// console.log(num--); // 5
// console.log(num); // 4


// // num = 4
// console.log(--num); // 4, 4, 3
// console.log(num); // 5, 3

// QUICK QUIZ

// var i = 11;
// console.log(i); // 11
// i = i++ + ++i;
// //  11 => 
// //      12 +1 = 13
// // 11 + 13  
// console.log(i); // 13, 12, 25, 24 ✔


// Example 2

var a=1, b=2, c;

c = a + b + a++ + b++ + ++a + ++b;
    //  3 + 1   + 2   + 3   + 4
    // 13
console.log(c); // 11, 13✔

// console.log(a);
// console.log(b);

 
















