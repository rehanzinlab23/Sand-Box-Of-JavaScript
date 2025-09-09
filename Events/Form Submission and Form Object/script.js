const form = document.getElementById('item-form');

function onForm(e) {

     e.preventDefault();

     const item = document.getElementById('item-input').value;
     const priority = document.getElementById('priority-input').value;

if (item === ''  || priority ==='0') {
     alert('hello everyone');
     return;
}

     console.log(item, priority);
}

form.addEventListener('submit', onForm);