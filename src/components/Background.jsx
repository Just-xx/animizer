import React from 'react';
import styles from '../styles/Background.module.scss'

const Background = ({ children, big }) => {

  return (
    <div className={`${big && styles.wrapperBig} ${styles.wrapper}`}>
      <img className={`${big && styles.catSm} ${styles.cat}`} src="/assets/undraw_cat.svg" alt="" />
      <div className={`${big && styles.contentBoxBig} ${styles.contentBox}`}>
        {children}
      </div>
    </div>
  );
};


export default Background;
