import React from 'react';
import { Countries } from '../Countries/Countries';
import { Actions } from '../Actions/Actions';

export const Home = () => {
  return (
    <section className="page__sc sc">
      <div className="sc__container _container">
        <div className="sc__body">
          <Actions />
          <Countries />
        </div>
      </div>
    </section>
  );
};
