//Make the columns reusable.
const columns = `
        <div class="timeContainer">
          <input class="time" type="time">
          <input class="time" type="time">
        </div>
        <input class="TC" type="text">
        <input class="TC" type="text">
        <input class="TC" type="text">
        <input class="TC" type="text">
        <input class="TC" type="text">
        <input class="TC" type="text">
        <input class="TC" type="text">
      <img class="deleteT" src="Img/deleterLight.png" alt="" />
      `;

//Create a function to add a column to the Time Table when called upon.
function addColum() {
  let cols = document.createElement('div');
  cols.className = 'cols';
  cols.innerHTML = columns;
  document.getElementById('timetable_container').appendChild(cols);
  // Scroll to the right
  document.getElementById('timetable').scrollTo({ left: document.getElementById('timetable').scrollWidth, behavior: 'smooth' });
  DeleteT();
}

//Function to save the time table.
function saveTimeTable() {
  let Course_Array = [];
  let Time_Array = [];

  let All_Courses = document.querySelectorAll(".TC");
  let All_Times = document.querySelectorAll(".time");

  for (let r = 0; r < All_Times.length; r++) {
    Time_Array.push(All_Times[r].value);
  }
  for (let r = 0; r < All_Courses.length; r++) {
    Course_Array.push(All_Courses[r].value);
  }

  let TimeTable = {
    Cr: Course_Array,
    Tm: Time_Array,
    Form: document.getElementById('timetable_container').innerHTML
  }

  localStorage.setItem("TimeTable", JSON.stringify(TimeTable));
  myAlertWork("TimeTable Saved ");
}

//Function to view The saved Time Table 
function viewTimeTable() {
  let TimeTable = JSON.parse(localStorage.getItem("TimeTable"));

  if (TimeTable) {
    document.getElementById("timetable_container").innerHTML = TimeTable.Form;

    let Co_dis = document.querySelectorAll(".TC");
    let Te_dis = document.querySelectorAll(".time");

    for (let r = 0; r < Co_dis.length; r++) {
      Co_dis[r].value = TimeTable.Cr[r];
    }
    for (let r = 0; r < Te_dis.length; r++) {
      Te_dis[r].value = TimeTable.Tm[r];
    }
    DeleteT();
  } else {
    myAlertWork("No TimeTable Saved ");
  }
}

//Function to Delete in table 
function DeleteT() {
  let table = document.getElementById('timetable_container');
  table.addEventListener('click',
    (event) => {
      if (event.target.classList.contains('deleteT')) {
        // Get the current row element
        let column = event.target.closest('.cols');
        /*Remove the row from the DOM  */
        if (column) {
          column.style.animation = "smaller 1s";
          setTimeout(function() {
            column.remove();
          }, 990);
        }
      }
    });
}

if (JSON.parse(localStorage.getItem("TimeTable"))) {
  viewTimeTable();
}

document.getElementById('addColumn').addEventListener('click', () => {
  addColum();
});

document.getElementById('saveTimeTable_btn').addEventListener('click', () => {
  saveTimeTable();
});

document.getElementById('viewTimeTable_btn').addEventListener('click', () => {
  viewTimeTable();
});