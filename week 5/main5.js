// import Person, {printName, printAge} from './module.js';

// const user = new Person('Sally', 20);
// console.log(user);
// printName(user);
// printAge(user);

import aCourse from "./course.js";

document.querySelector("#enrollStudent").addEventListener('click', function(){
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
})

//sync and async

setTimeout(function(){
    console.log("async");
},1000);

console.log('sync')

// fetch
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  console.log(response);

  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
  const outputElement = document.querySelector("#output");
  results = data;
  const html = `<img src="${results.sprites.front_shiny}" alt="Image of ${results.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

getPokemon(url);
console.log("second: ", results);

//a list of pokemon 

const urlList = 'https://pokeapi.co/api/v2/pokemon';

let result;

async function getPokemonList(urlList) {
  const response = await fetch (urlList);
  if(response.ok){
    const data = await response.json();
    console.log (data);
    doStuffList(data);
  } else {
    console.log('server down');
    alert('pokemon site is down');
  }
}

function doStuffList(data){
console.log(data.results);
const pokeList = (data.results);
pokeList.sort(obj_sort_asc);
const outputListElement = document.querySelector('#outputList');
pokeList.forEach((item)=>{
  outputListElement.innerHTML += `<li>${item.name}<li>`;

})
}
getPokemonList(urlList);

//sorting
let fruit = ['banana','apple', 'grape'];

fruit.sort();

console.log(fruit);

let fruits =[
  {name: 'banana', color: 'yellow'},
  {name: 'apple', color: 'red'},
  {name: 'grape', color: 'purple'}
];

fruits.sort(obj_sort_asc);


console.log(fruits);


function obj_sort_asc(a,b) {
  if (a.name < b.name){
    return -1;
  }else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

function obj_sort_desc(a,b) {
  if (a.name < b.name){
    return 1;
  }else if (a.name > b.name) {
    return -1;
  } else {
    return 0;
  }
}