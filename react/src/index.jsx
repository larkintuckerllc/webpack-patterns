import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

window.console.log(process.env.NODE_ENV);
render(
  <App />,
  document.getElementById('root'),
);
/*
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
  import('./cat')
  .then(cat => displayEl.appendChild(cat.default()));
});
dogButtonEl.innerText = 'dog';
dogButtonEl.addEventListener('click', () => {
  clearDisplay();
  import('./dog')
  .then(dog => displayEl.appendChild(dog.default()));
});
rootEl.appendChild(catButtonEl);
rootEl.appendChild(dogButtonEl);
rootEl.appendChild(displayEl);
*/
