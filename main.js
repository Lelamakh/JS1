console.log("main.js");

let numberOfStudents = 10;
console.log("numberOfStudents");
console.log(typeof numberOfStudents);

const courseName = "development";
console.log("courseName");
console.log(typeof courseName);

const completed = true;
const uncompleted = false;
console.log(completed, uncompleted);
console.log(typeof completed);
console.log(typeof uncompleted);

const employedStudent = undefined;
console.log(employedStudent);
console.log(typeof employedStudent);

const married = null;
console.log(married);
console.log(typeof married);

const Name = "lela";
console.log(Name);
console.log(typeof Name);

const dayOfWeek = "tuesday";
console.log(dayOfWeek);
console.log(typeof dayOfWeek);

const favoriteActivity = "writing";
console.log(favoriteActivity);
console.log(typeof favoriteActivity);

const finalText =
  "Hi, my name is " +
  Name +
  "! " +
  "Today is " +
  dayOfWeek +
  ", " +
  "A perfect day for " +
  favoriteActivity +
  ".";
console.log(finalText);
console.log(typeof finalText);

const finalText2 = `Hi, my name is ${Name}! Today is ${dayOfWeek}, A perfect day for ${favoriteActivity}. `;
console.log(finalText2);
console.log(typeof finalText2);
