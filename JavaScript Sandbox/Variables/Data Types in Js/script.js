// Data Types

// String
const firstName = 'Rehan';
console.log(firstName, typeof firstName);

// Number 
const number = 69;
console.log(number, typeof number);

// BigInt 
const bignum = 23974982370802312n;
console.log(bignum, typeof bignum);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// Reference Types
// Any Refrence Types are object

const arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);

const age = {
    age: 30
};

console.log(age, typeof age);

function sayHello() {
    console.log('HELLO');
}

console.log(sayHello, typeof sayHello);