import React from 'react';
import { useAnimal } from '../hooks/useAnimal';
import styles from '../styles/Animal.module.scss'
import Button from './Button';

const Animal = ({ animal }) => {


    const { imgUrl, isLoaded, newImg } = useAnimal(animal);

  return (
      <>
         {
           isLoaded ?
           <img className={styles.animalImg} src={imgUrl} alt={animal} /> :
           <div>loading...</div>
         } 
         <div className={styles.btns}>
          <Button to={imgUrl}>Download</Button>
          <Button onClick={newImg}>Next</Button>
         </div>
      </>
  );
};



export default Animal;
