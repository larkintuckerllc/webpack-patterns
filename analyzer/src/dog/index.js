import generateName from 'sillyname';
import cute from './cute.jpg';
import styles from './index.css';

export default () => {
  const dogEl = document.createElement('div');
  const imageEl = document.createElement('img');
  dogEl.id = styles.root;
  imageEl.src = cute;
  dogEl.appendChild(imageEl);
  window.console.log(generateName());
  return dogEl;
}
