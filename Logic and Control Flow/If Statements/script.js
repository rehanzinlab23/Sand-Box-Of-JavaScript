// Syntax Of If Statement

// if (condition) {
//      Associated Code
// }

if (true) {
     console.log('This is true');
}

if (false) {
     console.log('This is not true');
}

const x = 20;
const y = 15;

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
}

else {
         console.log(`${x} is not equal to ${y}`);
}

if (x !== y) {
     const z = 20;
     console.log(`${z} is 20`);
}

// Shorthand If/Else

if (x >= y)
  console.log(`${x} is greater than or equal to ${y}`),
    console.log('This is true');
else console.log('This is false');