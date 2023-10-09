const car = {type: 'Flat', model: '500', color: 'white'};

const person = {
    firstName: "john",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue",
};

console.log(person.firstName + ' drives a ' + car.type);

console.log(person['firstName']);

//Ac course object 

const aCorse = {
    code: 'CSE121b',
    name: 'Javascript Laguage',
    logo: 'java.webp',
    sections: [
        {sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "bro T"},
        {sectionNum: 2, roomNum: "STC 361", enrolled: 40, days: "MWF", instructor: "sis A"},
    ],
    showSection:function(){
        console.log(this.sections[0].sectionNum);
    },
    enrollStudent: function(sectionNum){
        // takes user section number and gets index for that section
        const sectionIndex = this.sections.findIndex((item) => item.sectionNum == sectionNum)
        console.log(sectionIndex)
        // add one to that section
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
            console.log(this.item);
        }
    }
};
document.querySelector('#enrollStudent').addEventListener('click', function(){
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCorse.enrollStudent(sectionNum);
})
// aCorse.enrollStudent(2);
// aCorse.showSection();

function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }

console.log(aCorse.sections[1]);
console.log(aCorse.sections[0].roomNum);

// adding an li with the first room number 
document.querySelector('#sections').innerHTML = '<li>' + aCorse.sections[0].roomNum + '</li>';

// adding all the room numbers of the array
aCorse.sections.forEach(item => {
    document.querySelector('#sections').innerHTML += '<li>' + item.roomNum + '</li>';
});

//adding new li elements from scratch
let newListItem = document.createElement('li');
newListItem.textContent = aCorse.sections[0].roomNum;
document.querySelector('#sections').appendChild(newListItem);

console.log(aCorse.name);

document.querySelector('#title').textContent = aCorse.name;

document.querySelector('img').setAttribute('src', aCorse.logo);