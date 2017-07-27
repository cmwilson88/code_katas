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


///////////////////////////////////////////////////////////////
// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.

// dolphin -> The Dolphin

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):

// alaska -> Alaskalaska

// europe -> Europeurope

// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

function bandNameGenerator(str) {
  // Happy coding
  if (str.charAt(0) === str.charAt(str.length-1)) {
    let newName = str + str.slice(1)
    return newName.charAt(0).toUpperCase() + newName.slice(1)
  } else {
    return 'The ' + str.charAt(0).toUpperCase() + str.slice(1)
  }
}

bandNameGenerator('tart')//, 'Tartart')
bandNameGenerator('dolphin')


//////////////////////////////////////////////////////

/*
Problem 1.

https://www.codewars.com/kata/your-order-please/javascript

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

/////////////////////////////////////////
function order(words) {
  return words.split(' ').sort((a,b) => {
    return a.match(/\d/) - b.match(/\d/)
  }).join(' ')
}


/*

Problem 2

https://www.codewars.com/kata/551dc350bf4e526099000ae5

Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
*/
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(str) {
  return str.split('WUB').filter(item => item).join(' ')
}


// 1
// https://www.codewars.com/kata/moving-zeros-to-the-end/solutions/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  // TODO: Program me
  for(let i = arr.length; i>=0; i--) {
    if(arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0)
    }
  }
  return arr
};

moveZeros([1,2,0,1,0,1,0,3,0,1]);



// 2
// https://www.codewars.com/kata/highest-rank-number-in-an-array/train/javascript
// Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

// Example:

// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

 //arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
 //highestRank(arr) //=> returns 3

function highestRank(arr){
  arr.sort((a,b) => b - a);
  let newArr = []
  let current = null
  let count = 0
  arr.forEach(item => {
    if (item != current) {
      if (count > 0) {
        newArr.push({item: current, count: count})
      } 
      current = item
      count=1
    } else {
      count++
    }
  })
  let results = newArr.sort((a,b) => b.count - a.count).filter((item, index, arr) => item.count >= arr[0].count)
  return results[0].item
}
  


