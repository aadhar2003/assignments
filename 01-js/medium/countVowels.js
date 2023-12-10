/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const arr1=str.replaceAll(' ','').toLowerCase().split('');
  let ans=0;
  for(let i=0;i<arr1.length;i++){
    if(arr1[i]=='a' || arr1[i]=='e' ||arr1[i]=='i' ||arr1[i]=='o' ||arr1[i]=='u'){
      ans+=1;
    }
  }
  return ans;
    // Your code here
}

module.exports = countVowels;