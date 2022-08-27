function isPalindrome(word) {
  // Write your algorithm here
  const wordVal = word.split('');
  const reversedWord = wordVal.reverse();
  const output = reversedWord.join('');
  if(word === output){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
  function that takes a string 
  split the words
  reverse the new array after splitting
  join to convert array to string
  compare the original word and final output
  if they match return true, return false if the don't match
*/

/*
  Add written explanation of your solution here
  This function checks for palindrome. WE split the word first and 
  then go ahead and reverse it. After reversing the word we now join
  it to get the final output, a new array.
  WEe the use an if statement to copmare the original word and the reversed word.
  If they match, it will return true and false if they don't

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
