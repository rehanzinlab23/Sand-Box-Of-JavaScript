let x;

const arr = [12, 32, 69, 52, 234];

// arr.push(1000);

// arr.pop();

// arr.unshift(221);

// arr.shift();

// arr.reverse();

x = arr.includes(120);

x = arr.indexOf(609);

x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(3, 1);

x = arr.splice(1, 4).reverse().toString().charAt(1);

console.log(x);