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