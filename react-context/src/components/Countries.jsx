import React from "react";
import SelectedCountry from "./SelectedCountry";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import style from "../scss/countries.module.scss";

const Countries = () => {
  const { data, selectedCountry, setSelectedCountry } =
    useContext(GlobalContext);

  function handleClick(item) {
    setSelectedCountry(item);
  }
  return (
    <div className={style["container1"]}>
      {selectedCountry && <SelectedCountry />}
      <div className={style["container2"]}>
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "rgb(20, 20, 20)" : "black",
                fontSize: 30,
              }}
              onClick={() => {
                handleClick(item);
              }}
            >
              {index + 1} - {item.name.common}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
