// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var futurePassword = {
//     lowercase: "abcdefghijklmnopqrstuvwxyz",
//     uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     numeric: "0123456789",
//     specialCharacter: "!@#$%^&*()"
//   }
//   var password = generatePassword(); {
//     var lowercase = confirm("Would you like to include lowercase characters?");
//     var uppercase = confirm("Would you like to include uppercase characters?");
//     var numeric = confirm("Would you like to include numeric characters?");
//     var specialCharacter = confirm("Would you like to include special characters?");
//   }

//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

function writePassword() {



  var characterLength = 0;
  while (Number.isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    var characters = prompt("You must choose a password between 8 and 128 characters!", "How many characters would you like?");
    characterLength = parseInt(characters);
  }


  var lowercase = confirm("Would you like to include lowercase characters?");
  var uppercase = confirm("Would you like to include uppercase characters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var specialCharacter = confirm("Would you like to include special characters?");

  if (!lowercase && !uppercase && !numeric && !specialCharacter) {
    alert("DCM");
    return;
  }


  var password = generatePassword({ length: characterLength, lowercase, uppercase, specialCharacter, numeric });
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(options) {

  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numeric = '0123456789';
  var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  var password = "";
  while (password.length < options.length) {
    var randomStringIndex = Math.ceil(string.length * Math.random() * Math.random());
    var randomNumbericIndex = Math.ceil(numeric.length * Math.random() * Math.random());
    var randomSpecialCharIndex = Math.ceil(specialCharacters.length * Math.random() * Math.random());
    var hold = "";
    if (options.lowercase) hold += string.charAt(randomStringIndex);
    if (options.uppercase) hold += string.charAt(randomStringIndex).toUpperCase();
    if (options.numeric) hold += numeric.charAt(randomNumbericIndex);
    if (options.specialCharacter) hold += specialCharacters.charAt(randomSpecialCharIndex);

    password += hold;
    if (password.length > options.length) password = password.substring(0, options.length - 1);
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// var characters = prompt("You must choose a password between 8 and 128 characters!", "How many characters would you like?");



