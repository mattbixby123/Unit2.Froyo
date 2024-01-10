
// Prompt the user for a list of flavors separated by commas. this will create  user input string
const userInputString = prompt(
  "Enter a list of Comma-sepatated froyo flavors.");

// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
// *** NOT RIGHT - we need to count occurances of all items in an array not convert them to numbers
// const flavors = [];
// for (let i = 0; i < stringArray.length; i++) {
//   const str = stringArray[i];
//   const flavor = parseInt(str);
//   flavors.push(flavor);
// }


//this is my object set-up for keeping count of flavors
const counter = {};


//JavaScript Array forEach() - but the rubric asks for a loop, so i will use my other example belowon lines 30-38
// stringArray.forEach(ele => {
//   if (counter[ele]) {
//       counter[ele] += 1;
//   } else {
//       counter [ele] = 1;
//   }
// });

// another solution for listing Count occurrences of all items in an array
// ex. for ... of loop 
for (let ele of stringArray) {
  if (counter[ele]) {
    counter[ele] += 1;
} else {
    counter[ele] = 1;
}
};

console.log(counter)

console.table(counter)

//quick question, do I need both the console.log and console.table - would the console.table(counter) work fine on its own? 
//I am including both before the rubric makes it seem like it wants a console.lgo return and not a table