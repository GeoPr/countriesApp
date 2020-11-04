import { TCountries, GET_COUNTRIES, FILTER_BY_COUNTRY, FILTER_BY_REGION } from './actions';

interface ICountriesItemCurrencies {
  code: string;
  name: string;
  symbol: string;
}

interface ICountriesItemLanguages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface ICountriesItemRegionalBlocs {
  acronym: string;
  name: string;
  otherAcronyms: any[];
  otherNames: any[];
}

interface ICountriesItem {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  callingCodes: Array<string>;
  capital: string;
  cioc: string;
  currencies: Array<ICountriesItemCurrencies>;
  demonym: string;
  flag: string;
  gini: number;
  languages: Array<ICountriesItemLanguages>;
  latlng: Array<number>;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: Array<ICountriesItemRegionalBlocs>;
  subregion: string;
  timezones: Array<string>;
  topLevelDomain: Array<string>;
  translations: {
    br: string;
    de: string;
    es: string;
    fa: string;
    fr: string;
    hr: string;
    it: string;
    ja: string;
    nl: string;
    pt: string;
  };
}

interface IInitalState {
  countries: Array<ICountriesItem>;
  filteredCountries: Array<ICountriesItem>;
}

const initalState: IInitalState = {
  countries: [],
  filteredCountries: [],
};

export const countriesReducer = (
  state: IInitalState = initalState,
  action: TCountries,
): IInitalState => {
  switch (action.type) {
    case GET_COUNTRIES: {
      const { countries } = action.payload;

      return {
        countries,
        filteredCountries: countries,
      };
    }

    case FILTER_BY_COUNTRY: {
      const { country } = action.payload;

      const filteredCountries = filterCountries(state.countries, 'name', country);

      return {
        ...state,
        filteredCountries,
      };

      // return {
      //   ...state,
      //   filteredCountries: filterCountries(state.countries, 'name', action.payload.country),
      // };
    }

    case FILTER_BY_REGION: {
      const { region } = action.payload;

      const filteredCountries = filterCountries(state.countries, 'region', region);

      return {
        ...state,
        filteredCountries,
      };
    }

    default:
      return state;
  }
};

function filterCountries(countries: any[], countryParam: string, filterParam: string) {
  return countries.filter(country => {
    return country[countryParam].toLowerCase().includes(filterParam.toLowerCase());
  });
}
