import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountryContext from "./Context/context";
import "./index.css";

const Main = () => {
  const [checkCountry, setCheckCountry] = useState<string[]>([]);
  return (
    <React.StrictMode>
      <CountryContext.Provider value={{ checkCountry, setCheckCountry }}>
        <App />
      </CountryContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />
);
