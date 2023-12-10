/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length==1 || str.length==0){
    return true;
  }
  const arr=str.toLowerCase().replaceAll(' ','').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").split('');

  let i=0;
  let j=arr.length-1;
  console.log(arr);
  while(i<j){
    if(arr[i]!=arr[j]){
      return false;
    }
    i++;
    j--;
  }

  return true;
}
console.log(isPalindrome('Eva, can I see bees in a cave?'));

module.exports = isPalindrome;
