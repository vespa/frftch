import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MainMenu from '../components/Header/MainMenu';
import style from './style.scss';

const Template = ({
  menuOptions,
  title,
  description,
  children,
}) => {
  return (
    <React.Fragment>
      <Header>
        <MainMenu
          options={menuOptions}
        />
      </Header>
      <div className={style.body__divider} />
      <div className={style.body}>
        <div className={style.body__header}>
          <div className={style.body__header__text}>
            <h1>{title}</h1>
            <aside className={style.body__description}>{description}</aside>
          </div>
        </div>
        <div className={style.body__content}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

Template.propTypes = {
  menuOptions: PropTypes.arrayOf(String).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => {
  const {
    menu: {
      menuOptions,
      subMenuOptions,
    },
    pageInfo: {
      title,
      description,
    },
  } = state;
  return {
    menuOptions,
    subMenuOptions,
    title,
    description,
  };
};

const mapDispatchToProps = dispatch => ({
  changeSubMenu: () => { dispatch(); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Template);
