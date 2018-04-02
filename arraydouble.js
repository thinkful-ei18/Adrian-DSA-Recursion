'use strict';

// Array Double
// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

// Input: [1, 2, 3]
// Output: [2, 4, 6]

// The input is an array
// The output is an array
// The recursive input is an array
// The recursive output is an array



function doubleIt (array) {

  if (array.length === 0) return [];
  const doubled = array[0] * 2;
  const result = [doubled, ...doubleIt(array.slice(1))];
  console.log(result);
  return result;
}

doubleIt([2,5,7]);