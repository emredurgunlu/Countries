import React from "react";
import style from "../scss/search.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterCountries } from "../redux/counterSlice";
const Search = () => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state.counter);
  const handleChange = (e) => {
    console.log(e.target.value);
    let filteredData = allCountries.filter((item) =>
      item.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim())
    );
    dispatch(filterCountries(filteredData));
  };
  return (
    <input
      className={style["searchbar"]}
      onChange={handleChange}
      type="text"
      placeholder="search country..."
    />
  );
};

export default Search;
