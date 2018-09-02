import React from 'react';
import PropTypes from 'prop-types';
import Logo from './assets/Logo';
import style from './style.scss';

const Header = ({ children }) => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div> {children} </div>
        <div className={style.header__logo}> <Logo /> </div>
        <div />
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
