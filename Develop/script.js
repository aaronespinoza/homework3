// Assignment Code

var optionsLength = [128<=index<=8];
var optionsNum = [0,1,2,3,4,5,6,7,8,9];
var optionsLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var optionsLow = ["A","B","C","D","E","F","G","H","I","J","L","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var optionsSpec = ["!","@","#","%","&"];
var generateBtn = document.querySelector("#generate");



//create prompt for number of characters in password
//create alert if password length number entered was lower than 8
//alert if greater than 128
//prompt for special characters
//prompt for numeric
//prompt for uppercase
//prompt for lowercase
function characterLength (){
  
  window.prompt("Enter a number between 8 and 128 for desired password length")
};

generateBtn.addEventListener("click", characterLength);


//var generateBtn = document.querySelector("#generate");
//generateBtn.textContent = "";
//generateBtn.appendChild()

//window.alert("Your password is" + writePassword);

//var generateBtn = window.prompt("");



//random number generator
//var passwordChar
//for (let i=0; i< optionsLength; i++) {
//  var index = [Math.floor(Math.random()* optionsLength)]
//  passwordChar.push(character) 
//}

//function generatePassword(){

//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
