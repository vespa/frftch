import React from 'react';
import PropTypes from 'prop-types';

const MainMenu = ({ options }) => {
  return (
    <ul>
      {options.map(item => (<li key={item}>{item}</li>))}
    </ul>
  );
};

MainMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainMenu;
