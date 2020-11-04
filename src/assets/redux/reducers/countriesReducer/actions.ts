export const GET_COUNTRIES = 'GET_COUNTRIES';
export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';
export const FILTER_BY_REGION = 'FILTER_BY_REGION';

interface IGetCountries {
  type: typeof GET_COUNTRIES;
  payload: { countries: any };
}
export const getCountries = (countries: any): IGetCountries => ({
  type: GET_COUNTRIES,
  payload: { countries },
});

interface IFilterByCountry {
  type: typeof FILTER_BY_COUNTRY;
  payload: { country: string };
}
export const filterByCountry = (country: string): IFilterByCountry => ({
  type: FILTER_BY_COUNTRY,
  payload: { country },
});

interface IFilterByRegion {
  type: typeof FILTER_BY_REGION;
  payload: { region: string };
}
export const filterByRegion = (region: string): IFilterByRegion => ({
  type: FILTER_BY_REGION,
  payload: { region },
});

export type TCountries = IGetCountries | IFilterByCountry | IFilterByRegion;
