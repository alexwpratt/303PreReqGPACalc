# IS303PreReqGPACalc
A javascript Pre-Req GPA Calculator


IS 303 - HW 8 - Javascript 2
April 5
Tuesday, April 5 at 11:59pm MT
Please turn in a flowchart showing the logic of your program (submit as PDF, PNG, or JPG file).

NOTE: There will be some flexibility on the layout of the web page you will create. Use your creativity but make it look professional.

 

Write the necessary JavaScript included within an HTML page to prompt the user to enter:

First Name
Last Name
IS110 Letter Grade
IS201 Letter Grade
IS303 Letter Grade
FIN 201 Letter Grade
ACC 200 Letter Grade
BUS M 241 Letter Grade
 

DO NOT CALCULATE the GPA if any of the inputs mentioned above are NULL. Instead display the message "Enter in ALL data!"

 

Based upon the following legend, calculate the GPA for the pre-requisite courses.

A = 4.0

A- = 3.7

B+ = 3.4

B = 3.0

B- = 2.7

C+ = 2.4

C = 2.0

C- = 1.7

D+ = 1.4

D = 1.0

D- = 0.7

E = 0

 

The GPA is calculated by multiplying the weight of the course (credits) by the GPA value (i.e. 4.0) and then summing all of the values and dividing by the total number of credits.

 

In this case, the total number of credits equals 16 credits. For each of the courses, ask for the letter grade and store it to a variable. After all of the data has been entered, use an IF statement to process the GPA.

 

Once the GPA has been calculated, use the following legend to display the concatenated name with a space between the first and last names, and then the GPA, and the message.

 

If the GPA is >= 3.7, the message is "HIGH PROBABILITY"

If the GPA is >=3.5, the message is "MEDIUM PROBABILITY"

If the GPA is >= 3.3, the message is "LOW PROBABILITY"

If the GPA is less than 3.3, the message is "SLIGHT CHANCE"

 

For example, if the first name was Greg and the last name was Anderson and the following scores were entered:

IS110 = A

IS201 = A-

IS303 = A

FIN 201 = B

ACC 200 = B

BUSM 241 = A

 

The GPA would be:

((4.0 * 1) + (3.7 * 3) + (4.0 * 3) + (3.0 * 3) + (3.0 * 3) + (4.0 * 3) ) / 16 = 3.56875

 

Make sure you round the GPA to 2 decimals. For example, if the variable iGPA contained 3.57683, you could round it to 2 decimals using the following:

parseFloat(iGPA).toFixed(2)

 

You would write to the document a message like:

Greg Anderson with the GPA of 3.57 has a HIGH PROBABILITY of being accepted

 

You should use an external js file and have a function called getGPA which calculates and returns the GPA using all of the course letter grades as inputs and calculates the GPA by dividing by 16 total credits and returning the GPA.

 

Within this function, make calls to another function called getGPA_Value which receives a single letter grade value and returns the associated GPA number. For example, if you called getGPA_Value(IS110); and the variable IS110 had an 'A' as its value, the function getGPA_Value would return a 4.0

 

The getGPA_Value  function will be called for every parameter passed to the getGPA function.

 

And another function called getAccepted which receives a GPA and returns the acceptance chance string (i.e. HIGH PROBABILITY)

 

Make sure you add comments to the code. Upload the zipped files with the JavaScript to Learning Suite. 

 
