'use strict';

// nth Triangular Number
// Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

// the input is a number/previous total
// the output is a sum of number - current total
// the input to each recursive calls: number & current total
// recursive output is current total

function triangularNumber (number, total=0) {
  if (number === 0) return total;
  return triangularNumber(number - 1, total + number);
}

console.log(triangularNumber(2));
// 3 *** total = 0
// 3 - 1 = 2; ** total = 2
// 2 - 1 = 1 * total = 1