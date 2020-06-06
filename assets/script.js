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
  var legenthOfPassword = prompt("How many characthers would you like your password to contain?")
  if(legenthOfPassword < 8 || legenthOfPassword > 128 || isNaN(legenthOfPassword)){
    alert("Please choose a length between 8 and 128");
    return "A valid password will need at least 8-128 characters.";
  }
  var specialConfirm = confirm("Would you like to use any special characters?")
  var numberConfirm = confirm("Would you like to use any numbers?")
  var lowerCase = confirm("Would you like to use lower case letters?")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
