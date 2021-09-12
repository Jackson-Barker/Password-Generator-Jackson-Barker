// defined variables 

var pwlength;
var number;
var upperCase;
var lowerCase;
var characters;



// password variables

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "<", ">", "?", "/", "|", "[", "]"]
upper = [],

// container for user choices 
 var choices;

 var toUpper = function (x) {
   return x.toUpperCase();
 };
 
 upperLetters = letters.map(toUpper);

 var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  finalPassword = writePassword();
  document.getElementById("password").placeholder = finalPassword;
});

// function
function writePassword() {
  
  pwlength = parseInt(prompt("How many characters do you want in your password? (8-128)"));

  if (!pwlength) {
    alert("This field is required");
  } else if (pwlength < 8 || pwlength > 128) {
    pwlength = parseInt(promt("The number must be between (8-124"))
  
  } else { 

  number = confirm("Do you want numbers?");
  upperCase = confirm("Do you want upper case letters?");
  lowerCase = confirm("Do ypu want lower case letters?");
  characters = confirm("Do you want special characters?");
  
};

var password = [];

var finalPassword = password.join("");
UserPrefrence(finalPassword);
return (finalPassword);  
}

