import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        data: data,
        setData,
        selectedCountry: selectedCountry,
        setSelectedCountry,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
