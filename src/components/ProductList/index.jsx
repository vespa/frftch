import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <section>
      <ul>
        {products.map(item => (<ProductItem key={`${item.id}`} {...item} />))}
      </ul>
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
