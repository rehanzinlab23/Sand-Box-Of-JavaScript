// Method 1 (Easy one)

// window.addEventListener('keydown', (e) => {
//      const insert = document.getElementById('insert');

//      insert.innerHTML = `
//      <div class="key">
//      ${e.key === ' ' ? 'Space' : e.key}
//      <small>e.key</small>
//      </div>

//      <div class="key">
//      ${e.keyCode}
//      <small>e.keyCode</small>
//      </div>

//      <div class="key">
//      ${e.code}
//      <small>e.code</small>
//      </div>
//      `
// });

// Method 2 (Recommended)

function showKeyCodes(e) {
     const insert = document.getElementById('insert');
     insert.innerHTML = '';

     const keycodes = {
          'e.key': e.key === ' ' ? 'Space' : e.key,
          'e.keyCode': e.keyCode,
          'e.code': e.code,
     };

for (let key in keycodes) {
     const div = document.createElement('div');
     div.className = 'key';

     const small =  document.createElement('small');

     const keytext = document.createTextNode(key);
     const valuetext = document.createTextNode(keycodes[key]);

     small.appendChild(keytext);
     div.appendChild(valuetext);
     div.appendChild(small);

     insert.appendChild(div);
     };
};

window.addEventListener('keydown', showKeyCodes);