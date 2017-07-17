// Write simple .camelcase method (camel_case function in PHP) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
  //your code here
  var arr = this.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}


// Write a function filterLucky that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.

var filterLucky=x=>{
  return  x.map(item => String(item)).filter(item=>item.includes('7')).map(item=>Number(item));
}

filterLucky([1,2,3,4,5,6,7,68,69,70,15,17])
