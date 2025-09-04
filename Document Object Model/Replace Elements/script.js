// 1 method

function firstreplace() {
     const firstItem = document.querySelector('li:first-child');

     const li = document.createElement('li');
     li.textContent = 'Replaced Item';

     firstItem.replaceWith(li);
}

// 2 method

function secondreplace() {
     const seconditem = document.querySelector('li:nth-child(2)');

     seconditem.outerHTML = '<li>Replaced Second</li>'
}

// 3 method

function allreplace() {
     const lis = document.querySelectorAll('li');

     // lis.forEach((item, index) => {
     //      // item.outerHTML = '<li>Replace All</li>'

     //      if (index === 1) {
     //              item.innerHTML = 'Second Item';
     //      }

     //      else {
     //            item.innerHTML = 'Replace All';
     //      }
     // });

     lis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>');
}

firstreplace();

secondreplace();

allreplace();