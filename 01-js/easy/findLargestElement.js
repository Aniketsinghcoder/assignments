/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  largestNumber = numbers[0];
  numbers.forEach(number => {
    largestNumber = Math.max(number, largestNumber);
  });
  return largestNumber;
}

module.exports = findLargestElement;