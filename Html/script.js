    //Save GPA
    Id("saveGPA").addEventListener('click', () => {
      /* Create empty arrays to store all the courses, credit unit and grades values*/
      let Course_Array = [];
      let Credit_Array = [];
      let Grade_Array = [];

      /*Select all the courses, credit units and grade input elements*/
      let All_Courses = document.querySelectorAll(".Course");
      let All_Credit_Unis = document.querySelectorAll(".Credit_Unit");
      let All_Grades = document.querySelectorAll(".Grade");

      /*Push the values into there individual  array*/
      for (let r = 0; r < All_Courses.length; r++) {
        Course_Array.push(All_Courses[r].value);
        Credit_Array.push(All_Credit_Unis[r].value);
        Grade_Array.push(All_Grades[r].innerText);
      }

      /*Create a Result obj*/
      let GPA_ResultObj = {
        Co: Course_Array,
        Cr: Credit_Array,
        Gr: Grade_Array,
        Form: Id("Results_Table").innerHTML
      }

      /*  Create the Result File*/
      localStorage.setItem("GPA_R", JSON.stringify(GPA_ResultObj));
      myAlertWork("GPA Results Saved ");
    });
    //Save CGPA
    Id("saveCGPA").addEventListener('click', () => {
      /* Create empty arrays to store all the courses, credit unit and grades values*/
      let Course_Array = [];
      let Credit_Array = [];
      let Grade_Array = [];

      /*Select all the courses, credit units and grade input elements*/
      let All_Courses = document.querySelectorAll(".Course");
      let All_Credit_Units = document.querySelectorAll(".Credit_Unit");
      let All_Grades = document.querySelectorAll(".Grade");

      /*Push the values into there individual  array*/
      for (let r = 0; r < All_Courses.length; r++) {
        Course_Array.push(All_Courses[r].value);
        Credit_Array.push(All_Credit_Units[r].value);
        Grade_Array.push(All_Grades[r].innerText);
      }

      /*Create a Result obj*/
      let CGPA_ResultObj = {
        Co: Course_Array,
        Cr: Credit_Array,
        Gr: Grade_Array,
        Form: Id("CGPA_Container").innerHTML
      }
      //Create the Result File
      localStorage.setItem("CGPA_R", JSON.stringify(CGPA_ResultObj));
      myAlertWork("Results Saved ");
    });