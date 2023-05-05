var generateBtn = document.querySelector("#generate");

function getPasswordLength() {
  var length = prompt("Enter password length (8-128):");
  return parseInt(length);
}

function generatePassword() {
  var length = getPasswordLength();

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Enter a number between 8 and 128.");
    return "";
  }

  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[];:'\"<>,.?/";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
