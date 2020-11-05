import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getCountries } from '../redux/reducers/countriesReducer/actions';
import { hideLoader, showLoader } from '../redux/reducers/loaderReducer/actions';
import './App.scss';
import { Country } from './Country/Country';
import { Header } from './Header/Header';
import { Home } from './Home/Home';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(showLoader());

      await fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => {
          const updatedCountries = countries.map((country: any, idx: number) => ({
            ...country,
            id: idx,
          }));

          dispatch(getCountries(updatedCountries));
        });

      dispatch(hideLoader());
    })();
  }, []);

  return (
    <div className="wrapper">
      <main className="page">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/country/:id" component={Country} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
