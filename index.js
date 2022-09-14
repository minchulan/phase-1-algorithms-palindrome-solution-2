function reverse(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // iterate from the beginning to the middle
  // racecar 7 / 2 == 3.5
  for (let i = 0; i < word.length / 2; i++) {
    // check each letter to the corresponding letter from the end
    const j = word.length - 1 - i;
    //when i is 0, j is 6
    //when i is 1, j is 5
    //when i is 2, j is 4
    //when i is 3, j is 3
    const startCharacter = word[i];
    const endCharacter = word[j];
    // if any letters don't match, return false
    if (startCharacter !== endCharacter) return false;
  }

  // return true
  return true;
}

/* 
r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j


r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
     ij      

*/

/* 
 Add your pseudocode here


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
