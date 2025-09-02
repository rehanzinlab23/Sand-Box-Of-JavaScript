// Syntax of For loop

// for ([InitialExpression]; [ConditionExpression]; [IncrementExpression]) {statement};

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let index = 0; index < array.length; index++) {
//      const element = array[index];
// }

// If statements in Loops

// for (let i = 0; i <= 10; i++) {

// if (i === 7) {
//    console.log('  7 is my favourite number');
// }
// else {
//   console.log('Number' + i);
// }   
// }

// Nessted Loops

// for (let i = 1; i <= 10; i++ ) {
//        console.log('Number' + 1);

//        for (let j = 1; j <= 10; j++ ) {
//           console.log(`${i} * ${j} = ${i * j}`);
//        }
// }

// Loop through an array (Not recomended)

const names = ['Rehan', 'Hussain', 'Hassan', 'Ali', 'Umar'];

for (i = 0; i < names.length; i++) {

     if (i === 2) {
          console.log(names[i] + " is the best");
     }

     else {
          console.log(names[i]);
     }
}


