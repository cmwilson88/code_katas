// TODO: From the answer function, return an array of objects
// with the name and average Math grade of each student that
// is getting less than an average of 70 in Math.
// Round the average grade to the nearest whole number.
// NOTE: Visit https://gist.github.com/petersondrew/4aa8ae630a283a7b942fb693047fc4d7 to see input data

// Callback used to filter/search through objects
const objectFindCallback = (obj, key, search_term) => {
  return obj[key].toLowerCase() === search_term.toLowerCase();
}

const answer = (students) => {
  var failingStudents = [];

  // Loop through the students
  students.forEach(student => {
    // For each student:
      // Check if student took a math class
      if(student.classes.some(course => objectFindCallback(course, 'name', 'math'))) {
        //Grab test results for just the Math tests
        const math_tests = student.classes.filter(course => objectFindCallback(course, 'name', 'math'))[0].tests;

        // Calculate the average of the student's math tests.
          // .reduce() to add all the test scores
          // divide by tests.length to calculate average
          // Math.round() to round to nearest whole number
        const averageGrade = Math.round(math_tests.reduce((total, test) => total + test.grade, 0) / math_tests.length);

        // If the student's average math test grade is below 70
        averageGrade < 70 ? (
          // Push an object with the student's name and average test grade to the failingStudents array
          failingStudents.push({
            name: student.name, 
            averageGrade 
          })
        ) : null  
      }
      
  })
  
  return failingStudents
};
const fetchStudents = () => {
  return fetch("https://gist.githubusercontent.com/petersondrew/4aa8ae630a283a7b942fb693047fc4d7/raw/7c9d643400449e9cbd51faa3afe63c7c28b1dfa7/students.json")
    .then(res => res.json());
};

// Example output:
// Nickolas Leinen - 65
// Coralee Heilman - 68
fetchStudents()
  .catch(err => console.error(`Error fetching students, check your internet connection. ${err}`))
  .then(students => {
    answer(students).forEach(student => {
      console.log(`${student.name} - ${student.averageGrade}`);
    });
});


// TODO: From the answer function, return an array of objects
// with the name and average Math grade of each student that
// is getting less than an average of 70 in Math.
// Round the average grade to the nearest whole number.
// NOTE: Visit https://gist.github.com/petersondrew/4aa8ae630a283a7b942fb693047fc4d7 to see input data

// Callback used to filter/search through objects
const objectFindCallback = (obj, key, search_term) => {
  return obj[key].toLowerCase() === search_term.toLowerCase();
}

const answer = (students, failingStudents=[], index=0) => { 
  // Base condition.
  if(index >= students.length) {
    return failingStudents;
  }

  if(students[index].classes.some(course => objectFindCallback(course, 'name', 'math'))) { 
    //Grab test results for just the Math tests
    const math_tests = students[index].classes.filter(course => objectFindCallback(course, 'name', 'math'))[0].tests;  

    // Calculate the average of the student's math tests.
    // .reduce() to add all the test scores
    // divide by tests.length to calculate average
    // Math.round() to round to nearest whole number
    const averageGrade = Math.round(math_tests.reduce((total, test) => total + test.grade, 0) / math_tests.length);
    
    // If the student's average math test grade is below 70
    averageGrade < 70 ? (
      // Push an object with the student's name and average test grade to the failingStudents array
      failingStudents.push({
        name: students[index].name, 
        averageGrade 
      })
    ) : null 
  }

  return answer(students, failingStudents, ++index)
};

const fetchStudents = () => {
  return fetch("https://gist.githubusercontent.com/petersondrew/4aa8ae630a283a7b942fb693047fc4d7/raw/7c9d643400449e9cbd51faa3afe63c7c28b1dfa7/students.json")
    .then(res => res.json());
};

// Example output:
// Nickolas Leinen - 65
// Coralee Heilman - 68
fetchStudents()
  .catch(err => console.error(`Error fetching students, check your internet connection. ${err}`))
  .then(students => {
    answer(students).forEach(student => {
      console.log(`${student.name} - ${student.averageGrade}`);
    });
});
