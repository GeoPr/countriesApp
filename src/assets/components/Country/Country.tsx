import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { TApp } from '../../redux/reducers/rootReducer';
import './Country.scss';

export const Country = () => {
  const { id } = useParams<any>();
  const countries = useSelector((state: TApp) => state.countries.countries);

  if (!countries || !countries[id]) {
    return <Redirect to="/" />;
  }

  const country = countries[id];

  return (
    <section className="page__country country">
      <div className="country__container _container">
        <div className="country__body">
          <Link to="/" className="country__button">
            Back
          </Link>
          <div className="country__item">
            <div className="country__flag">
              <img src={country.flag} alt="" />
            </div>
            <div className="country__info info-country">
              <h2 className="info-country__t"> {country.name} </h2>
              <ul className="info-country__list">
                <li>
                  Native Name: <span>{country.nativeName}</span>
                </li>
                <li>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </li>
                <li>
                  Population: <span>{country.population}</span>
                </li>
                <li>
                  Currencies: <span>{country.currencies[0].code}</span>
                </li>
                <li>
                  Region: <span>{country.region}</span>
                </li>
                <li>
                  Languages: <span>{country.languages.map(lang => lang.name)}</span>
                </li>
                <li>
                  Sub Region: <span>{country.subregion}</span>
                </li>
                <li>
                  Capital: <span>{country.capital}</span>
                </li>
              </ul>
              <div className="info-country__border">
                Border Countries:
                {country.borders.map((b: string, idx: number) => (
                  <span key={idx}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
