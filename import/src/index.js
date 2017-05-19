/*
require('babel-polyfill');
require('./index.css');
var cute = require('./cute.jpg');
*/
import 'babel-polyfill';
import './index.css';
import cute from './cute.jpg';
// DEMO EXPORT
import secondary from './secondary';

var rootEl = document.getElementById('root');
var imageEl = document.createElement('img');
imageEl.src = cute;
rootEl.appendChild(imageEl);

// DEMO EXPORT
secondary();
