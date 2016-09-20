//-----START JAVASCRIPT------------------------------------------------------

/** getGPA_Value
 * PURPOSE: to get the point value for the GPA from the letter grade
 *
 * @param the letter grade
 * @return the points from 0.0 - 4.0 based on the class grade
 */
function getGPA_Value(sLetterGrade) {
    sLetterGrade = sLetterGrade.toUpperCase(); // convert their answer to upper case for comparison
    var dGPA = 0;
    switch (sLetterGrade) {
    case "A":
        dGPA = 4.0;
        break;
    case "A-":
        dGPA = 3.7;
        break;
    case "B+":
        dGPA = 3.4;
        break;
    case "B":
        dGPA = 3.0;
        break;
    case "B-":
        dGPA = 2.7;
        break;
    case "C+":
        dGPA = 2.4;
        break;
    case "C":
        dGPA = 2.0;
        break;
    case "C-":
        dGPA = 1.7;
        break;
    case "D+":
        dGPA = 1.4;
        break;
    case "D":
        dGPA = 1.0;
        break;
    case "D-":
        dGPA = 0.7;
        break;
    default: //case "E":
        dGPA = 0;
        break;
    }
    return dGPA;
}



/** getGPA
 * PURPOSE: to calculate the GPA from all the classes, using getGPA_Value
 *
 * @param the letter grade for each of the courses
 * @return the GPA across the 16 total credits
 */
function getGPA(sLetterIS110, sLetterIS201, sLetterIS303, sLetterFIN201, sLetterACC200, sLetterBUSM241) {
    var dGPA = ((getGPA_Value(sLetterIS110) * 1) + (getGPA_Value(sLetterIS201) * 3) + (getGPA_Value(sLetterIS303) * 3) + (getGPA_Value(sLetterFIN201) * 3) + (getGPA_Value(sLetterACC200) * 3) + (getGPA_Value(sLetterBUSM241) * 3)) / 16;

    return dGPA;
}




/** roundTo2Decimals
 * PURPOSE: to limit the GPA to 2 decimal places and round it
 *
 * @return the GPA rounded to 2 places
 */
function roundTo2Decimals(dGPA) {
    return parseFloat(Math.round(dGPA * 100) / 100).toFixed(2);
}




/** getAccepted
 * PURPOSE: to set the sMessage based on the GPA
 *
 * @return the message based on the GPA
 */
function getAccepted(dGPA) {
    var sMessage = "";
    if (dGPA >= 3.7) {
        sMessage = "HIGH PROBABILITY";
    } else if (dGPA >= 3.5) {
        sMessage = "MEDIUM PROBABILITY";
    } else if (dGPA >= 3.3) {
        sMessage = "LOW PROBABILITY";
    } else {
        sMessage = "SLIGHT CHANCE";
    }
    return sMessage;
}


/**calculateGPA
 * PURPOSE: to call the other methods and run the program
 */
function calculateGPA() {
    //document.getElementById("").value


    if (document.getElementById("FirstName").value == "" || document.getElementById("LastName").value == "") {
        document.getElementById("Answer").innerHTML = "Enter in your first and last name!";
    } else {
        //check if any of the variables are empty, if so, display a message saying "Enter in ALL data!":
        if (document.getElementById("GradeIS110").value == "" || document.getElementById("GradeIS201").value == "" || document.getElementById("GradeIS303").value == "" || document.getElementById("GradeFIN201").value == "" || document.getElementById("GradeACC200").value == "" || document.getElementById("GradeBUSM241").value == "") {
            document.getElementById("Answer").innerHTML = "Enter in ALL data!";
        } else {
            var dGPA = roundTo2Decimals(getGPA(document.getElementById("GradeIS110").value, document.getElementById("GradeIS201").value, document.getElementById("GradeIS303").value, document.getElementById("GradeFIN201").value, document.getElementById("GradeACC200").value, document.getElementById("GradeBUSM241").value));
            var sMessage = getAccepted(dGPA);

            //outputs the user's information in the page:
            document.getElementById("Answer").innerHTML = document.getElementById("FirstName").value + " " + document.getElementById("LastName").value + " with the GPA of " + dGPA + " has a " + sMessage + " of being accepted";
        }
    }
}

/** resetPage()
 * PURPOSE: to reload the page
 */
function resetPage() {
    location.reload();
}

//-----END JAVASCRIPT------------------------------------------------------