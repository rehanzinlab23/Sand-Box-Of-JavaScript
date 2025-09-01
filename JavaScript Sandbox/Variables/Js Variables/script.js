// Ways to declare variables in JavaScript
// var, let, const

let firstName = "Rehan"; 
let lastName = "Hussain"; 

console.log(firstName, lastName);

let age = 17;
console.log(age);

// Naming conventions for variables
// 1. Cannot start with numbers
// 2. Cannot use reserved keywords
// 3. Cannot contain spaces
// 4. Cannot use hyphens (-)
// 5. Case-sensitive    
// 6. Use camelCase for multi-word variables
// 7. Only use letters, numbers, $, and _

// Multi-word variable examples
// Camel Case, Snake Case, Pascal Case, Lowercase, Uppercase
let fullName = "Rehan Hussain"; // camelCase
let full_name = "Rehan Hussain"; // snake_case or underscore_case
let FullName = "Rehan Hussain"; // PascalCase
let fullname = "Rehan Hussain"; // lowercase
let FULLNAME = "Rehan Hussain"; // UPPERCASE

// Reassignment of variables
age = 18;
console.log(age);

let score;
score = 1;
console.log(score);
if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
    name: 'Spidey'
};

person.name = 'Kane';
person.email = 'kane123@gamil.com';
console.log(person);

// Declare Multiple Values

let a, b, c;
const d = 10,
  e = 20,
  f = 30;
console.log(f);
console.log(a);