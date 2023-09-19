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