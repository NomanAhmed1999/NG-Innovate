// alert("Hello World")


let box = document.getElementById("box")

// box.innerHTML = "<a href='https://www.google.com'>Go to mart</a>"

// backticks ->  Es6 ``

let name = "Super Market";

// box.innerHTML = `<a href='https://www.google.com'>Go to ${name}</a>`

// box.innerHTML = "<h1>" + 2 + "X 1 = " + (2 * 1) + "</h1>"
// with backticks
// box.innerHTML = `<h1>2 X 1 = ${2 * 1} </h1>`
// box.innerHTML = `<h1>2 X 2 = ${2 * 2} </h1>`

// box.style.backgroundColor = "Red"
// box.style.borderWidth = "20px"
// box.style.borderColor = "black"
// box.style.borderStyle = "solid"

// console.log(box.innerHTML)

// let link = document.getElementById("link")
// link.setAttribute("href", "https://www.daraz.com")
// console.log(link.hasAttribute("href"));


let inputBox = document.getElementById("inputBox");
let submitBtn = document.getElementById("submitBtn");

submitBtn.innerText = "Generate Password"

function clickHua() {

    const characters = "abcdefghijklmnopqrstuvwxyz";
    let length = 6
    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * characters.length)
        console.log(random);
        password += characters[random]
    }

    alert("Your password is generated")

    inputBox.value = password

}

submitBtn.addEventListener('click', clickHua)

// console.log(inputBox.nextSibling);
// console.log(submitBtn);



