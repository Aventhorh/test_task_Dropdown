import React, { useState } from "react";
import Flag from "react-world-flags";
import CountryContext from "../../../Context/context";
import { TCountry } from "../../../types";
import classes from "./Country.module.css";
import checkbox from "../../../svg/Checkbox.svg";
import checkboxOut from "../../../svg/Checkboxundef.svg";

const Country = (props: TCountry) => {
  const { checkCountry, setCheckCountry } = React.useContext(CountryContext);
  const [check, setCheck] = useState(true);

  React.useEffect(() => {
    if (checkCountry.find((item: string) => item === props.title)) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [checkCountry, props.title]);

  return (
    <li className={classes.country}>
      <div className={classes.countryTitle}>
        <Flag code={props.code} height={15} width={20} />
        <h3 className={classes.countryText}>{props.title}</h3>
      </div>
      <div className={classes.countryCheck}>
        {check ? (
          <img
            src={checkboxOut}
            alt="check"
            className={classes.countryOpenClose}
            onClick={() => {
              setCheck(false);
              setCheckCountry([...checkCountry, props.title]);
            }}
          />
        ) : (
          <img
            src={checkbox}
            alt="check"
            className={classes.countryOpenClose}
            onClick={() => {
              setCheck(true);
              setCheckCountry(
                checkCountry.filter((item: string) => item !== props.title)
              );
            }}
          />
        )}
      </div>
    </li>
  );
};

export default Country;
