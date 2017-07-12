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
