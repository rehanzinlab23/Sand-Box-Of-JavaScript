let x;

// Array Literal

const numbers = [2, 987, 35, 4365, 69];
const mixed = ['mango', null, 'ladyfinger', 'physics', 69];

// Array Constructer

const subjects = new Array('math, physics, chemistry, urdu');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite subject is ${subjects[2]}`;

x = numbers.length;

subjects[2] = 'computer';

subjects[3] = 'bio';

subjects[subjects.length] = 'english';

x = subjects;

console.log(x);