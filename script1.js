// JS 1
function calculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    alert(`you entered: ${num1} and ${num2}\n your sum is: ${num1 + num2} \n your difference is: ${num1 - num2} \n your product is: ${num1 * num2} \n your division is: ${num1 / num2}`);
}

// JS 2
function calculateAverageAge() {
    let totalAge = 0;
    for (let i = 0; i < 10; i++) {
        let age = parseInt(prompt(`Enter the age of student ${i + 1}:`));
        totalAge += age;
    }
    let averageAge = totalAge / 10;
    alert(`The average age of the class is: ${averageAge}`);
}

// JS 3
// function separateDigits() {
//     let number = prompt("Enter a 4-digit number:");
//     if (number.length !== 4 || isNaN(number)) {
//       alert("Please enter a valid 4-digit number.");
//       return;
//     }
//     let digit1 = number[0];
//     let digit2 = number[1];
//     let digit3 = number[2];
//     let digit4 = number[3];
//     let reversedOutput = `${digit4}, ${digit3}, ${digit2}, ${digit1}`;  
//     alert(`You entered ${number}. The digits separated are: ${reversedOutput}`);
//   }
  
function separateDigits() {
    let number = prompt("Enter a 4-digit number:");
  
    if (number.length !== 4 || isNaN(number)) {
      alert("Please enter a valid 4-digit number.");
      separateDigits(); 
    }
  
    let num = parseInt(number); 
    let digit1 = Math.floor(num / 1000); 
    let remainder = num % 1000;      
    let digit2 = Math.floor(remainder / 100); 
    remainder = remainder % 100;    
    let digit3 = Math.floor(remainder / 10);  
    let digit4 = remainder % 10;     
  
    let reversedOutput = `${digit4}, ${digit3}, ${digit2}, ${digit1}`;
  
    alert(`You entered ${number}. The digits separated are: ${reversedOutput}`);
  }

// JS 4
function circle() {
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        circle();
    }
    // let area = Math.PI * Math.pow(radius, 2);
    let area = Math.PI * radius * radius; 
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    alert(`For a circle with radius ${radius}:\nArea: ${area}\nDiameter: ${diameter}\nCircumference: ${circumference}`);
}

// JS 5
function shoppingCart() {
    alert("Welcome to the shop!");
    let itemName = prompt("Enter the name of the item you are buying:");
    let price = parseFloat(prompt(`Enter the price of ${itemName}:`));
    let quantity = parseInt(prompt(`Enter the quantity of ${itemName} you are purchasing:`));
    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        alert("Please enter valid positive numbers for price and quantity.");
        shoppingCart();
    }
    let totalCost = price * quantity;
    alert(`The total cost for ${quantity} ${itemName}(s) at $${price} each is: $${totalCost}`);
}

// JS 6 
function calculateBMI() {
    let weight = parseFloat(prompt("Enter your weight in kg:"));
    let height = parseFloat(prompt("Enter your height in inches:"));
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        calculateBMI();
    }
    let bmi = weight / (height * height);
    bmi = Math.round(bmi * 100) / 100; 
    alert(`Your BMI is: ${bmi} for weight ${weight} and height ${height}`);
}
