// Romove

function clearbtn() {
     const clearbutton = document.querySelector('#clear');
     clearbutton.remove();
}

// Remove Child

function ChildRemove() {
     const ul = document.querySelector('ul');
     const li = document.querySelector('li:first-child');

     ul.removeChild(li);
}

clearbtn();

ChildRemove();