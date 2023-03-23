// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function containsRepeatingChars(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) !== i) {
        return true;
      }
    }
    return false;
  }
  
  let lookup = "abcdefghijklmnopqrstuvwxyz"
 
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    if (containsRepeatingChars(alphabet) === true) return false;

    let transformedMessage ='';
    if (encode === true) {
      for (let character in input) {
        if (input[character] === " " || /[^a-zA-Z]/.test(input[character]) ) {
          transformedMessage += input[character];
        } else {
          let indexOfInput = lookup.indexOf(input[character].toLowerCase());
          transformedMessage += alphabet[indexOfInput];  
        }      
      }
      return transformedMessage;

    } else {
      for (let character in input) {
        if (input[character] === " " ) {
          transformedMessage += input[character];
        } else {
          let indexOfInput = alphabet.indexOf(input[character].toLowerCase());
          transformedMessage += lookup[indexOfInput];
        }
      }
      return transformedMessage;

    }
    
  }

  
   return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
 