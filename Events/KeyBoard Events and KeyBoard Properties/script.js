const itemInput = document.getElementById('item-input');

const OneKeyPress = (e) => {
     console.log('Keypress');
}


const OnkeyUp = (e) => {
     console.log('Keypress Up');
}

const OnkeyDown = (e) => {
     // key

// if (e.key === 'Enter') {
//      alert('You Pressed Enter');
// }

// console.log(e.key);
// document.querySelector('h1').innerText = e.key;


     // keyCode
if (e.keyCode === 13) {
      alert('You Pressed Enter');
}
     // code
 if (e.code === 'Digit1') {
console.log('You Pressed 1');
 }

 if (e.repeat) {
     console.log('You are holding down ' + e.key);
 }

 console.log('Shift:' + e.shiftKey);
 console.log('Control:' + e.ctrlKey);
 console.log('Alt:' + e.altKey);

 if (e.shiftKey && e.key === 'K') {
     console.log('You hit shift + K');
 }
};

// itemInput.addEventListener('keypress', OneKeyPress)
// itemInput.addEventListener('keyup', OnkeyUp)
itemInput.addEventListener('keydown', OnkeyDown)