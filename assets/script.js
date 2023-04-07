

var characterLength = 4;
var choiceArr = [];

var specialCharacterArr = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberArr  = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];


// Assignment code here
var generateButton = document.querySelector("#generate");

// Get references to the #generate element
var generateButton = document.querySelector("#generate");


// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // true or false
  var passwordinfo = document.querySelector("#password");

  if (correctPrompts) {
   var newPassword = generatePassword();
   passwordinfo.value = newPassword;

  } else {
    passwordinfo.value = "";

  }

}

function generatePassword() {
// generate password based on prompt
var password = "";
for(var i = 0; i < characterLength; i++){
  var ranLetters = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[ranLetters];
}
return password;
}

function getPrompts(){
  choiceArr = [];

  characterLength = parseInt(prompt("Set length of password: (4-128 characters)"));

  if (isNaN(characterLength) || characterLength < 4 || characterLength > 128) {
    alert("Password length can't be larger than 128 characters or less than 4 characters. Also try only submitting only numbers. Please try again.");
    return false;
  }

  if (confirm("Would you like to have lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }

  if (confirm("Would you like to have capital letters in your password?")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }

  if (confirm("Would you like to have numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }

  if (confirm("Would you like to have special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  return true;
}