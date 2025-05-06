// JS 1
function checkColor(){
        // Prompt user for input
    favoriteColor = prompt("Enter your favorite color:");
    shirtColor = prompt("Enter the color of your shirt:");
    if(favoriteColor === "" || shirtColor === ""  || favoriteColor === NaN || shirtColor === NaN){
        alert("Please enter a valid color.");
        checkColor();
    }
    colorMessage(favoriteColor, shirtColor);
}
function colorMessage(favoriteColor, shirtColor) {
    // Compare and get the result
    if (favoriteColor.toLowerCase() === shirtColor.toLowerCase()) {
        // return "The shirt is your favorite color!";
        // console.log("The shirt is your favorite color!");
        alert("The shirt is your favorite color!");
        
    } else {
        // return message = "That is a nice color.";
        // console.log("That is a nice color.");   
        alert("That is a nice color.");
    }
}
// JS 2
function takeNumber(){
    // Prompt user for input
    number = prompt("Enter the number to check if it is even or odd:");
    if(number === "" || number === NaN){
        alert("Please enter a valid number.");
        takeNumber();
    }
    isEven(number);
}
function isEven(number) {
    if (number % 2 === 0) {
    //   return true; // It's even
    alert(number + " is even.");
    } else {
    //   return false; // It's odd
      alert(number + " is odd.");
    }
  }

// JS 3
function age()
{
    // Prompt user for input
    age = prompt("Enter the age of the student:");
    if(age === "" || age === NaN){
        alert("Please enter a valid number between 0 qnd 140 only.");
        age();
    }
    lifePhase(age);
}
function lifePhase(age) {
    if (age < 0 || age > 140) {
      return "This is not a valid age.";
    } else if (age >= 0 && age <= 3) { 
    //   return "baby";
    alert("baby");
    } else if (age >= 4 && age <= 12) { 
    //   return "child";
    alert("child");
    } else if (age >= 13 && age <= 19) { 
    //   return "teen";
        alert("teen");
    } else if (age >= 20 && age <= 64) { 
    //   return "adult";
        alert("adult");
    } else { 
    //   return "senior citizen";
        alert("senior citizen");
    }
  }

// JS 4
function inputGrades() {    
    // Prompt user for input
    grade1 = parseInt(prompt("Enter the first grade:"));
    grade2 = parseInt(prompt("Enter the second grade:"));
    grade3 = parseInt(prompt("Enter the third grade:"));
    if(grade1 === "" || grade2 === "" || grade3 === "" || isNaN(grade1) || isNaN(grade2) || isNaN(grade3)){
        alert("Please enter a valid number between 0 and 100 only.");
        inputGrades();
    }
    finalGrade(grade1, grade2, grade3);
}
function finalGrade(grade1, grade2, grade3) {
    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
        alert("You have entered an invalid grade. \nPlease enter a valid number between 0 and 100 only.");
        return; // stop execution here
    }

    let average = (grade1 + grade2 + grade3) / 3;

    if (average >= 90 && average <= 100) {
        alert("A");
    } else if (average >= 80 && average < 90) {
        alert("B");
    } else if (average >= 70 && average < 80) {
        alert("C");
    } else if (average >= 60 && average < 70) {
        alert("D");
    } else {
        alert("F");
    }
}

// JS 5
function takeArray() {
    let array = prompt("Enter the elements of the array separated by commas:");
    if (!array || array.trim() === "") {
        alert("Please enter a valid array.");
        return takeArray();    
    }

    // alert(array.length);
    let inputArray = [];
    let current = "";
    let j = 0;

    for (let i = 0; i < array.length; i++) {
       
        if (array[i] === ",") {
            inputArray[j] = current.trim();
            current = "";
            j++;
        } else {
            current += array[i];
        }
    }
    inputArray[j] = current.trim(); // Add the last item
    reverseArray(inputArray);
}

function reverseArray(arr) {
    let reversedArray = [];

    for (let i = 0; i < arr.length; i++) {
        reversedArray[i] = arr[arr.length - 1 - i];
    }

    // Manually create a string to show
    let output = "";
    for (let i = 0; i < reversedArray.length; i++) {
        if (i !== 0) output += ", ";
        output += reversedArray[i];
    }

    alert(`your reversed array is: ${output}`);
}

// JS 6
function showQuarterMonths() {
    let quarter = parseInt(prompt("Enter quarter number (1 to 4):"));
    switch (quarter) {
        case 1:
            alert("Months in Quarter 1: January, February, March");
            break;
        case 2:
            alert("Months in Quarter 2: April, May, June");
            break;
        case 3:
            alert("Months in Quarter 3: July, August, September");
            break;
        case 4:
            alert("Months in Quarter 4: October, November, December");
            break;
        default:
            alert("Please enter a valid quarter number between 1 and 4.");
    }
}

  