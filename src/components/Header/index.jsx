import React from 'react';
import PropTypes from 'prop-types';
import Logo from './assets/logo.svg';

const Header = ({ children }) => {
  return (
    <header>
      <div> <Logo /> </div>
      <div> {children} </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
