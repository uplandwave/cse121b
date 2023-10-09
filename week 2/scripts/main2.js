// Comparisons

console.log(5 === '5')

// conditions

let yourage = 17;

if (yourage > 17){
    console.log("you cna vote")
} else {
    console.log("you can not vote")
}

let numSales = 100;

if (numSales <= 50) {
    console.log("Way to few sales");
  } else if (numSales <= 1000) {
    console.log("Average number of sales");
  } else {
    console.log("A good number of sales.");
  }


let age =2;

  if (age < 5) {
    console.log("No school");
  } else if (age > 18) {
    console.log("grade scool");
  } else {
    console.log("A good number of sales.");
  } 

  let grade = "A";
let gpaPoints = 0;
switch (grade) {
  case "A":
    gpaPoints = 4;
    break;
  case "B":
    gpaPoints = 3;
    break;
  case "C":
    gpaPoints = 2;
    break;
  case "D":
    gpaPoints = 1;
    break;
  default:
    gpaPoints = 0;
}

console.log(gpaPoints)

let num = Math.random();

if (num > 5) {
    console.log('heads');
}else {
    console.log('tales')
}

// DOM

document.querySelector('h1').textContent = "New Output";

document.getElementById('main_title').textContent = "Newer Output";

document.querySelector('#main_title').textContent = "Newest Output";

document.querySelector('#courses').textContent = "Div content";

document.querySelector('div').textContent = "New Div content";

document.querySelector('div').innerHTML = "<p>Para inside div<p>";

// setSttribute method 

let student = 'images/student.JPG';

document.querySelector("img").setAttribute("src", student)
document.querySelector("img").setAttribute("width", 400)

//create element in JS
//1. Create element 2. add content 3. add to the page
let newPara = document.createElement('p');
newPara.textContent = "this is text for my paragraph";
document.body.appendChild(newPara);

// OR

// adding a brand new elemet 
let para = document.querySelector(".p1");
para.innerHTML += "<span> This is more information. </span>";

//functions

function show(){
  console.log ("this is it");
}

show();

function addIt(n1, n2){
  return(n1 + n2);
}
let answer = document.createElement("p");
answer.innerHTML += (addIt(3, 8));
document.body.appendChild(answer)

//array

let classes = ["CSE121b", "CIT354", "WWD130", "WDD230"];

console.log(classes);

console.log(classes[2]);

classes[2] = "WDD330";

document.querySelector("#courses").textContent = classes.join(", ");

//array methods

//push add to the end of array
classes.push("CIT222");
document.querySelector("#courses").textContent = classes.join(", ");

//shift takes off from begining 
classes.shift();
document.querySelector("#courses").textContent = classes.join(", ");

// splice romove from the list paramiter and how many from the 2nd parameter and how many from 2
classes.splice(2,1);
document.querySelector("#courses").textContent = classes.join(", ");

// pop removes from the end of the list
classes.pop();
document.querySelector("#courses").textContent = classes.join(", ");

let date = new Date();
let year = date.aetFullYear(date);

console.log(date);
console.log(year);




