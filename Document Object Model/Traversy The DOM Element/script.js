let output;

// Get Child Elements

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;

output = parent.children[1].className;

output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.firstElementChild.style.color = 'green';

parent.lastElementChild.innerText = 'Child Three';
parent.lastElementChild.style.color = '#f6f6';

// Get Parent Element From a Child

const child = document.querySelector('.child');

output = child.parentElement.style.border = '2px solid #666';
output = child.parentElement.style.padding = '10px';

// Sibling Elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;

output = secondItem.nextElementSibling;

output = secondItem.nextElementSibling.style.color = 'pink';

output = secondItem.previousElementSibling.style.color = 'orange';

console.log(output);