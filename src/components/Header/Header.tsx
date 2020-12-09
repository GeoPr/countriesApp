import React, { useRef } from 'react';
import './Header.scss';

export const Header = () => {
  const span = useRef<HTMLSpanElement>(null!);

  const changeHandler = () => {
    document.body.classList.toggle('_active');
    span.current.classList.toggle('_active');

    if (span.current.classList.contains('_active')) {
      span.current.textContent = 'Dark Mode';
    } else {
      span.current.textContent = 'Light Mode';
    }
  };

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <h2 className="header__t">Where in the world?</h2>
          <label className="header__mode">
            <input type="checkbox" className="header__input" onChange={changeHandler} />
            <span className="header__span" ref={span}>
              Light Mode
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};
