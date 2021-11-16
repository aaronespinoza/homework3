// Assignment Code
var optionsArray=[];
var optionsLength = 8;
var optionsNum = [0,1,2,3,4,5,6,7,8,9];
var optionsLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var optionsUpper = ["A","B","C","D","E","F","G","H","I","J","L","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
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
  optionsArray=[];
  optionsLength = parseInt(prompt("Enter a number between 8 and 128 for desired password length"));

  if  (isNaN(optionsLength)|| optionsLength < 8 || optionsLength> 128) {
    alert("character length must be an integer 8-128 characters long");
    return false;
  }
  if(confirm("Do you want numbers in your password")) {
    optionsArray = optionsArray.concat(optionsNum);
  }
  if(confirm("Do you want lower case letters in your password")) {
    optionsArray = optionsArray.concat(optionsLow);
  }
  if(confirm("Do you want upper case letters in your password")) {
    optionsArray = optionsArray.concat(optionsUpper);
  }
  if(confirm("Do you want special characters in your password")) {
    optionsArray = optionsArray.concat(optionsSpec);
  }
  return true;

}

generateBtn.addEventListener("click", characterLength);


var generateBtn = document.querySelector("#generate");
//generateBtn.textContent = "";
//generateBtn.appendChild()

//window.alert("Your password is" + writePassword);

//var generateBtn = window.prompt("");



//random number generator
//var passwordChar
//}

function generatePassword(){
  var password = "";
  for (let i=0; i< optionsLength; i++) {
      var index = [Math.floor(Math.random()* optionsLength)]
      password = password + optionsArray[index];
  }
  return password;
      
}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var validInput = characterLength();
  if (validInput){
    var password = generatePassword();
    

    passwordText.value = password;
  }
  else{
    passwordText.value="";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
