// Assignment Code
var optionsArray=[];
var optionsLength = 10;
var optionsNum = [0,1,2,3,4,5,6,7,8,9];
var optionsLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var optionsUpper = ["A","B","C","D","E","F","G","H","I","J","L","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var optionsSpec = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "?", ];
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

//create prompt for number of characters in password
//create alert if password length number entered was lower than 8
//alert if greater than 128
//prompt for special characters
//prompt for numeric
//prompt for uppercase
//prompt for lowercase

function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
      var Password = generatePassword();
      passwordText.value = Password;
  } else {
      passwordText.value = "";
  }
}

//generateBtn.textContent = "";
//generateBtn.appendChild()
//window.alert("Your password is" + writePassword);
//var generateBtn = window.prompt("");
//random number generator
//var passwordChar
//}

function generatePassword(){
  var password = "";
  for (var i=0; i< optionsLength; i++) {
      var random = [Math.floor(Math.random()* optionsArray.length)]
      password = password + optionsArray[random];
  }
  return password;
      
}

function getPrompts() {
  optionsArray = [];
  optionsLength = parseInt(prompt("Select how many numbers you'd like to have, between 8-128"));

  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Before continuing, please input a number between 8 - 128.");
      return false;
  }
  else {
    confirmSpecial = confirm("Would you like the password to contain Special Characters?");
    confirmNum = confirm("Would you like the password to contain Numbers?");
    confirmUpper = confirm("Would you like the password to contain Uppercase Letters?");
    confirmLower = confirm("Would you like the password to contain Lowercase Letters?");
};
// If no parameters were specified then alert
if (!confirmSpecial && !confirmNum && !confirmUpper && !confirmLower) {
    alert("There were no selected options.");
    return false;
}
if (confirmSpecial) {
    userChoicePush(special)
}
if (confirmNum) {
    userChoicePush(numbers)
}
if (confirmUpper) {
    userChoicePush(upper)
}
if (confirmLower) {
    userChoicePush(lower)
}
return true;
}

// Add event listener to generate button

