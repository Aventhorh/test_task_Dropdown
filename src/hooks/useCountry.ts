import { useMemo } from "react";
import { TCountry } from "../types";

export const useSortedCountries = (
  countries: TCountry[] | any,
  sort: string
) => {
  const sortedCountries = useMemo(() => {
    if (sort) {
      return [...countries].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return countries;
  }, [sort, countries]);

  return sortedCountries;
};

export const useCountries = (
  countries: TCountry[],
  sort: string,
  query: string
) => {
  const sortedCountries = useSortedCountries(countries, sort);
  const search = useMemo(() => {
    return sortedCountries.filter((item: TCountry) =>
      item.title.includes(query)
    );
  }, [query, sortedCountries]);

  return search;
};
