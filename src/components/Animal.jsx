import React, { useState } from "react";
import { useAnimal } from "../hooks/useAnimal";
import styles from "../styles/Animal.module.scss";
import Button from "./Button";
import { ClipLoader } from "react-spinners";

const Animal = ({ animal }) => {
  const [loaded, setLoaded] = useState(false);
  const { imgUrl, isFetched, newImg, error } = useAnimal(animal);

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
          <img
            className={styles.animalImg}
            src={imgUrl}
            alt={animal}
          />
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
