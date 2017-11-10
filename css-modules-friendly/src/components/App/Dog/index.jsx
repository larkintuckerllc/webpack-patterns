import React from 'react';
import generateName from 'sillyname';
import cute from './cute.jpg';
import styles from './index.css';

function Dog() {
  window.console.log('dog');
  window.console.log(generateName());
  return (
    <div id={styles.root}>
      <img src={cute} alt="dog" />
    </div>
  );
}
export default Dog;
