import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import styles from './style.scss';
/**
 * Generates a Product List when receive an array of objects
 */
const ProductList = ({ products }) => {
  return (
    <section>
      <ul className={styles.productList}>
        {products.map(item => (<ProductItem key={`${item.id}`} {...item} />))}
      </ul>
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
