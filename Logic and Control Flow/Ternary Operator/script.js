const age = 20;

// Using if Statement

if (age >= 18) {
     console.log('You can vote!');
}

else {
     console.log('You can not vote!');
}

// Using Ternary Operator

// Syntax of Ternary Operator

// Condition Ternary Operator(?) Associated Code Else(:)

(age >= 18) ? console.log('You can vote!') : console.log('You can not vote!');

// Assinging a conditional value to a variable

const canVote = (age >= 18) ? true : false;

const canVote2 = (age >= 18) ? 'You can vote!' : 'You can not vote!';

console.log(canVote);

console.log(canVote2);

// Multiple statements using if statements

const auth = true;

// let redirect;

// if (auth) {
//      alert('Welcome to the dashboard');
//      redirect = '/dashboard';
// }

// else {
//        alert('Access denied');
//      redirect = '/login';
// }

// Multiple statements using Ternary Operator

// const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access denied'), '/login')

//  console.log(redirect);

// Ternary with no else

auth ? console.log('Welcome to the dashboard') : null;

// Shorthand for ternary with no else

auth && console.log('Welcome to the dashboard');