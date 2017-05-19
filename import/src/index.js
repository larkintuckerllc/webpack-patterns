import 'babel-polyfill';
import './index.css';
import cute from './cute.jpg';

var rootEl = document.getElementById('root');
var imageEl = document.createElement('img');
imageEl.src = cute;
rootEl.appendChild(imageEl);

// DEMO ES2015
let demo = 'DEMO';
demo = 'Hello ES2015';
window.console.log(demo);

// DEMO BABEL POLYFILL
const promise = Promise.resolve('done');
promise.then(value => {
  window.console.log(value);
});
