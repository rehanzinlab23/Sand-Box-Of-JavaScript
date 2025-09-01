let x;

const fruits = ['orange', 'mango', 'apple', 'banana', 'rasberry'];

const vegetables = ['potato', 'ladyfinger', 'Bell pepper', 'Eggplant', 'carrot'];

// fruits.push(vegetables);

// x = fruits[5][3];

// Concatination

const allfruits = [fruits, vegetables];

x = allfruits[0][3];

x = fruits.concat(vegetables);

// Spread Operator (...)

x = [...fruits, ...vegetables];

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);


console.log(x);