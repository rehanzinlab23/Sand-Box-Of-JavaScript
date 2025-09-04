// insertAdjacentElement Example

function insertElement() {
     const filter = document.querySelector('.filter');

     const h1 = document.createElement('h1');

     h1.textContent = 'Hello VS Code';

     filter.insertAdjacentElement('afterbegin', h1);
}

// insertAdjacentText Example

function insertText() {
     const item = document.querySelector('li:first-child');

     item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// insertAdjacentHTML Example

function insertHTML() {
     const clearbtn = document.querySelector('#clear');

     clearbtn.insertAdjacentHTML('afterend', '<h2>Hello Vs Code</h2>');
}

// insertBefore Example

function insertBefore() {
     const ul = document.querySelector('ul');

     const li = document.createElement('li');

     li.textContent = 'Crumble Cookies'

     const thirdItem = document.querySelector('li:nth-child(2)');

     ul.insertBefore(li, thirdItem);
}

insertElement();

insertText();

insertHTML();

insertBefore();