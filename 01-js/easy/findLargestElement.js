/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length==0){
        return undefined;
    }
    let max=Number.NEGATIVE_INFINITY;
    for(let i=0;i<numbers.length;i++){
        max=(numbers[i]>max)?numbers[i]:max;
    }
    return max;

}

module.exports = findLargestElement;