/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //coverting a string to an array to remove spaces and special characters
  //before that converting the string charecters to lowercase
  str = str.toLowerCase()  ;
  let arrStr = str.split('');
  //filtering the spaces and special characters
  let filterArrStr = arrStr.filter(function(item) {
    return item.match(/[a-z0-9]/);
  });
  //joining the final string
  let finalStr = filterArrStr.join('');

  //reversing the string by using the filtered array
  let reverseArrStr = [];
  //pushing elements(words) of normal array string in reverse order to form reverse string
  for(let i=(filterArrStr.length-1); i>=0; i--) {
    reverseArrStr.push(filterArrStr[i]);
  }
  //forming the reverse array to a string
  let reverseStr = reverseArrStr.join('');
  //checking if the string and reversed string is a palindrome
  return (finalStr===reverseStr)?true:false;
}

module.exports = isPalindrome;
