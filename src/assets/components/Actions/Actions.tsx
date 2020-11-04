import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCountry, filterByRegion } from '../../redux/reducers/countriesReducer/actions';
import './Actions.scss';

export const Actions = () => {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState('Filter by Region');
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByCountry(e.target.value));
  };

  const clickHandler = (region: string) => {
    setCurrent(region);
    setIsActive(false);

    dispatch(filterByRegion(region));
  };

  return (
    <div className="sc__form form-sc">
      <form action="#" className="form-sc__body" onSubmit={e => e.preventDefault()}>
        <input
          className="form-sc__input"
          type="text"
          autoComplete="off"
          name="input"
          placeholder="Search for a country..."
          onChange={changeHandler}
        />
      </form>
      <div className={`sc__select select-sc ${isActive ? '_active' : ''}`}>
        <div className="select-sc__current" onClick={() => setIsActive(!isActive)}>
          {current}
        </div>
        <ul className="select-sc__list">
          {['Africa', 'America', 'Asia', 'Europe', 'Oceania'].map((region, idx) => {
            return (
              <li key={idx} onClick={() => clickHandler(region)}>
                {region}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
