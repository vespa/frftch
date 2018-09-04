import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
/**
 * Website's main menu.
 * @TODO: Make it fully functional
 */
const MainMenu = ({ options }) => {
  return (
    <nav className={style.menu}>
      {options.map(item => (<a href="/" key={item}>{item}</a>))}
    </nav>
  );
};

MainMenu.propTypes = {
  /** Menu items provided by an Array */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainMenu;
