// alert("Hello")

// While loop


// let count = 1;

// while (count < 10) {

//     console.log(count);

//     // update
//     count++
// }



// Do while loop

// let count = 0

// do {

//     console.log("Hello", count)

//     count++

// } while (count < 10);



// Single Line comment

/***
 * Multi 
 * Line 
 * Comment
 */

function clickMe(e) {
    console.log(e);
    alert("Welcome to my webite")
}


function greet(name) {
    alert("Welcome " + name)
}


function mouseOver(event) {
    // console.log(event.src);

    event.src = "./car2.jpg"

    // console.log('Mouse OVER')
}

function mouseOut(event) {
    // console.log(event.src);

    event.src = "./car1.jpg"

    // console.log('Mouse OUT')
}


function focusInput(event) {
    // console.log(event.value);

    event.style.border = "4px solid green"
    // event.style.backgroundColor = "blue"

    console.log("Input Focus");
}


let namefeild = document.getElementById("name")
function onChange() {

    console.log(namefeild.value);
    let name = namefeild.value
    alert("Welcome " + name)
    namefeild.value = ""
}

let math = Math.sin(90)
console.log(math);
