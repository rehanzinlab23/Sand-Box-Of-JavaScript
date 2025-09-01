console.log('Hello, World!'); 
console.log(100);
console.log(100, 'Hello World', true);
console.warn("This is a warning");
console.error("This is an error message");
console.info("This is some information");
console.table({Name: 'Rehan', Age: 17, Country: 'Pakistan', City: 'Islamabad'});
console.group('Data');
console.log(100, 'Hello World', true);
console.warn("This is a warning");
console.error("This is an error message");
console.info("This is some information");
console.groupEnd();

const style ="color: Red; font-size: 20px; background-color: yellow; padding: 5px; border: 2px solid black; border-radius: 5px;";
console.log('%c This is a styled message', style)
