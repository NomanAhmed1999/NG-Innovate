// last Assignment

document.write("<h1>Marksheet Calculation</h1>")

var stdName = prompt("Enter Student name: ")
// Enter 5 subject marks one by one out 100
var subject1 = +prompt("Enter subject 1 marks out of 100: ")
var subject2 = +prompt("Enter subject 2 marks out of 100: ")
var subject3 = +prompt("Enter subject 3 marks out of 100: ")
var subject4 = +prompt("Enter subject 4 marks out of 100: ")
var subject5 = +prompt("Enter subject 5 marks out of 100: ")

var marksObtained = subject1 + subject2 + subject3 +subject4 + subject5;
console.log("Obtained Marks",marksObtained);
var totalMarks = 500;

var percentage = (marksObtained /totalMarks) * 100;
console.log(percentage);


// Calculate Grade System
// 90% to 100 -> Grade = A+
// 80% to 89 -> Grade = A
// 70% to 79 -> Grade = B
// 60% to 69 -> Grade = C
// 50% to 59 -> Grade = D
// less than 50% -> Grade = F

var grade;

if (percentage >= 90 && percentage <= 100) {
    grade = "A+"
}else if (percentage >= 80 && percentage <= 89) {
    grade = "A"
}else if (percentage >= 70 && percentage <= 79) {
    grade = "B"
}else if (percentage >= 60 && percentage <= 69) {
    grade = "C"
}else if (percentage >= 50 && percentage <= 59) {
    grade = "D"
}else{
    grade = "F"
}


console.log(grade);

document.write(stdName)
document.write("<br />")
document.write(marksObtained + "out of "+ totalMarks)
document.write("<br />")
document.write(percentage + "%")
document.write("<br />")
document.write(grade )


// Task # Remarks according to grades
// Calculate Grade System
// 90% to 100 -> Grade = A+
// Remarks : Keep it up
// 80% to 89 -> Grade = A
// Remarks : Keep workk Hard
// 70% to 79 -> Grade = B
// Remarks : Need more improvements
// 60% to 69 -> Grade = C
// Remarks : Focus your weak point
// 50% to 59 -> Grade = D
// Remarks : Keep working hard
// less than 50% -> Grade = F
// Remarks : tera kch nhi ho skta🤦‍♂️
