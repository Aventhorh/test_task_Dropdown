import React, { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import classes from "./LanguageSelector.module.css";
import Countries from "../Countries/Countries";
import cn from "classnames";
import CountryContext from "../../Context/context";
import CheckCountry from "./CheckCountry/CheckCountry";

const LanguageSelector = () => {
  const [menuOpen, setmenuOpen] = useState(true);
  const { checkCountry } = React.useContext(CountryContext);
  return (
    <>
      <div className={classes.languageSelectorContainer}>
        <ul className={classes.checkList}>
          {checkCountry.map((item: string) => (
            <CheckCountry key={item} title={item} />
          ))}
        </ul>
        <div className={classes.languageSelectorSlide}>
          {menuOpen ? (
            <RiArrowDownSLine
              className={classes.languageSelectorOpenClose}
              onClick={() => setmenuOpen(false)}
            />
          ) : (
            <RiArrowUpSLine
              className={classes.languageSelectorOpenClose}
              onClick={() => setmenuOpen(true)}
            />
          )}
        </div>
      </div>

      <div className={cn(classes.list, menuOpen ? classes.hideList : "")}>
        <Countries />
      </div>
    </>
  );
};

export default LanguageSelector;
