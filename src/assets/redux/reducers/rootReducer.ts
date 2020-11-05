import { loaderReducer } from './loaderReducer/loaderReducer';
import { countriesReducer } from './countriesReducer/countriesReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  loader: loaderReducer,
});

export type TApp = ReturnType<typeof rootReducer>;

type TProperties<T> = T extends {
  [key: string]: infer U;
}
  ? U
  : never;

export type TActions<
  T extends {
    [key: string]: (...args: any[]) => any;
  }
> = ReturnType<TProperties<T>>;
