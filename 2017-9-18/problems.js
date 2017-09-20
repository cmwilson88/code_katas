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