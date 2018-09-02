import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

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

  checkDiscountPrice() {
    const {
      price,
      priceWithoutDiscount,
      formattedPriceWithoutDiscount,
      formattedPrice,
    } = this.props;
    if (price === priceWithoutDiscount) {
      return formattedPrice;
    }
    let percent = priceWithoutDiscount;
    percent = priceWithoutDiscount - price;
    percent /= priceWithoutDiscount;
    percent *= 100;
    return (
      <React.Fragment>
        <span className={style['item__content__price--full']}>
          {`${formattedPriceWithoutDiscount}`}
        </span> {`| ${percent.toFixed(0)}% off ` }
        <span className={style['item__content__price--discount']}>
          ${formattedPrice}
        </span>
      </React.Fragment>
    );
  }

  render() {
    const {
      shortDescription,
      brand,
    } = this.props;
    const { name } = brand;
    const { currentImage } = this.state;
    return (
      <li className={style.item}>
        <span className={style.item__content}>
          <img src={currentImage} alt={shortDescription} />
          <span className={style.item__content__title}>
            {name}
          </span>
          <span className={style.item__content__description}>
            <span className={style.item__content__description__text}>
              {shortDescription}
            </span>
          </span>
          {this.checkDiscountPrice()}
        </span>
      </li>
    );
  }
}

ProductItem.propTypes = {
  shortDescription: PropTypes.string.isRequired,
  brand: PropTypes.shape({}).isRequired,
  formattedPrice: PropTypes.string.isRequired,
  formattedPriceWithoutDiscount: PropTypes.string.isRequired,
  priceWithoutDiscount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  // images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductItem;
