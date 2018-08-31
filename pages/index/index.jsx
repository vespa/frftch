import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../src/components/Header';
import MainMenu from '../../src/components/Header/MainMenu';
import SubMenu from '../../src/components/Header/SubMenu';


class Index extends React.Component {
  static getInitialProps({ reduxStore }) {
    const {
      menu: { menuOptions, subMenuOptions },
      pageInfo: { title, description },
    } = reduxStore.getState();
    return {
      menuOptions,
      subMenuOptions,
      title,
      description,
    };
  }

  static propTypes = {
    menuOptions: PropTypes.arrayOf(String).isRequired,
    subMenuOptions: PropTypes.arrayOf(String).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const {
      menuOptions,
      subMenuOptions,
      title,
      description,
    } = this.props;
    return (
      <React.Fragment>
        <Header>
          <MainMenu
            options={menuOptions}
          />
          <SubMenu
            options={subMenuOptions}
          />
          <h1>{title}</h1>
          <aside>{description}</aside>
        </Header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { menu: { menuOptions, subMenuOptions } } = state;
  return {
    menuOptions,
    subMenuOptions,
  };
};

const mapDispatchToProps = dispatch => ({
  changeSubMenu: () => { dispatch(); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
