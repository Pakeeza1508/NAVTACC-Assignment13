
// calculate BMI in pounds and inches
function enhancedBMI() {
    alert("Welcome to the BMI calculator!\n We are going to calculate your BMI in pounds and inches.\n Please enter your weight in pounds and height in inches. But if you want to use kg and feet, please enter them in the prompt as well.\n\nNote: 1 kg = 2.20462 lbs and 1 foot = 12 inches.");
    const weightInput = prompt("Enter your weight:");
    const weightUnit = prompt("Enter the unit for your weight (kg or lbs):").toLowerCase();
    const heightInput = prompt("Enter your height:");
    const heightUnit = prompt("Enter the unit for your height (inches or feet):").toLowerCase();
  
    let weightInPounds;
    let heightInInches;

    if (weightUnit === "kg") {
      weightInPounds = parseFloat(weightInput) * 2.20462;
    } else if (weightUnit === "lbs") {
      weightInPounds = parseFloat(weightInput);
    } else {
      alert("Invalid weight unit. Please enter 'kg' or 'lbs'.");
      return;
    }

    if (heightUnit === "feet") {
      heightInInches = parseFloat(heightInput) * 12;
    } else if (heightUnit === "inches") {
      heightInInches = parseFloat(heightInput);
    } else {
      alert("Invalid height unit. Please enter 'inches' or 'feet'.");
      return;
    }

    if (isNaN(weightInPounds) || isNaN(heightInInches)) {
        console.log("Invalid numeric input for height or weight.");
        enhancedBMI(); 
      }
    
    const bmi = parseFloat((weightInPounds * 703) / (heightInInches * heightInInches));
  
    let category = "";
    if (bmi < 16.0) {
      category = "Severely Underweight";
    } else if (bmi >= 16.0 && bmi <= 18.4) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = "Overweight";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      category = "Moderately Obese";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      category = "Severely Obese";
    } else {
      category = "Morbidly Obese";
    }
    alert(`Your BMI of ${bmi} \n for weight ${weightInPounds.toFixed(3)} ${weightUnit} and height ${heightInInches} ${heightUnit} \n makes you "${category}"`);
  }
  
  function tweetChecker() {
    let userTweet = prompt("Enter your tweet:");
  
    // Handle cancel or empty input safely
    if (userTweet === null || userTweet.trim() === "") {
      alert("You entered nothing.");
      return;
    }
  
    let tweetLength = userTweet.length;
    const maxLength = 140;
  
    if (tweetLength <= maxLength) {
      alert(`That ${tweetLength}-character tweet will work!`);
    } else {
      const tooLongBy = tweetLength - maxLength;
      alert(`Your tweet is ${tooLongBy} characters long.\nTweets must be ${maxLength} characters or fewer.`);
    }
  }
  
  // pizza exercise
  function pizzaOrder() {
    alert("Welcome to Python Pizza!");
  
    alert(`
    --- Python Pizza Menu ---
    Small pizza (S): $15
    Medium pizza (M): $20
    Large pizza (L): $25
  
    Add pepperoni:
      - Small pizza (Y/N): +$2
      - Medium or Large pizza (Y/N): +$3
  
    Add extra cheese (Y/N): +$1 (for any size)
    -------------------------
    `);
  
    let size = prompt("Enter the size of pizza you want (S, M, or L):").toUpperCase();
    let bill = 0;
  
    if (size === "S") {
      bill = 15;
    } else if (size === "M") {
      bill = 20;
    } else if (size === "L") {
      bill = 25;
    } else {
      alert("Invalid pizza size. Please enter S, M, or L.");
      return;
    }
  
    let addPepperoni = prompt(`Do you want to add pepperoni? (Y/N) (+$${size === "S" ? 2 : 3})`).toUpperCase();
    if (addPepperoni === "Y") {
      if (size === "S") {
        bill += 2;
      } else {
        bill += 3;
      }
    } else if (addPepperoni !== "N") {
      alert("Invalid input for pepperoni. Please enter Y or N.");
      return;
    }
  
    const addCheese = prompt("Do you want to add extra cheese? (Y/N) (+$1)").toUpperCase();
    if (addCheese === "Y") {
      bill += 1;
    } else if (addCheese !== "N") {
      alert("Invalid input for extra cheese. Please enter Y or N.");
    }
  
    alert(`Thank you for choosing Python Pizza Deliveries!\nYour final bill is: $${bill}.\n you ordered a ${size} pizza with ${addPepperoni === "Y" ? "pepperoni" : "no pepperoni"} and ${addCheese === "Y" ? "extra cheese" : "no extra cheese"}.`);
  }
  
  // a keyless car exercise program
  function keylessCar() {
    const age = parseInt(prompt("Please enter your age:"));
  
    if (isNaN(age)) {
      alert("Invalid input. Please enter a valid number for your age.");
      return; // Stop the function if the input is not a number
    }
  
    if (age < 18) {
      alert("Sorry, you are too young to drive this car. Powering off.");
    } else if (age === 18) {
      alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
      alert("Powering On. Enjoy the ride!");
    }
  }
  
  // week left exercise
  function weeksLeft() {
    let currentAge = parseInt(prompt("Enter your current age:"));
    let lifeExpectancy = 90;
    let weeksInYear = 52;
  
    if (isNaN(currentAge)) {
      alert("Invalid input. Please enter a valid number for your age.");
      return;
    }
  
    if (currentAge >= lifeExpectancy) {
      alert("You have already reached or exceeded the assumed life expectancy of 90 years.");
    } else {
     let yearsLeft = lifeExpectancy - currentAge;
      let weeksRemaining = yearsLeft * weeksInYear;
      alert(`You have ${weeksRemaining} weeks left.`);
    }
  }