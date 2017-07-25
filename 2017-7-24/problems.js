// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  // ...
  var answer = n.toString().split("").reduce((a,b) => Number(a) + Number(b));
  var arr = answer.toString().split("");
  if(arr.length === 1) {
    return Number(answer);
  } else {
    return digital_root(answer)
  }
}

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

function zero(fn) { return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(b) { return a => a + b}
function minus(b) {return  a => a-b }
function times(b) { return a => a * b}
function dividedBy(b) { return a => a/b}


////////////////////////////////////////
// There is an array of non-negative integers. A second array is formed by
// shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.

let arrOne = ['Bob Ross', 'Tim Allen', 'Richard Simmons', 'big bird'];
let arrTwo = ['Bob Ross', 'Richard Simmons', 'Tim Allen'];

function findMissing(arr1, arr2) {
  for(var i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])){
      return arr1[i]
    }
  }
}

findMissing(arrOne, arrTwo)

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(str){
  //TODO Have fun 
  return str.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ")
  
}

spinWords('Hey fellow warriors')

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) //=> ['carer', 'racer']

//anagrams('laser', ['lazing', 'lazy',  'lacer'])


function anagrams(word, words) {
  let indices = [];
  let results = [];
  let compare = word.split("").sort().join("");
  words.map(word => word.split("").sort().join("")).forEach((word, i) => word === compare ? indices.push(i) : null)
  words.forEach((word, index) => {
    indices.forEach(item => {
      index === item ? results.push(word) : null
    })
  })
  return results
}


