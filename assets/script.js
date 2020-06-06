//Console.log test 
console.log("")
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("generatePassword initalize")
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var legenthOfPassword = prompt("How many characters would you like?")
  if(legenthOfPassword < 8 || legenthOfPassword > 128){
    alert("Please choose a length between 8 and 128");
    return;
  }
  var specialConfirm = confirm("Would you like to use any special characters?")
  var numberConfirm = confirm("Would you like to use any numbers?")
  var lowerCase = confirm("Would you like to use lower case letters?")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
