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


// Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. 
// All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
  //your code here
  return this.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
}