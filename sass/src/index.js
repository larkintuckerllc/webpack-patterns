require('./index.css');
var cute = require('./cute.jpg');

var rootEl = document.getElementById('root');
var imageEl = document.createElement('img');
imageEl.src = cute;
rootEl.appendChild(imageEl);
