import React from 'react';
import PropTypes from 'prop-types';

const SubMenu = ({ options }) => {
  return (
    <ul>
      {options.map(item => (<li key={item}>{item}</li>))}
    </ul>
  );
};

SubMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SubMenu;
