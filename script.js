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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function
function writePassword() {

number = confirm("Do you want numbers?")
upperCase = confirm("Do you want upper case letters?")
lowerCase = confirm("Do ypu want lower case letters?")
characters = confirm("Do you want special characters?") 
