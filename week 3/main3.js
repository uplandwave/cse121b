function show(){
    console.log("this output for devel");
}
show();

//function declaration
function show(){
    console.log("this output for devel");
}

console.log(square(3));

// function declaration
function square(number) {
    return number * number;

}

//what did tou lean about where clauses 


//function expression - cant hoist or call before function
// const sq = function (number) {
//     return number * number;
// }
// console.log(sq(5));

// document.querySelector('#result').textContent = sq(5);

// function using the arrow syntax
let squ = (number) => {
    return number * number;
}
console.log(squ(4));

// even shorter syntax
const squared = (number) => number * number;

console.log(squared(6));

//ARRAy METHOD

const simple_array = ['a', 'b', 'c'];

//foreach method - with declaration function

simple_array.forEach(show_array);

function show_array(item){
    console.log(item);
}

// you can put the function in as the expression

simple_array.forEach(function show_array(item){
    console.log(item);
})

//for each wit arrow function
simple_array.forEach(item => console.log(item));

// example 1
const steps = ["one", "two", "three"];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);

// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function (item, index) {
  if (item === luckyNumber) {
    luckyIndex = index;
    console.log(luckyIndex);
  }
}); 

// map array method - make a new array by changing each of the origanal array values 

// example 1
// const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join(" ");
console.log(stepsHtml);

const array1 = [1, 4, 9, 16]
// pass a funtion to map
const map1 = array1.map(x => x * 2)
console.log(array1);
console.log(map1);

// example 2
// const grades = ["A", "B", "A"];
// function convertGradeToPoints(grade) {
//   let points = 0;
//   if (grade === "A") {
//     points = 4;
//   } else if (grade === "B") {
//     points = 3;
//   }
//   return points;
// }
//const gpaPoints = grades.map(convertGradeToPoints);
// console.log(gpaPoints);

// const gpaPoints = grades.map(convertGradeToPoints);
// const pointsTotal = gpaPoints.reduce(function (total, item) {
//   return total + item;
// });
// const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//filter array method create a ne array but only with items that pass a certan conditon 

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});
console.log(shortWords);

//same thing with an arrow function
// const shortWords = words.filter((word) => word.length < 6);

//events

const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);