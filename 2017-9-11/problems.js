// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
     return args.sort((a,b) => a - b)[0]
  }
}
///////////////////////////////////////////////////////////////////

// Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. 
// All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
  //your code here
  return this.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
}
/////////////////////////////////////////////////////////////////////////

// Details
// Solutions
// Forks (1)
// Discourse (47)
// Add to Collection|Share this kata:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function findFriends(friends) {
	return friends.filter(friend.length === 4);
}
////////////////////////////////////////////////////////////////////////

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
  //...
  let arr = str.toLowerCase().split('');
  let count = 0;
  arr.forEach((item, index, arr) => {
    arr.indexOf(item) === arr.lastIndexOf(item) ? count++ : null
  })
  return count === arr.length ? true : false
}
