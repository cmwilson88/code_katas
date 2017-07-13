///////////////////////////////////////////////////////////
//Average
//write a function that takes in an array of numbers as a parameter. find the average of the numbers and return that value.

//test data
//[1,2,3,4,5,6,7,8,9,10] returns 5.5
//[52, 6, 109, 99, 78, 3, 1, -6] returns 36.5

//Advanced
//before returning the average, round up to the nearest whole value
//and or
//only find the average of even numbers

function average(arr) {
  var total = arr.reduce((a,b) => a+b);
  var average = total / arr.length;
  return Math.round(average)
}

average([1,2,3,4,5,6,7,8,9,10])

function averageEven(arr) {
  var evenArr = arr.filter(item => item % 2===0)
  console.log(evenArr);
  return Math.round(evenArr.reduce((a,b)=>a+b) / evenArr.length);
}

averageEven([1,2,3,4,5,6,7,8,9,10])

////////////////////////////////////////////////////////
// Description:

// Groups of characters decided to make a battle. Help them to figure out wha group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:

// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital chatacters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.

function battle(x, y) {
  // Lets the battle begin!
  var arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  var tx = 0;
  var ty = 0;
  
  x.split("").forEach(letter => {
    tx += arr.indexOf(letter) + 1
  })
  
  y.split("").forEach(letter => {
    ty += arr.indexOf(letter) + 1
  })
  
  return tx > ty ? x : ty > tx ? y : 'Tie!'
}



//////////////////////////////////////////////////
// Create a function runningAverage() that returns a callable function object. 
// Update the series with each given value and calculate the current average.

function runningAverage() {
  let arr = [];
  return function(num) {
    arr.push(num);
    let average = arr.reduce((a,b) => a+b) / arr.length
    return Math.round(average * 100) / 100
  }


/////////////////////////////////////////////
//Write a function that finds the longest word in a sentence. 
//Takes in one string, and returns the longest word as a string.
//If you finish that, write another function that returns the average length of the words in a string.
function longestWord(sentence) {
  var arr = sentence.split(" ").sort((a,b) => b.length >= a.length);
  return arr[0]
}

longestWord('hello from the other side')

function averageLength(sentence) {
  var numberArr = [];
  var arr = sentence.split(" ").forEach(item => numberArr.push(item.length))
  var total = numberArr.reduce((a,b) => a+b)
  return total / numberArr.length
}

averageLength("one two two three")

////////////////////////////////////////////////////////////////////////
// Number of people in the bus
//
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
//
// You are provided a list (or array in JS) of integer array. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).
//
// The first integer array has 0 number in the second item, since the bus is empty in the first bus stop.
//
// Your task is to return number of people who are still in the bus after the last bus station. Even though it is the last stop, some people don't get off the bus, and they are probably sleeping there :D
//
// Take a look on the test cases.
//
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

number([[10,0],[3,5],[5,8]]) //should return 5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) //should retrun 17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) //Should return 21

function number(arr) {
  var total = 0;
  arr.forEach((item) => {
    total += item[0];
    total -= item[1];
  })
  return total;
}

// Other solution
function passengerTracker(passengers) {
  return passengers.map(x=>x[0]-x[1]).reduce((x,y) => x+y);
}

// 1
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

iqTest("2 4 7 8 10") //=> 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") //=> 2 // Second number is even, while the rest of the numbers are odd


function iqTest(numbers){
  numbers = numbers.split(" ")
  var even = [];
  var odd = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i])
    } else {
      odd.push(numbers[i])
    }
  }
  if (even.length > odd.length) {
    return numbers.indexOf(odd[0]) + 1;
  } else if (odd.length > even.length) {
    return numbers.indexOf(even[0]) + 1;
  }
}

