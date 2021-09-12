// Variable Assignments
//
var generateBtn = document.querySelector("#generate");
var storedPassword = [];
var numberLength = 0;
var finalPassword = "";

// Password function
function writePassword() {
  var numberRange = prompt("enter a number from (8-128)");
  if (numberRange < 8 || numberRange > 128) {
    alert("Pick a number between (8-128)");
  } else {
    numberLength = numberRange;
  }

  // Declaring Variables for All Confirm Statements
  var uppercase = confirm("Do you want to use uppercase letters?");
  var lowercase = confirm("Do you want to use lowercase letters?");
  var number = confirm("Do you want to use numbers?");
  var character = confirm("Do you want to use special characters?");

  // uppercase, lowercase, and number functions
  // uppercase
  if (uppercase) {
    for (let i = 65; i <= 90; i++) {
      storedPassword.push(i);
    }
    // lowercase
    if (lowercase) {
      for (let i = 97; i <= 122; i++) {
        storedPassword.push(i);
      }
    }
    // number
    if (number) {
      for (let i = 0; i <= 9; i++) {
        storedPassword.push(i);
      }
    }
