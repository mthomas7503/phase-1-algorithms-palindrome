function isPalindrome(word) {
 if (word === word.split('').reverse().join('')) {return 'true'}
 else {return 'false'}
}

/* 
  Take in a string
  pass the string to an equation with a strict equality comparison operator
  if true, return true
  if false, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
