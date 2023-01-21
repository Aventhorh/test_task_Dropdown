import React, { useState } from "react";
import classes from "./Countries.module.css";
import { FiSearch } from "react-icons/fi";
import { countryCodes } from "../../data";
import { useCountries } from "../../hooks/useCountry";
import Country from "./Country/Country";
import { TCountry } from "../../types";

const Countries = () => {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const search = useCountries(countryCodes, filter.sort, filter.query);

  return (
    <>
      <div className={classes.countries}>
        <FiSearch className={classes.countriesSearchIcon} />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Поиск"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          className={classes.countriesSearchBar}
        />
      </div>
      <ul>
        {search.map((item: TCountry) => (
          <Country key={item.code} code={item.code} title={item.title} />
        ))}
      </ul>
    </>
  );
};

export default Countries;
