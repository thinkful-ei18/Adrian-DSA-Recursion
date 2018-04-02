'use strict';

// Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

// input is a number
// output is a number
// recursive input is number - 1, total * number
// recursive output is total

function factorial (number, total = 1) {

  if (number === 0) return total;

  return factorial(number - 1, total * number);
}

console.log(factorial(5));