import { ICountriesItem } from './countriesReducer';
import { GET_COUNTRIES, FILTER_BY_COUNTRY, FILTER_BY_REGION } from './actionsTypes';

export const getCountries = (countries: Array<ICountriesItem>) => {
  return {
    type: GET_COUNTRIES,
    payload: { countries },
  } as const;
};

export const filterByCountry = (country: string) => {
  return {
    type: FILTER_BY_COUNTRY,
    payload: { country },
  } as const;
};

export const filterByRegion = (region: string) => {
  return {
    type: FILTER_BY_REGION,
    payload: { region },
  } as const;
};
