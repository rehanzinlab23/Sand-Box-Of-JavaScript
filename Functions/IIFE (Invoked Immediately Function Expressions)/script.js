// Syntax Of IIFE (Invoked Immediately Function Expressions)

// (function() {
//      const name = '';
//      console.log(name);
// We can also add functions in invoked 
// })();

// WE CAN'T CALL FUNCTION OUTSIDE THE INVOKED FUNCTION

(function() {
     const user = 'Hussain';
     console.log(user);
     const hello = () => console.log('Hello from Rehan');
     hello();
     })();

// With Parameters

     (function (name) {
console.log(' Hello ' + name);
     })('Spidey');

