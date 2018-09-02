import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const MainMenu = ({ options }) => {
  return (
    <nav className={style.menu}>
      {options.map(item => (<a href="/" key={item}>{item}</a>))}
    </nav>
  );
};

MainMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainMenu;
