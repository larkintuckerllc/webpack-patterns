import cute from './cute.jpg';
import './index.css';

module.exports = () => {
  const catEl = document.createElement('div');
  const imageEl = document.createElement('img');
  catEl.id = 'cat';
  imageEl.src = cute;
  catEl.appendChild(imageEl);
  return catEl;
}
