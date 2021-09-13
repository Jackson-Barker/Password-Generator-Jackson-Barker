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
    pwlength = parseInt(prompt("The number must be between (8-124"));
  
  } else { 

  number = confirm("Do you want numbers?");
  upperCase = confirm("Do you want upper case letters?");
  lowerCase = confirm("Do ypu want lower case letters?");
  characters = confirm("Do you want special characters?");
  
};

if (!characters && !number && !upperCase && !lowerCase) {
  choices = alert("You are required to chose at least one!");

}

else if (characters && number && upperCase && lowerCase) {

  choices = characters.concat(number, upperCase, lowerCase);

}

// 3

else if (characters && number && upperCase) {
  choices = characters.concat(number, upperCase);
}

else if (characters && number && lowerCase) {
  choices = characters.concat(number, lowerCase); 
}

else if (characters && lowerCase && upperCase) {
  choices = characters.concat(lowerCase, upperCase);

}

else if (number && lowerCase && upperCase) {
  choices = number.concat(lowerCase, upperCase);

}

// 2

else if (characters && number) {
  choices = characters.concat(number);

}

else if (characters && lowerCase) {
  choices = characters.concat(lowerCase);
}

else if (characters && upperCase) {
  choices = characters.concat(upperCase);
}

else if (lowerCase && number) {
  choices = lowerCase.concat(number);
}

else if ( lowerCase && upperCase) {
  choices = lowerCase.concat(upperCase);

}

else if (number && upperCase) {
  choices = number.concat(upperCase);

}

// 1

else if (characters) {
  choices = characters;

}

else if (number) {
  choices = number;

}

else if (lowerCase) {
  choices = lowerCase;
}

// upp

else if (upperCase) {
  choices = upper.concat(upperCase)

};

var password = [];

for (var i = 0; i < pwlength; i++) {
  var pickpwLength = choices[Math.floor(Math.random() * choices.length)];

}




var finalPassword = password.join("");
UserPrefrence(finalPassword);
return (finalPassword);  
}

