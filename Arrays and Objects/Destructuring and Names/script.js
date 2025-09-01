const firstname = 'Rehan';

const lastname = 'Hussain';

const age = 17;

const person = {
     firstname,

     lastname,

     age,

};

console.log(person.lastname);

// Destructuring

const todo = {
     id: 1,
     title: 'Take Out The Trash',
     user: {
          name: 'Spidey',
     }
};

const {
     id: todoIN, /*Renaming*/
     title, 
     user: {name}  /*Destructuring*/} 
     = todo;

console.log(todoIN);

// Destructuring Arrays

const numbers = [1, 4, 686, 69];

const [first, second, ...rest] = numbers;

console.log(first, second, ...rest);