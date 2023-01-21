import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import CountryContext from "../../../Context/context";
import { TCheckCountry } from "../../../types";
import classes from "./CheckCountry.module.css";

const CheckCountry = (props: TCheckCountry) => {
  const { checkCountry, setCheckCountry } = React.useContext(CountryContext);
  return (
    <li className={classes.checkItem}>
      {props.title}
      <AiOutlineClose
        className={classes.languageSelectorClose}
        onClick={() => {
          setCheckCountry(
            checkCountry.filter((item: string) => item !== props.title)
          );
        }}
      />
    </li>
  );
};

export default CheckCountry;
