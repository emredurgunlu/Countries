import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getCountries } from "./redux/counterSlice";
import Countries from "./components/Countries";
import SelectedCountry from "./components/SelectedCountry";
import Search from "./components/Search";

import style from "./scss/app.module.scss";

function App() {
  const dispatch = useDispatch();
  const { loading, selectedCountry } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(getCountries());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("neden buresı her seferinde render oluyor?");
  return (
    <div className={style["container1"]}>
      <Search />
      <div className={style["container2"]}>
        {selectedCountry && <SelectedCountry />} {loading || <Countries />}
      </div>
    </div>
  );
}

export default App;
