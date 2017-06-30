import cute from './cute.jpg';
import styles from './index.css';

module.exports = () => {
  const dogEl = document.createElement('div');
  const imageEl = document.createElement('img');
  dogEl.id = 'dog';
  imageEl.src = cute;
  dogEl.appendChild(imageEl);
  return dogEl;
}
