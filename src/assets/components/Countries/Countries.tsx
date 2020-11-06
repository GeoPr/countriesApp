import React from 'react';
import './Countries.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TApp } from '../../redux/reducers/rootReducer';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';

export const Countries = () => {
  const { filteredCountries } = useSelector((state: TApp) => state.countries);
  const { isLoading } = useSelector((state: TApp) => state.loader);

  return (
    <div className="sc__countries countries-sc">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="countries-sc__items">
            {filteredCountries.length ? (
              filteredCountries.map(country => {
                return (
                  <Link
                    to={`/country/${country.id}`}
                    key={country.id}
                    className="countries-sc__item">
                    <div className="countries-sc__img">
                      <img src={country.flag} alt="" />
                    </div>
                    <div className="countries-sc__box">
                      <h2 className="countries-sc__t"> {country.name} </h2>
                      <ul className="countries-sc__list">
                        <li>
                          Population: <span>{country.population}</span>
                        </li>
                        <li>
                          Region: <span>{country.region}</span>
                        </li>
                        <li>
                          Capital: <span>{country.capital}</span>
                        </li>
                      </ul>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="countries-sc__nothing">nothing was founded</div>
            )}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};
