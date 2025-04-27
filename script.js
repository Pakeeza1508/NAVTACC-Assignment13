// a calculator 
function calculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    alert(`you entered: ${num1} and ${num2}\n your sum is: ${num1 + num2} \n your difference is: ${num1 - num2} \n your product is: ${num1 * num2} \n your division is: ${num1 / num2}`);
}

// calculator avaerage age of a class of ten students
function calculateAverageAge() {
    let totalAge = 0;
    for (let i = 0; i < 10; i++) {
        let age = parseInt(prompt(`Enter the age of student ${i + 1}:`));
        totalAge += age;
    }
    let averageAge = totalAge / 10;
    alert(`The average age of the class is: ${averageAge}`);
}

// show the digits on the screen separately example 7531 to 1, 3, 5, 7
function separateDigits() {
    let number = prompt("Enter a 4-digit number:");
    if (number.length !== 4 || isNaN(number)) {
        alert("Please enter a valid 4-digit number.");
        return;
    }
    let digits = number.split("");
    digits = digits.reverse();  
    let output = digits.join(", "); 
    alert(`you entered ${number} The digits seprated are: ${output}`);
}

// a program take radius from the user and calculate the area, diametre, circumference of a circle
function circle() {
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }
    // let area = Math.PI * Math.pow(radius, 2);
    let area = Math.PI * radius * radius; 
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    alert(`For a circle with radius ${radius}:\nArea: ${area}\nDiameter: ${diameter}\nCircumference: ${circumference}`);
}

// shoping cart exercise 
function shoppingCart() {
    alert("Welcome to the shop!");
    let itemName = prompt("Enter the name of the item you are buying:");
    let price = parseFloat(prompt(`Enter the price of ${itemName}:`));
    let quantity = parseInt(prompt(`Enter the quantity of ${itemName} you are purchasing:`));
    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        alert("Please enter valid positive numbers for price and quantity.");
        return;
    }
    let totalCost = price * quantity;
    alert(`The total cost for ${quantity} ${itemName}(s) at $${price} each is: $${totalCost}`);
}

// a program to calculate the BMI(BODY MASS INDEX) 
function calculateBMI() {
    let weight = parseFloat(prompt("Enter your weight in kg:"));
    let height = parseFloat(prompt("Enter your height in inches:"));
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }
    let bmi = weight / (height * height);
    bmi = Math.round(bmi * 100) / 100; 
    alert(`Your BMI is: ${bmi} for weight ${weight} and height ${height}`);
}