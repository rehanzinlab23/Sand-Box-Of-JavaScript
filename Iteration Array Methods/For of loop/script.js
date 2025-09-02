// Loop through array

const names = ['Rehan', 'Hussain', 'Ali'];
const titles = [{title: 'Rich Dad Poor Dad'}, {title: 'The Great Wall of China'}, {title: 'Peer e Kamil'}]

for (const name of names){
console.log(name);
}

for (const title of titles) {
     console.log(title.title);
}

// Loop over strings

const str = 'Hello World!';

for (const letter of str) {
     console.log(letter);
}

// Loop over maps

const map = new Map();
map.set('name', 'Rehan');
map.set('age', 17);

for (const [key, value] of map) {
  console.log(key, value);
}