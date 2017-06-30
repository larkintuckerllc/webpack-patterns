import cute from './cute.jpg';
import './index.css';

export default () => {
  const dogEl = document.createElement('div');
  const imageEl = document.createElement('img');
  dogEl.id = 'dog';
  imageEl.src = cute;
  dogEl.appendChild(imageEl);
  return dogEl;
}
