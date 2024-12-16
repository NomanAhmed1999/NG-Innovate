// let heading = document.getElementById("heading");

// Query selector
// let heading = document.querySelector('#heading');

// CSS - background-color

// heading.style.backgroundColor = "red"
// heading.style.color = "white"

// console.log(heading);

// SET INTERVAL -> run on every seconds

// count = 1;
// let interval = setInterval(function () {

//     console.log("Hello", count);
//     count++;
// }, 1000);

// SET TIMEOUT -> Run only once at a time when time is complete
// setTimeout(function () {
//     alert("Hello World")
//     console.log("first")
// }, 2000);

// setTimeout(function () {
//     alert("Hello World 2")
//     console.log("second")
// }, 2000);

// CLEAR INTERVAL -> to stop the interval

// setTimeout(function () {
//     clearInterval(interval);
//     console.log("Stop Interval")

// }, 5000)



let loading = document.querySelector("#loading")
loading.style.backgroundColor = "black";
loading.style.color = "white";
loading.style.padding = "5px";

let width = 10
loading.style.width = width + "%";

let loadingInterval = setInterval(function () {
    console.log(width)
    if (width < 100) {
        width += 10;
        loading.style.width = width + "%";
    } else {
        width = 10;
        loading.style.width = width + "%";
    }
}, 500)


let stopBtn = document.querySelector("#stop")
stopBtn.addEventListener('click', function () {
    clearInterval(loadingInterval);
    loading.style.display = "none"
    stopBtn.style.display = "none"
    console.log("Loading is stop")
});

