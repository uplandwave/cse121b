const aCourse = {
    code: 'CSE121b',
    name: 'JavaScript Language',
    logo: 'images/js_logo.svg',
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC 361', enrolled: 40, days: 'MW', instructor: 'Sis A'}
    ],
    showSection: function() {
        console.log(this.sections[0].sectionNum);
    },
    enrollStudent: function(sectionNum) {
        //takes user section number and gets index for that section
        const sectionIndex = this.sections.findIndex((item) => item.sectionNum == sectionNum);
        // add one to that section
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
            console.log(this.item);
        }
    }
};

renderSections(aCourse.sections);

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

  export default aCourse;