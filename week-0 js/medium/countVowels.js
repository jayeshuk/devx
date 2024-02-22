/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  return str.toLowerCase().split('').reduce((acc, e) => ['a','e','i','o','u'].includes(e) ? acc+1 : acc ,0)
}

module.exports = countVowels;