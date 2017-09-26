// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.
// An empty array should be treated like a 0 in this problem.
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let rightSide = 0;
    let leftSide = 0;
    for (let l = i-1; l >= 0; --l) {
      leftSide += arr[l]
    }
    for (let r = i+1; r < arr.length; r++) {
      rightSide += arr[r]
    }
    if(rightSide === leftSide) {
      return i
    }
  }
  return -1
}


findEvenIndex([1,2,3,4,3,2,1])
findEvenIndex([1,2,3,4,5,6])
findEvenIndex([20,10,30,10,10,15,35])
////////////////////////////////////////////////////////////
// The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// Example

// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

function stantonMeasure(arr) {
  let count = arr.filter(item => item === 1).length;
  return arr.filter(item => item === count).length;
}
//////////////////////////////////////////////
// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function insertDash(num) {
   //code me
   let arr = String(num).split('');
   for (let i = 0; i <= arr.length; i++) {
     if (arr[i] && arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
       arr.splice(i+1, 0, '-')
       i++
     }
     if(arr[arr.length-1] === '-') {
       arr.splice(arr.length-1, 1)
     }
   }
   return arr.join('')
}

insertDash(454793)
