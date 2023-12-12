import { Counter } from "./components/Counter";
import Footer from "./components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getCountries } from "./redux/counterSlice";
import Countries from "./components/Countries";
import SelectedCountry from "./components/SelectedCountry";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(getCountries());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log("neden buresı her seferinde render oluyor?");
  return (
    <div>
      <Counter />
      <Footer />
      <Search />
      <div>
        {<SelectedCountry />} {loading || <Countries />}
      </div>
    </div>
  );
}

export default App;