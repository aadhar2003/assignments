/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
if(str1.length!=str2.length){
  return false;
}
const arr1=str1.replaceAll(' ','').toLowerCase().split('');
const arr2=str2.replaceAll(' ','').toLowerCase().split('');
arr1.sort();
arr2.sort();
for(let i=0;i<arr1.length;i++){
  if(arr1[i]!=arr2[i]){
    return false;
  }
}

return true;
}
console.log(isAnagram('Debit Card', 'Bad Credit'));

module.exports = isAnagram;
