// Step 1

const library = [
    {
        title: "Peer e Kamil",
        author: "Umaira Ahmed",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },

       {
        title: "The Road Ahead",
        author: "Bill Gates",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },

       {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3

const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4

const libraryjson = JSON.stringify(library);

console.log(libraryjson);