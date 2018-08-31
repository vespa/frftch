import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Template from '../../src/Template';
import ProductList from '../../src/components/ProductList';
// actions
import { productListGet } from '../../redux/ducks/productList';

class Index extends React.Component {
  static async getInitialProps({ reduxStore }) {
    const { dispatch } = reduxStore;
    const res = await productListGet(dispatch);
    const { totalItems, totalPages } = res.products;
    return {
      totalItems,
      totalPages,
      productList: res.products.entries,
    };
  }

  static propTypes = {
    productList: PropTypes.arrayOf(Object).isRequired,
    totalItems: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }

  render() {
    const {
      totalItems,
      totalPages,
      productList,
    } = this.props;
    return (
      <Template>
        <ProductList
          products={productList}
          totalItems={totalItems}
          totalPages={totalPages}
        />
      </Template>
    );
  }
}

const mapStateToProps = (state) => {
  const { productList: { productList } } = state;
  return {
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
