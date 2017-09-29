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
////////////////////////////////////////////////////////

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

function solution(number){
  // convert the number to a roman numeral
  const roman = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let output = ''
  for(let i in roman) {
    while(number >= roman[i]) {
      output += i;
      number -= roman[i]
    }
  }
  return output
}
////////////////////////////////////////////////////////

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// solution('XXI'); // should return 21

function solution(roman) {
  roman = roman.split('')
  let number = 0
  for (let i = 0; i < roman.length; i++) {
    switch(roman[i]) {
      case 'M':
        number += 1000
        break;
      case 'D': 
        number += 500
        break;
      case 'C':
        if(roman[i+1] === 'M') {
          number += 900;
          i++
          break;
        } else if (roman[i+1] === 'D') {
          number += 400;
          i++
          break;
        } else {
          number += 100;
          break;
        }
      case 'L':
        number += 50
        break;
      case 'X':
        if(roman[i+1] === 'C') {
          number += 90;
          i++
          break;
        } else if (roman[i+1] === 'L') {
          number += 40;
          i++;
          break;
        } else {
          number += 10
          break;          
        }
      case 'V':
        number += 5
        break;
      case 'I':
        if(roman[i+1] === 'X') {
          number += 9;
          i++
          break;
        } else if (roman[i+1] === 'V') {
          number += 4;
          i++
          break;
        } else {
          number += 1
          break;          
        }
      default:
        break;
    }
  }
  return number
}
//////////////////////////////////////////////////////////

// Sudoku Background

// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. 
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board) {
  
  // checkColumns(board)  
  if(
    // !checkRows(board) &&
    // !checkColumns(board) &&
    !checkBlocks(board)
    ) {
    return false
  } else {
    return true
  }
  
  function checkDigits(array) {
    for(let i = 0, j=array.length; i<j; i++) {
      if(array[i] < 1) {
        return false
      }
      if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
        return false
      }
    }
    return true
  }
  
  function checkRows(board) {
    for(let i = 0, j=board.length; i<j; i++) {
      if(!checkDigits(board[i])) {
        return false
      }
    }
    return true
  }
  
  function checkColumns(board) {
    let tempArray = [];
    for(let i=0, j=board.length; i<j; i++) {
      for(let k=0; k<j; k++) {
        tempArray[k] = board[k][i];
      }
      if(!checkDigits(tempArray)) {
        return false;
      }
    }
    return true;
  }
  
  function checkBlock(board, startCol, startRow) {
    let tempRegion = []
    let index = 0;
    for(let row = startRow; row < startRow+3; row++) {
      for(let col = startCol; col < startCol+3; col++) {
        tempRegion[index] = board[row][col];
        index++
      }
    }
    console.log(tempRegion)
    return checkDigits(tempRegion)
  }
  
  function checkBlocks(board) {
    for(let col = 0; col < board.length; col+=3) {
      for(let row = 0; row < board.length; row+=3) {
        if(!checkBlock(board, col, row)) {
          return false;
        } 
      }
    }
    return true;
  }
}
/////////////////////////////////////////////////////
// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy that accepts an integer array and returns true if the array is odd-heavy else return false.
function isOddHeavy(n){
  if(!n.some(item => item % 2 !==0)) {
    return false
  }
  let odd = n.filter(item => item % 2 !==0).sort((a,b) => a - b)
  let even = n.filter(item => item % 2 ===0)
  for (let i = 0; i < even.length; i++) {
    if(even[i] > odd[0]) {
      return false
    }
  }
  return true
}
///////////////////////////////////////////////////////
// Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.

// Business Rules:

// A user starts at rank -8 and can progress all the way to 8.
// There is no 0 (zero) rank. The next rank after -1 is 1.
// Users will complete activities. These activities also have ranks.
// Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
// The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
// A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
// Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
// A user cannot progress beyond rank 8.
// The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.
// The progress is scored like so:

// Completing an activity that is ranked the same as that of the user's will be worth 3 points
// Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
// Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
// Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.
// Logic Examples:

// If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
// If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
// If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
// If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
// If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)
// Code Usage Examples:

// var user = new User()
// user.rank // => -8
// user.progress // => 0
// user.incProgress(-7)
// user.progress // => 10
// user.incProgress(-5) // will add 90 progress
// user.progress # => 0 // progress is now zero
// user.rank # => -7 // rank was upgraded to -7
// Note: Codewars no longer uses this algorithm for its own ranking system. It uses a pure Math based solution that gives consistent results no matter what order a set of ranked activities are completed at.

function User() {
  let rank = -8;
  let progress = 0;
  
  function incProgress(actLevel) {
    if(actLevel >= -8 && actLevel <= 8 && actLevel) {
      if(this.rank === 8) {
        this.progress = 0;
      } else if(actLevel === -1 && this.rank === 1) {
        this.progress += 1
      } else if(actLevel === this.rank - 1) {
        this.progress += 1
      } else if (actLevel === this.rank) {
        this.progress += 3
      } else if (actLevel > this.rank) {
        if(actLevel > 0 && this.rank < 0) {
          let diff = actLevel - this.rank - 1
          this.progress += 10 * diff * diff  
        } else {
          let diff = actLevel - this.rank
          this.progress += 10 * diff * diff
        }
      }
      
      if(this.progress >= 100 && this.rank < 8) {
        let rankLevels = Math.floor(this.progress / 100)
        this.progress = this.progress % 100
        for(let i = 1; i <= rankLevels; i++) {
          if(this.rank === -1) {
            this.rank+=2
          } else {
            this.rank++
            if(this.rank === 8) {
              this.progress = 0;
            }
          }  
        }
      }      
    } else{
      throw new Error(`Activity level can't be zero`);
    }

  }
  
  return {
    rank,
    progress,
    incProgress
  }
}
///////////////////////////////////////////////////////////////////////
// You need to create a function that will validate if given parameters are valid geographical coordinates.

// Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

// Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

// Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .

// There should be no space between the minus "-" sign and the digit after it.

// Here are some valid coordinates:

// -23, 25
// 24.53525235, 23.45235
// 04, -23.234235
// 43.91343345, 143
// 4, -3
// And some invalid ones:

// 23.234, - 23.4234
// 2342.43536, 34.324236
// N23.43345, E32.6457
// 99.234, 12.324
// 6.325624, 43.34345.345
// 0, 1,2
// 0.342q0832, 1.2324

function isValidCoordinates(coordinates){
  if((/[^0-9- .,]+/g).test(coordinates)) {
    return false
  } 
  let arr = coordinates.split(',')
  if(arr.length > 2) {
    return false
  }
  if(arr[0] > 90 || arr[0] < -90) {
    return false
  }
  if(arr[1] > 180 || arr[1] < -180) {
    return false
  }
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
    if(arr[i].includes(' ')) {
      return false
    }
    let dashCount = 0;
    let dotCount = 0;
    arr[i].split('').forEach(char => {
      if(char === '.') {
        dotCount++
      } else if (char === '-') {
        if(arr[i] > 1) {
          return false
        }
        dashCount++
      }
    })
    
    if(dashCount > 1 || dotCount > 1) {
      return false
    }
  }
  return true
}