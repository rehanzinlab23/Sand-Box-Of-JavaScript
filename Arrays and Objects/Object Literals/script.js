let x;

const person = {
     name: 'Rehan Hussain',

     age: 17,

     isAdmin: true,

     address: {

      Street: '47, Bharia town',

      city: 'Islamabad',

      state: 'Federal',

     },

     hobbies: ['Coding❤️', 'Sports❤️'],

};

x = person.name;

x = person['age'];

x = person.address;

x = person.address.city;

x = person.hobbies[0];

console.log(x);