/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let res = numbers?.reduce((acc,e) => acc > e ? acc : e, undefined);

    return res
}

findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9])

module.exports = findLargestElement;