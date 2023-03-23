// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (shift === false || shift === 0 || shift < -25 || shift > 25) return false;
    if (encode === false) shift = shift * -1;
  
    let transformedMessage = '';
  
    for (let i in input) {
      let indexOfInput = alphabet.indexOf(input[i].toLowerCase());
      if (indexOfInput === -1) {
        transformedMessage += input[i];
      } else if (shift < 0) {
        let shiftedIndex = (indexOfInput + shift) % alphabet.length;
        if (shiftedIndex < 0) shiftedIndex += 26;     
        transformedMessage += alphabet[shiftedIndex];
      } else if (shift > 0) {
        let shiftedIndex = (indexOfInput + shift) % alphabet.length;
        transformedMessage += alphabet[shiftedIndex];
      }
    }
    return transformedMessage;

  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
