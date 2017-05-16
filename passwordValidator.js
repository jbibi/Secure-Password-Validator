function isPasswordValid(input) {
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('Password is valid');
  }
  if(!hasUpperCase(input)) {
    console.log('Password needs a capital letter.');
  }
  if(!hasLowerCase(input)) {
      console.log('Password needs a lowercase letter.');
  }
  if(!isLongEnough(input)) {
      console.log('Password needs to be at least 8 characters long.');
  }
  if(!hasSpecialCharacter(input)) {
      console.log('Password needs to have at least one special character (!, @, #, $, %, ^, &, *).');
  }
}

function hasUpperCase(input){
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase() && !Number(input[i])) {
      return true;
    }
  }
}

function hasLowerCase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase() && !Number(input[i])) {
      return true;
    }
  }
}

function isLongEnough(input) {
  if (input.length >= 8) {
    return true;
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
    if (input[i] === specialCharacters[j]){
      return true;
    }
  }
  }
}

isPasswordValid('1234567aB&');