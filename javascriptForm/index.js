let StudentData = [];

function appendStudentData() {
    let firstname = document.forms["studentDataForm"]["firstname"].value;
    let lastname = document.forms["studentDataForm"]["lastname"].value;
    let rollno = document.forms["studentDataForm"]["rollno"].value;
    let age = document.forms["studentDataForm"]["age"].value;
    if (firstname == "") {
      alert("Name must be filled out");
    }
    if(lastname == ""){
        alert("Last name must be filled out");
    }
    if(isNaN(rollno) || rollno < 1 || rollno > 207){
        alert("Not a valid Roll no");
    }
    if(isNaN(age) || age < 0){
        alert("Not a valid age");
    }
    let temporaryStudentData = {
        firstname: firstname,
        lastname: lastname,
        rollno: rollno,
        age: age
    }
    StudentData.push(temporaryStudentData);
    document.forms["studentDataForm"].reset();
      return false;
  }

    function displayStudentData() {
        let rollNotoFind = document.forms["getStudentDataForm"]["rollno"].value;
        document.forms["getStudentDataForm"].reset();
        let rollNoFound = false;
        if(isNaN(rollNotoFind) || rollNotoFind < 1 || rollNotoFind > 207){
            alert("Not a valid Roll no");
            return false;
        }
        StudentData.forEach(function(student){
            if(student.rollno === rollNotoFind){
                rollNoFound = true;
                document.getElementById("displayStudentData").innerHTML = "Student Data: " + student.firstname + " " + student.lastname + " " + student.rollno + " " + student.age;
            }
        });
        if(!rollNoFound){
            document.getElementById("displayStudentData").innerHTML = "Student Data not found";
        }
        return false;
    }

    //   console.log(StudentData);
