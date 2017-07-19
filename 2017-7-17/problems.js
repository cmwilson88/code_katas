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


///////////////////////////////////////////////
//Volume of box
//write a function that takes in 3 numbers (dimensions of a box) and finds the volume of the box and returns an object that puts the 3 values on an object with appropriate keys, and puts the volume on a 4th key, then returns the object.

//test data
//5, 5, 5 returns {length: 5, width: 5, Height: 5, volume: 125}
//3, 10, 12 retrns {length: 3, width: 10, Height: 12, volume: 360}

//Advanced 1
//make this a constructor function

//Advanced 2
//have the function check if any of the values are negative. if there is a negative, end the function and console.log with the negative value and a message telling the user it cant take negative numbers.

//Advanced 3
//have the function also calcute the surface area of the box and add the key and value to the ob```

function FindVolume(l, w, h) {
  var args = [...arguments];
  var negative = args.filter(x=>x<=0)
  if(negative.length > 0) {
    console.log(negative + ' The function can not take negative numbers or 0')
    return null
  } else {
    this.len = l;
    this.width = w;
    this.height = h;
    this.area = l*w*h;
    this.surfaceArea = (w*l + h*l + h*w) * 2;
  }
}

FindVolume.prototype.display = () => console.log(`The volume of the rectangular prism is ${this.volume}, and the surface area is ${this.surfaceArea}`);

var test = new FindVolume(5, 5, 5);
test.display();


//////////////////////////////////////////////////////////
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
 accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
https://www.codewars.com/kata/mumbling

function accum(str) {
  var arr = str.toLowerCase().split("");
  return arr.map((letter, i) => {
    return letter.toUpperCase() + letter.repeat(i+1).toLowerCase();
  }).join("-")
}


//write a function that takes in an array of arrays, each inner array has only numbers. Loop through the array and and sort each indivual inner array from smallest to largest

sortInnerArrays([[5,6,7,8,2,43,3],[345,567,86,7980,90],[12,345,576,7982]])

function sortInnerArrays(arr) {
  return arr.map((inner, i) => {
    return inner.sort((a,b) => a - b);
  })
}

// Directions
// You have a very odd treasure map that describes the location of the treasure using only special characters. Specifically <>^v. Each arrow tells you to move in a specific direction. < is left, > right, ^ up, v down, in one unit increments (< moves you 1 to the left, and > moves you 1 to the right).

// Assume your starting location is on a grid at location 0,0. Write a program that will take a string as a parameter full of <>^v and use that to figure out your ending location

// example Solution
// <<<^^V> means you end up at location -2, 1


const directions = '<>V^V^V<^><V^>V<^><V>^>V<^<V^><^><V<^><V><^V><^><V^><V>^><V><^V<^^V<V><V<V^>^V<><^V<<<^V^^^V<>^<<^V>';

function treasureFinder(str) {
  var position = [0,0];
  var arr = str.split("");
  arr.forEach((item) => {
    switch(item) {
      case ('<'):
        --position[0]
        break;
      case ('>'):
        ++position[0];
        break;
      case ('V'):
        --position[1];
        break;
      case ('^'):
        ++position[1];
        break;
      default:
        break;
    }
  })
  return position;
}



treasureFinder('<<<^^V>');