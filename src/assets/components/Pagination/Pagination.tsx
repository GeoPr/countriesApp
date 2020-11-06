import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCountries } from '../../redux/reducers/countriesReducer/actions';
import { TApp } from '../../redux/reducers/rootReducer';
import './Pagination.scss';

export const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state: TApp) => state.countries);

  const itemsPerPage = 20;
  const itemsLength = Math.round(countries.length / itemsPerPage);

  const itemsArray = Array.from({ length: itemsLength })
    .fill('')
    .map((_, idx) => ({ id: idx, title: idx + 1 }));

  const clickHandler = (id: number) => {
    dispatch(changeCountries(id));
  };

  return (
    <ul className="pagination">
      {itemsArray.map(item => (
        <li className="pagination__item" key={item.id} onClick={() => clickHandler(item.id)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};
