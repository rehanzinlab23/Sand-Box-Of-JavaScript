// Challenge 1

// function getCelcius(f) {
//      const celcius = (f - 32) * 5 / 9;
//      return celcius;
// }

const getCelcius = f => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelcius(32)} \xB0C`);

// Challenge 2

function minMax(arr) {
     const min = Math.min(...arr);
     const max = Math.max(...arr);
     console.log(max);

     return {
          min,
          max,
     };
}

console.log(minMax([1, 2, 3, 4, 69, 5, 6, 7, 8, 9, 10]));

// Challenge 3

((length, width) => {
     const area = length * width;

     const output = `The area of a rectangle with a lenght of ${length} and a width of ${width} is ${area}.`

     console.log(output);
})(22, 12);