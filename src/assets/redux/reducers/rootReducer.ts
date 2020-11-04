import { loaderReducer } from './loaderReducer/loaderReducer';
import { countriesReducer } from './countriesReducer/countriesReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  loader: loaderReducer,
});

export type TApp = ReturnType<typeof rootReducer>;
