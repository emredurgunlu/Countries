import { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./components/Countries";

import AppStyle from "./scss/app.module.scss";
let duplicateSortedData;
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log("the data is gotten from the api");
        let sortedData = response.data.sort((a, b) => {
          // If you are sure that all the chars are lowerCase or upperCase you can get rid of ".toLowerCase()" for below
          // if it's not a object, just a simple array, there is no need nameA,nameB, just use  return a.localeCompare(b);
          var nameA = a.name.common.toLowerCase();
          var nameB = b.name.common.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        // setData(response.data);
        setData(sortedData);
        duplicateSortedData = sortedData;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  //  data && console.log("emre", data); you need to do data && before the console log here

  const handleChange = (e) => {
    console.log(e.target.value);
    let filteredData = duplicateSortedData.filter((item) =>
      item.name.common.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setData(filteredData);
  };
  return (
    <div className={AppStyle["container"]}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="search country..."
      />
      <Countries data={data} />
    </div>
  );
}

export default App;
