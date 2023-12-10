import { GlobalProvider } from "./context/GlobalContext";
import Countries from "./components/Countries";
import Search from "./components/Search";
import style from "./scss/app.module.scss";

function App() {
  return (
    <div className={style["container"]}>
      <GlobalProvider>
        <Search />
        <Countries />
      </GlobalProvider>
    </div>
  );
}

export default App;
