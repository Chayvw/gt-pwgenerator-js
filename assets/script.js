//Console.log test 
console.log("")
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Creates an array that lists out all of the special character options
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Creates an array that lists out all of the lower case character options
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creates an array that lists out all of the upper case character options
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Creates an array that lists out all of the numeric character options
var numberArray = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var userChoice = [];



function generatePassword() {
  var legenthOfPassword = prompt("How many characthers would you like your password to contain?")
  if (legenthOfPassword < 8 || legenthOfPassword > 128) {
    alert("Please choose a length between 8 and 128");
    return generatePassword();
    // add regular expression
  }
  var specialConfirm = confirm("Would you like to use any special characters?")
  var numberConfirm = confirm("Would you like to use any numbers?")
  var lowerCase = confirm("Would you like to use lower case letters?")
  var upperCase = confirm("Would you like to use upper case letters?")
  // user "library" 
  userChoice = [];
  if (specialConfirm) {
    userChoice = userChoice.concat(special)
  }
  console.log(userChoice)
  if (numberConfirm) {
    userChoice = userChoice.concat(numberArray)
  }
  console.log(userChoice)

  if (lowerCase) {
    userChoice = userChoice.concat(lower)
  }
  console.log(userChoice)
  if (upperCase) {
    userChoice = userChoice.concat(upper)
  }
  console.log(userChoice)

  if(userChoice.length===0){
    alert ("At least one type of character needs to be selected")
    return generatePassword();
  }
  console.log(userChoice)

  var newPassword="";
  for(var i=0; i< legenthOfPassword;i++){
    var ranNumber = Math.floor(Math.random() * userChoice.length);
    newPassword += userChoice[ranNumber];
  }
  return newPassword;
  console.log(userChoice)






}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("generatePassword initalize")
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
