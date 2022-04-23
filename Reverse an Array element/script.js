var input = prompt("Enter Your Input Size:");
var names = [];

for (let i = 0; i < input; i++) {
  names[i] = prompt("Enter Name:");
}

console.log(names);

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
