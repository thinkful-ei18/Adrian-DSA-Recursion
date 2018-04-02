'use strict';

// String Splitter
// Split a string based upon a separator (similar to String.prototype.split).

// input takes a string
// outputs an array
// recursive input takes predicate
// recursive output returns an array

// e.g: "pizza, soda, water"
// ['pizza', 'soda', 'water']

function split (string, predicate, word = '') {
console.log(word);

  if (string.length === 0) {
    return [word];
    // return the last word in the string
  }

  if (predicate(string[string.length - 1])) {
    return [...split(string.slice(0, -1), predicate), word];

  }

  word = string[string.length - 1] + word;
  return split(string.slice(0, -1), predicate, word);
}

console.log(split('the dog', x => x === ' '));