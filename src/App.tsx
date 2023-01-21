import React from "react";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.appContainer}>
      <h2>Язык</h2>
      <LanguageSelector />
    </div>
  );
}

export default App;
