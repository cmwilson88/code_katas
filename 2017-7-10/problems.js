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
    tx += arr.indexOf(letter)
  })
  
  y.split("").forEach(letter => {
    ty += arr.indexOf(letter)
  })
  
  return tx > ty ? x : ty > tx ? y : 'Tie!'
}