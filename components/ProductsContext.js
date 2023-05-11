import { createContext, useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ProductsContext = createContext({});

export function ProductsContextProvider({ children }) {
  const [currency, setCurrency] = useState("ZAR");
  // const [symbol, setSymbol] = useState("R");
  const [language, setLanguage] = useState("English");

  // useEffect(() => {
  //   if (currency === "ZAR") setSymbol("R");
  //   else if (currency === "USD") setSymbol("$");
  // }, [currency, language]);

  // use local storage state to store cart info to the local storage
  const [selectedProducts, setSelectedProducts] = useLocalStorageState("cart", {
    defaultValue: [],
  });
  return (
    <ProductsContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        currency,
        setCurrency,

        language,
        setLanguage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
