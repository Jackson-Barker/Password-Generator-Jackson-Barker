// defined variables

var pwlength;
var number;
var upperCase;
var lowerCase;
var characters;

// password variables

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowerCase = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
characters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "{",
  "}",
  "<",
  ">",
  "?",
  "/",
  "|",
  "[",
  "]",
];
upper = [];

// container for user choices
var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  finalPassword = writePassword();
  document.getElementById("password").placeholder = finalPassword;
});

// function
function writePassword() {
  pwlength = parseInt(
    prompt("How many characters do you want in your password? (8-128)")
  );

  if (!pwlength) {
    alert("This field is required");
  } else if (pwlength < 8 || pwlength > 128) {
    pwlength = parseInt(prompt("The number must be between (8-124"));
  } else {
    confirm.number = confirm("Do you want numbers?");
    confirm.upperCase = confirm("Do you want upper case letters?");
    confirm.lowerCase = confirm("Do ypu want lower case letters?");
    confirm.characters = confirm("Do you want special characters?");
  }

  if (
    !confirm.characters &&
    !confirm.number &&
    !confirm.upperCase &&
    !confirm.lowerCase
  ) {
    choices = alert("You are required to chose at least one!");
  } else if (
    confirm.characters &&
    confirm.number &&
    confirm.upperCase &&
    lowerCase
  ) {
    choices = characters.concat(number, upperCase, lowerCase);
  }

  // 3
  else if (confirm.characters && confirm.number && confirm.upperCase) {
    choices = characters.concat(number, upperCase);
  } else if (confirm.characters && confirm.number && confirm.lowerCase) {
    choices = characters.concat(number, lowerCase);
  } else if (confirm.characters && confirm.lowerCase && confirm.upperCase) {
    choices = characters.concat(lowerCase, upperCase);
  } else if (confirm.number && confirm.lowerCase && confirm.upperCase) {
    choices = number.concat(lowerCase, upperCase);
  }

  // 2
  else if (confirm.characters && confirm.number) {
    choices = characters.concat(number);
  } else if (confirm.characters && confirm.lowerCase) {
    choices = characters.concat(lowerCase);
  } else if (confirm.characters && confirm.upperCase) {
    choices = characters.concat(upperCase);
  } else if (confirm.lowerCase && confirm.number) {
    choices = lowerCase.concat(number);
  } else if (confirm.lowerCase && confirm.upperCase) {
    choices = lowerCase.concat(upperCase);
  } else if (confirm.number && confirm.upperCase) {
    choices = number.concat(upperCase);
  }

  // 1
  else if (confirm.characters) {
    choices = characters;
  } else if (confirm.number) {
    choices = number;
  } else if (confirm.lowerCase) {
    choices = lowerCase;
  }

  // upp
  else if (confirm.upperCase) {
    choices = upper.concat(upperCase);
  }

  var password = [];

  for (var i = 0; i < pwlength; i++) {
    var pickpwLength = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickpwLength);
  }

  var finalPassword = password.join("");
  UserPrefrence(finalPassword);
  return finalPassword;
}

function UserPrefrence(finalPassword) {
  document.getElementById("password").textContent = finalPassword;
}
