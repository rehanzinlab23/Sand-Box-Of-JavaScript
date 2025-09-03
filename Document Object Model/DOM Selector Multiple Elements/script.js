// querySelectorAll

const listItmes = document.querySelectorAll('.item');

console.log(listItmes[1].innerText);

// listItmes[1].style.color = 'red';

// listItmes.forEach((item, index) => {
// 	item.style.color = 'rgba(90, 56, 90, 0.4)';

//      if (index === 1) {
//           item.remove();
//      }

//      if (index === 0) {
//           item.innerHTML = `  Cookies
//                     <button class="remove-item btn-link text-red">
//                          <i class="fa-solid fa-xmark"></i>
//                     </button>`;
//      }
// });

// getElementsByClassName()
// Returns an HTMLCollection

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// getElementsByTagName()

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);