const d = new Date (8, 14, 2025, 6, 0, 0);

const hours = d.getHours();

if (hours < 12) {
     console.log('Good Morning');
}

else if (hours < 18) {
        console.log('Good Afternoon');
}

else {
        console.log('Good Night');
}

// Nested if

if (hours < 12) {
     console.log('Good Morning');

     if (hours === 6) {
console.log('Wake Up!');
     }
}

else if (hours < 18) {
        console.log('Good Afternoon');
}

else {
        console.log('Good Night');

           if (hours >= 20) {
console.log('zzzzzzzz');
     }
}

// Boolean Operators In If Statements (&& AND)

if (hours >= 7 && hours < 15 ) {
console.log('It is work time!');
}

// Boolean Operators In If Statements (|| OR)

if (hours === 6 || hours === 20 ) {
console.log('Bursh Your Teeth!');
}