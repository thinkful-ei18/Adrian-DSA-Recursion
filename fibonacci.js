'use strict';



// Fibonacci
// Write a recursive function that prints the fibonacci sequence of a given number. The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. For example the 7th fibonacci number in a fibonaci sequence is 13. The sequence looks as follows: 1 1 2 3 5 8 13.

// input is a number
// output is a number
// recursive input: number - 1
// recursive output: array of numbers

function fiboFindr (number, fibo = [1, 1]) {
  // since the first two values of fibonacci sequence are always the same, we can decrement until 2 instead of 1 or 0
  if (number === 2) return fibo;
  // add precedingNumber1 to precedingNumber2 to fibo
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  // call fiboFindr
  return fiboFindr(number - 1, fibo);
}

console.log(fiboFindr(7));