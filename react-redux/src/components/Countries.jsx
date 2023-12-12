import React from "react";
import style from "../scss/countries.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "../redux/counterSlice";
const Countries = () => {
  const dispatch = useDispatch();
  const { filteredCountries } = useSelector((state) => state.counter);
  function handleClick(item) {
    dispatch(selectCountry(item));
    console.log(item.name.common);
  }
  return (
      <div className={style["container"]}>
        {filteredCountries.map((item, index) => (
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

  );
};

export default Countries;
