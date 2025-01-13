// Array of string ['1', '2', '3']
// Array of object [{name: 'Noman'}]



// filter
// find
// sum
// foreach
// map
// reduce

const input = document.querySelector('#input')
const list = document.querySelector('#list')
const result = document.querySelector('#result')
let array = ['Noman', 'Khateeb', 'Ayyan', 'Bilal', 'shayan', 'sufyan']
let listOfNumber = [1, 2, 34, 345, 66]

let forLoop = array.map((item, index) => {
    list.innerHTML += item + '<br/>';
})


console.log('forLoop', forLoop);


// function filter() {
//     let filteredData = array.filter(item => item !== input.value);
//     result.innerHTML = filteredData;
// }

// function find() {
//     let filteredData = array.find(item => item !== input.value);
//     result.innerHTML = filteredData;
// }


// function filter() {
//     let filteredData = listOfNumber.reduce(function sumOfNum(total, num) {
//         return listOfNumber
//     }, 0);
//     console.log(filteredData);
// }
