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
  // yukarıdaki şekilde destructure edince re-render oluyor, shallowEqual metodu bile işe yaramıyor
  // selectedCountry her tıklamada güncellendiği için onu yorum yapıp renderi kontrol et
  // ama aşağıdaki şekilde yapınca re-render olmuyor
  // const loading = useSelector((state) => state.counter.loading);
  // const selectedCountry = useSelector((state) => state.counter.selectedCountry);
  console.log("render oldu");
  useEffect(() => {
    dispatch(getCountries());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style["container1"]}>
      <Search />
      <div className={style["container2"]}>
        {selectedCountry && <SelectedCountry />}
        {loading || <Countries />}
      </div>
    </div>
  );
}

export default App;
