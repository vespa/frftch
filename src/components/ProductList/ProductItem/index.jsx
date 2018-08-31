import React from 'react';
import PropTypes from 'prop-types';

class ProductItem extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      currentImage: args.images[0].url,
    };
  }

  changeImage() {
    const images = this.props;
    return images;
  }

  render() {
    const {
      formattedPrice,
      shortDescription,
      brand,
    } = this.props;
    const { name } = brand;
    const { currentImage } = this.state;
    return (
      <li>
        {name}
        {shortDescription}
        <img src={currentImage} alt={shortDescription} />
        {formattedPrice}
      </li>
    );
  }
}

ProductItem.propTypes = {
  shortDescription: PropTypes.string.isRequired,
  brand: PropTypes.shape({}).isRequired,
  formattedPrice: PropTypes.string.isRequired,
  // images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductItem;
