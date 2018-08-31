import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return (
    <header>
      <div> logo </div>
      <div> {children} </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
