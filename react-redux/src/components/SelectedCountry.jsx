import React from "react";
import { useSelector } from "react-redux";
import styles from "../scss/selectedCountry.module.scss";
const SelectedCountry = () => {
  const { selectedCountry } = useSelector((state) => state.counter);

  return (
    <div className={styles["container1"]}>
      {selectedCountry ? (
        <div>
          <img src={selectedCountry.flags.png} alt="flag" />
          <h1>{selectedCountry.name.common}</h1>
          <div className={styles["container2"]}>
            <div className={styles["text"]}>
              <img
                className={styles["icons"]}
                src="./img/region.png"
                alt="icon"
              />
              <strong>Region:</strong>
              {selectedCountry.region}
            </div>
            <div className={styles["text"]}>
              <img
                className={styles["icons"]}
                src="./img/capital.png"
                alt="icon"
              />
              <strong>Capital:</strong>
              {selectedCountry.capital || " city not available"}
            </div>
            {/* <li>Languages:{Object.values(selectedCountry.languages)}</li> bu şekilde yapınca kelimeler arası boşluk olmuyor*/}
            <div className={styles["text"]}>
              <img
                className={styles["icons"]}
                src="./img/language.png"
                alt="icon"
              />
              <strong>Languages:</strong>
              {selectedCountry.languages
                ? Object.values(selectedCountry.languages).map(
                    (item, index) => <span key={index}> {item} </span>
                  )
                : " language not available"}
            </div>
            <div className={styles["text"]}>
              <img
                className={styles["icons"]}
                src="./img/money.png"
                alt="icon"
              />
              <strong>Currencies:</strong>
              {(selectedCountry.currencies &&
                Object.values(selectedCountry.currencies)[0].name) ||
                "currency not available"}{" "}
              {selectedCountry.currencies &&
                Object.values(selectedCountry.currencies)[0].symbol}
            </div>
            <div className={styles["text"]}>
              <img
                className={styles["icons"]}
                src="./img/population.png"
                alt="icon"
              />
              <strong>Population:</strong>
              {selectedCountry.population.toLocaleString()}
            </div>
            <div className={styles["text"]}>
              <img className={styles["icons"]} src="./img/map.png" alt="icon" />
              <strong>Map:</strong>
              <a
                href={selectedCountry.maps.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                Go to google map
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SelectedCountry;
