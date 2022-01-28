import React from 'react';
import styles from '../styles/Background.module.scss'

const StarterBackgrund = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.cat} src="/assets/undraw_cat.svg" alt="" />
      <div className={styles.contentBox}>
        {children}
      </div>
    </div>
    
  );
};

export default StarterBackgrund;
