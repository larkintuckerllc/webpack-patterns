import React from 'react';
import generateName from 'sillyname';
import cute from './cute.jpg';
import styles from './index.css';

function Cat() {
  window.console.log('cat');
  window.console.log(generateName());
  return (
    <div id={styles.root}>
      <img src={cute} />
    </div>
  )
}
export default Cat;
