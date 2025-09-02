const socials =['FaceBook', 'Instagram', 'Youtube', 'Pininterest'];

// console.log(socials.__proto___);

// socials.forEach(function (item) {
//      console.log(item);
// })

// socials.forEach((item) => console.log(item));

// // We can also pass in the index and original array

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// // Using a named function

// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

// Array of objects

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));