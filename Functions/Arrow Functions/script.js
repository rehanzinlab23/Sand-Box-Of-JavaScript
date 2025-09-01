// function add(a, b) {
//      return a + b;
// }

// Arrow Function syntax

const add = (a, b) => {
     return a + b;
};

// Arrow Function syntax more shorter

const subs = (a, b) => (a - b);

// Arrow Function syntax more shorter (if have only one parameter)

const single = a => (a * 2);

// Returning an object

const obj = () => ({
     name: 'Rehan',
});

// Array

const numbers = [1, 2, 3, 4 ,5];

numbers.forEach(function (n) {

console.log(n);

});

// Array shorter (Arrow function in callback)

numbers.forEach((n) => console.log(n));

console.log(add(22, 5));

console.log(subs(20, 5));

console.log(single(30));

console.log(obj());