// The idea for this Kata came from 9gag today.here
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

// Like this:
// Input: If you can read
// Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// Some notes
// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.

function to_nato(words) {
	// Go code
  const nato = {
    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu'
  }
  return words.toUpperCase().split("")
      .filter(item => item != ' ')
      .map(letter => {
        return /[A-Z]/g.test(letter) ? letter = nato[letter] : letter
        }
      ).join(' ')
}
////////////////////////////////////////////////////////////////////////////

// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:
// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples
//     prefill(3,1) --> [1,1,1]
//     prefill(2,"abc") --> ['abc','abc']
//     prefill("1", 1) --> [1]
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"

function prefill(n, v) {
  if(isNaN(Number(n)) || !Number.isInteger(Number(n)) || n < 0 || typeof n === 'boolean') {
    throw new TypeError(`${n} is invalid`) 
  } else if (Number(n)) {
    let array = new Array(Number(n))
    for (let i = 0; i < array.length; i++) {
      if(v) {
        array[i] = v  
      } else {
        array[i] = undefined
      }
    }
    return array
  } else {
    return []
  }
  /////////////////////////////////////////////////////////////////////////////

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                       // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number

// Sample data: 25, 1475, 3, 672
// 25: 2 * 5 = 10, 1 * 0 = 0  // 2
// 1475: 1 * 4 * 7 * 5 = 140, 1 * 4 * 0 = 0 // 2
// 3: // 
// 672: 6 * 7 * 2 = 84, 8 * 4 = 32, 3 * 2 = 6 // 3

function persistence(num) {
   //code me
   let count = 0;
   let arr = num.toString().split('')

   while(arr.length > 1) {
     let result = arr.reduce((a,b) => a*b, 1)
     arr = result.toString().split('')
     count++
   }
   return count
}

persistence(672)
/////////////////////////////////////////////////////////////////////////////////


// This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:
// square() must return a copy of the array, containing all values squared, the original array must not be changed
// cube() must return a copy of the array, containing all values cubed, the original array must not be changed
// average() must return the average of all array values, average() on an empty array must return NaN
// sum() must return the sum of all array values
// even() must return an array of all even numbers, the original array must not be changed
// odd() must return an array of all odd numbers, the original array must not be changed
// Examples:

// var numbers = [1, 2, 3, 4, 5];
// numbers.square(); // must return [1, 4, 9, 16, 25]
// numbers.cube(); // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum(); // must return 15
// numbers.even(); // must return [2, 4]
// numbers.odd(); // must return [1, 3, 5]

Array.prototype.square = function() {
  return this.map(item => item*item);
}

Array.prototype.cube = function() {
  return this.map(item => Math.pow(item, 3))
}

Array.prototype.average = function() {
  let total = this.reduce((a,b) => a + b, 0)
  let denom = this.length
  return total/denom
}

Array.prototype.sum = function() {
  return this.reduce((a,b) => a + b, 0)
}

Array.prototype.even = function() {
  return this.filter(item => item % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter(item => item % 2 !== 0)
}

/////////////////////////////////////////////////////////////////
// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  //happy coding!
  A.sort((a,b) => a-b)
  let count = 0
  let foundOdd = false
  let compareArr;
  while (!foundOdd) {
    compareArr = A.filter(item => item === A[0])
    if(compareArr.length % 2 !==0) {
      foundOdd = true
    } else {
      A.splice(0, compareArr.length)
    }
  }
  return compareArr[0]
}

findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])
/////////////////////////////////////////////////////////////////
// Once upon a time, on a way through the old wild west,…

// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed the desert the smart way.

// The directions given to the man are, for example, the following:

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or (haskell)

// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or

// { "WEST" }
// or (haskell)

// [West]
// or (rust)

// [WEST];
// Other examples:

// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task

// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

// Examples

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
// See more examples in "Example Tests"

// Note

// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case 'NORTH':
        if(arr[i+1] === 'SOUTH') {
          arr.splice(i, 2)
          i=-1
        }
        break;
      case 'SOUTH':
        if(arr[i+1] === 'NORTH') {
          arr.splice(i, 2)
          i=-1
        }
        break;
      case 'EAST':
        if(arr[i+1] === 'WEST') {
          arr.splice(i, 2)
          i=-1
        }
        break;
      case 'WEST':
        if(arr[i+1] === 'EAST') {
          arr.splice(i, 2)
          i=-1
        }
        break;
      default: 
        break;
    }
  }
  return arr
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
//////////////////////////////////////////////////////////////////////////////
// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: MORSE_CODE['.--'], in Java it is MorseCode.get('.--'), in C# it is MorseCode.Get('.--'), in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--", in Elixir it is morse_codes variable.

// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

// After you complete this kata, you may try yourself at Decode the Morse code, advanced.

decodeMorse = function(morseCode){
  //your code here
  let arr = morseCode.trim().split(' ')
  let decoded = arr.map(item => item ? MORSE_CODE[item] : 'space')
  for(let i = 0; i < decoded.length; i++) {
    if(decoded[i] === 'space' && decoded[i+1] === 'space') {
      decoded[i] = ' '
      decoded.splice(i+1, 1)
    }
  }
  return decoded.join('')
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// Two teams are playing a game of tennis. The team sizes are the same and each player from the first team plays against the corresponding player from the second team.
// Each player has a certain power level. If a player has a higher power level than her opponent, she is guaranteed to win and her team would get 1 point for that win while the opponents get a 0.
// You are the coach of the first team and you know the power levels of all the players before the game starts. You want to rearrange the players in your team to earn the highest possible total score.

// Input/Output
// [input] integer array team1
// The power levels of the players in the first team. Teams have less than 100 players and each power level is less than 100.
// [input] integer array team2
// Array of the same length as team1, the power levels of the players of the second team.
// [output] an integer
// The maximum number of points the first team can get.

// Example
// For team1 = [3,2,4] and team2 = [1,2,3], the output should be 3.
// If you don't rearrange the players in the first team, it will get 2 points, since 3 > 1, 2 = 2 and 4 > 3.

// However, if you rearrange the order of the players to [2, 3, 4], the first team will get 3 points.
function maximizePoints(team1, team2) {
  //coding and coding..
  let reorder = []
  let count = 0;
  for (let i = 0; i < team2.length; i++) {
    
    let largestNegMargin = 0;
    let largestNegItem = null;
    let smallestPosMargin = 999999;
    let smallestPosItem = null;
    
    for (let j = 0; j < team1.length; j++)  {
      let currentMargin = team1[j] - team2[i];
      if (currentMargin > 0) {
        if (currentMargin < smallestPosMargin) {
          smallestPosMargin = currentMargin
          smallestPosItem = team1[j]
        }
      } else if (currentMargin < 0) {
        if (currentMargin < largestNegMargin) {
          largestNegMargin = currentMargin
          largestNegItem = team1[j]
        }
      }
    }
    if(smallestPosMargin < 999999) {
      reorder.push(smallestPosItem)
      team1.splice(team1.indexOf(smallestPosItem),1)
    } else {
      reorder.push(largestNegItem)
      team1.splice(team1.indexOf(largestNegItem),1)
    }
  }
  for (let i = 0; i < reorder.length; i++) {
    if (reorder[i] > team2[i]) {
      count++
    }
  }
  
  return count
}


///////////////////////////////////////////////////////////////////////////
// Fool's Day

// Since today is April's Fools day,Abigail suspects that the news she is reading about today are false. She is worried to look silly to other participants.

// She knows that the news is false if it contains the string "abigail" as a subsequence.

// Help Abigail determine whether this piece of news is true.

// INPUT The first and only line contains a non-empty string s of length no greater than 1000, consisting of lowercase letters of Latin alphabet (a-z).

// OUTPUT Output YES if the string s contains the sequence "abigail" as a subsequence. Otherwise, output NO

function newsIsFalse(news) {
  let compare = ['a','b','i','g','a','i','l']
  news = news.split('');
  for (let i = 0; i < news.length; i++) {
    if (news[i] === compare[0]) {
      compare.splice(0,1)
    }
  }
  return compare.length ? 'NO' : 'YES'
}
