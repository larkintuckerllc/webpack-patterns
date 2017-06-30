// const cat = require('./cat');
// const dog = require('./dog');

const rootEl = document.getElementById('root');
const catButtonEl = document.createElement('button');
const dogButtonEl = document.createElement('button');
const displayEl = document.createElement('div');
const clearDisplay = () => {
  while(displayEl.hasChildNodes()) {
    displayEl.removeChild(displayEl.lastChild);
  }
};
catButtonEl.innerText = 'cat';
catButtonEl.addEventListener('click', () => {
  clearDisplay();
  // displayEl.appendChild(cat());
  require.ensure(['./cat'], () => {
    const cat = require('./cat');
    displayEl.appendChild(cat());
  });
});
dogButtonEl.innerText = 'dog';
dogButtonEl.addEventListener('click', () => {
  clearDisplay();
  // displayEl.appendChild(dog());
  require.ensure(['./dog'], () => {
    const dog = require('./dog');
    displayEl.appendChild(dog());
  });
});
rootEl.appendChild(catButtonEl);
rootEl.appendChild(dogButtonEl);
rootEl.appendChild(displayEl);
