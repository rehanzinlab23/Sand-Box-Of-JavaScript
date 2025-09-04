const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
     // By Class Name
     // console.log(itemList.className);
     // text.className = 'card dark';

     // By Class List
     console.log(itemList.classList);
     itemList.classList.forEach((c) => console.log(c));

     // text.classList.add('dark');
     // text.classList.remove('card');


     // The button which I need
     // text.classList.toggle('dark');


     // Change Style
itemList.style.lineHeight = '3';

 items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;