const clearBtn = document.querySelector('#clear');


// Remove all li
function onClear() {
     const itemLists =   document.querySelector('ul')

     itemLists.innerHTML = '';
}

// JavaScript Event Listners

// clearBtn.onclick = function () {
//      alert('Clear Items');
// };

// clearBtn.onclick = function () {
//      console.log('Clear Items');
// };

// Modern Way (addEventListener())

// clearBtn.addEventListener('click', function () {
//       alert('Clear Items');
// })

// clearBtn.addEventListener('click', () => {alert('Clear Items')});

// clearBtn.addEventListener('click', () => {console.log('Clear Items')});

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear),5000 );

setTimeout(() => clearBtn.click(),5000);

