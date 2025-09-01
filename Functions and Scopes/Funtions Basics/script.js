function sayhello() {
     console.log('hello world');
}

sayhello();

function add(num1, num2) {
     console.log(num1 + num2);
}

add(5,3);

function subtract(num1, num2) {
    return num1 - num2;

    console.log('After the return');
}

const result = subtract(27, 5);

console.log(result, subtract(1000, 1));