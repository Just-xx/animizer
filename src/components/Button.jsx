import React from 'react';
import styles from '../styles/Buttons.module.scss'

const Button = ({ to, children, onClick }) => {
  return <a href={to} onClick={onClick} className={styles.btn}>{children}</a>;
};

export default Button;
