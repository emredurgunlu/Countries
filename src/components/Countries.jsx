import React from "react";
import { useState } from "react";
import SelectedCountry from "./SelectedCountry";

import style from "../scss/countries.module.scss";

const Countries = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  function handleClick(item) {
    setSelectedCountry(item);
  }
  // below function is for bubbling
  // function handleClick(index) {
  //   console.log(index);
  //   If you are using bubbling and clicking on elements quickly sometimes the index will not be indexed but will be null. So use "index &&" before setSelectedCountry(data[index].name.common)
  //   index && setSelectedCountry(data[index].name.common);
  // }
  return (
    <div className={style["container1"]}>
      {selectedCountry && <SelectedCountry selectedCountry={selectedCountry} />}
      {/* <div
        onClick={(event) => {
          handleClick(event.target.getAttribute("indexNo"));
        }}
      >
        {data &&
          data.map((item, index) => (
            <div key={index} indexNo={index}>
              {item.name.common} ____ {index + 1}
            </div>
          ))}
      </div> */}
      {/* If bubbling is not implemented like below every item has click event */}
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
