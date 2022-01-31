import React, { useState } from "react";
import { useAnimal } from "../hooks/useAnimal";
import styles from "../styles/Animal.module.scss";
import Button from "./Button";
import { ClipLoader } from "react-spinners";

const Animal = ({ animal }) => {
  const [loaded, setLoaded] = useState(false);
  const { imgUrl, isFetched, newImg, error, isVideo } = useAnimal(animal);

  return (
    <div
    style={{
      opacity: isFetched || error ? "1" : "0",
      transform: isFetched || error ? "translateY(0)" : "translateY(-20px)",
    }}
    className={styles.wrapper}
    >
      <ClipLoader
        color="#fff"
        loading={!isFetched && !error}
      />
      {error && <div className={styles.fetchError}>Unable to get image :(</div>}
      {isFetched && (
        <>

          {
            !isVideo ?
            <img
              className={styles.animalImg}
              src={imgUrl}
              alt={animal}
            /> :
            <video className={styles.animalImg} controls>
              <source src={imgUrl} type="video/mp4" />
            </video>
          }
          <div className={styles.btns}>
              <Button to={imgUrl}>Download</Button>
              <Button onClick={() => {newImg(); setLoaded(false)}}>Next</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Animal;
