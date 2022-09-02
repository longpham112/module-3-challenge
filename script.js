// call the generate button as a variable 
var generateBtn = document.querySelector("#generate");
// define a function that ask a sequense of prompted message so users can choose 
function writePassword() {
  var characterLength = 0;
  //run a loop that let users choose a number from 8 to 128
  while (Number.isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    var characters = prompt("You must choose a password between 8 and 128 characters!", "How many characters would you like?");
    // turn a string into a number
    characterLength = parseInt(characters);
  }
  //a number of confirm box for users
  var lowercase = confirm("Would you like to include lowercase characters?");
  var uppercase = confirm("Would you like to include uppercase characters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var specialCharacter = confirm("Would you like to include special characters?");
  //condition that will stop the function if users do not choose any of the option
  if (!lowercase && !uppercase && !numeric && !specialCharacter) {
    alert("Please choose the character(s) for your password!");
    return;
  }
  // create a var for the generated password
  var password = generatePassword({
    length: characterLength,
    lowercase,
    uppercase,
    specialCharacter,
    numeric
  });
  // testing
  // console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// define a function to create password
function generatePassword(options) {
  // numbers of string to choose from
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numeric = '0123456789';
  var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  var password = "";
  // call a loop to create a string of password according to user's needs
  while (password.length < options.length) {
    // to randomly choose a character from the given string
    var randomStringIndex = Math.ceil(string.length * Math.random() * Math.random());
    var randomNumbericIndex = Math.ceil(numeric.length * Math.random() * Math.random());
    var randomSpecialCharIndex = Math.ceil(specialCharacters.length * Math.random() * Math.random());
    var hold = "";
    // call the random character if users chose the option of lowercase, uppercase, numeric or special characters
    if (options.lowercase) {
      hold += string.charAt(randomStringIndex)
    };
    if (options.uppercase) {
      hold += string.charAt(randomStringIndex).toUpperCase()
    };
    if (options.numeric) {
      hold += numeric.charAt(randomNumbericIndex)
    };
    if (options.specialCharacter) {
      hold += specialCharacters.charAt(randomSpecialCharIndex)
    };
    // generate a password
    password += hold;
    // if a password is longer than needed, it will cut the password short to fit user's desire
    if (password.length > options.length) {
      password = password.substring(0, options.length - 1)
    };
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




