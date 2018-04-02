// Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

'use strict';

function reverseString (string) {
  if (string === '') {
    return '';
  }

  return reverseString(string.slice(1)) + string.charAt(0);
}

console.log(reverseString(''));