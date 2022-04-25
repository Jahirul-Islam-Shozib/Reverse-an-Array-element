"use strict";

//Task 3

var input = prompt("Enter Your Input Size:");
var names = [];
var finalArray = [];

for (let i = 0; i < input; i++) {
  names[i] = prompt("Enter Name:");
}

console.log(names);

var newName = "";

for (let i = names.length - 1; i >= 0; i--) {
  // console.log(names[i]);
  var newName = names[i];
  var newStr = "";
  for (let j = newName.length - 1; j >= 0; j--) {
    newStr += newName[j];

    // console.log(newStr);
  }
  finalArray.push(newStr);
}

for (let i = 0; i < finalArray.length; i++) {
  console.log(finalArray[i]);
}
