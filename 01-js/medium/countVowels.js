/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  vowels = ['a', 'e', 'i', 'o', 'u'];
  count = 0;
  str = str.toLowerCase();
  for (index = 0; index < str.length; index++) {
    if (vowels.indexOf(str[index]) !== -1) count++;
  }
  return count;
}

module.exports = countVowels;