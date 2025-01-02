
// Objects

// let records = ["Bilal", 340, 500, 78]


let records = {
    name: "Bilal",
    marks: 340,
    total: 500,
    percentage: 78,
    getData: function () {
        console.log(this.name, this.marks, this.total, this.percentage, this.grade)
    }
}

// get value
// console.log(records.name);
// console.log(records.marks);
// console.log(records.abc); error
// console.log(records["total"]);
// console.log(records["abc"]); //error

// let key = "percentage"
// console.log(records[key]);

// setter

// records["grade"] = "A"

// console.log(records);

// check hasOwnProperty
// console.log(records.hasOwnProperty('grade'));

// records.getData();


let data = [
    {
        "userId": 1,
        name: "Junaid",
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        name: "Bilal",
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        name: "Ilyas",
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        name: "Ali",
        "title": "et porro tempora",
        "completed": true,
        nestedData: [
            {
                name: "Bilal",
                age: 21,
            },
            {
                name: "Noman",
                age: 25,
            }
        ]
    },
    {
        "userId": 1,
        "id": 5,
        "name": "Gufran",
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
]



// console.log("Data=>", data[3].nestedData[1].name);



data.forEach((element) => {
    console.log(`${element.id} | ${element.name} | ${element.userId} | ${element.title}`)
})
