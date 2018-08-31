import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../src/components/Header';
import MainMenu from '../../src/components/Header/MainMenu';
import SubMenu from '../../src/components/Header/SubMenu';
import { productListGet } from '../../redux/ducks/productList';


class Index extends React.Component {
  static async getInitialProps({ reduxStore }) {
    const { dispatch } = reduxStore;
    const {
      menu: { menuOptions, subMenuOptions },
      pageInfo: { title, description },
    } = reduxStore.getState();
    const res = await productListGet(dispatch);
    const { totalItems, totalPages } = res.products;
    return {
      menuOptions,
      subMenuOptions,
      title,
      description,
      totalItems,
      totalPages,
      productList: res.products.entries,
    };
  }

  static propTypes = {
    menuOptions: PropTypes.arrayOf(String).isRequired,
    subMenuOptions: PropTypes.arrayOf(String).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productList: PropTypes.arrayOf(Object).isRequired,
    totalItems: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }

  componentDidMount() {
    // this.props.getProducts()
  }

  render() {
    const {
      menuOptions,
      subMenuOptions,
      title,
      description,
      totalItems,
      totalPages,
      productList,
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
  const { productList: { productList } } = state;
  return {
    menuOptions,
    subMenuOptions,
    productList,
  };
};

const mapDispatchToProps = dispatch => ({
  changeSubMenu: () => { dispatch(); },
  getProducts: () => productListGet(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
