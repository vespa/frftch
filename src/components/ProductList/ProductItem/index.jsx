import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

/**
 * This component displays products and have two states: normal and discount
 */
class ProductItem extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      currentImage: args.images[0].url,
      currentPrice: '',
      realPrice: '',
      discountPrice: '',
      discount: '',
    };
  }

  componentWillMount() {
    this.checkDiscountPrice();
  }
  /**
   * Check if has discount and change the component state.
   * Also calculates the percentage diference between real price and
   * discount price
   */

  checkDiscountPrice() {
    const {
      price,
      priceWithoutDiscount,
      formattedPriceWithoutDiscount,
      formattedPrice,
    } = this.props;
    if (price === priceWithoutDiscount) {
      this.setState({
        currentPrice: formattedPriceWithoutDiscount,
      });
    } else {
      let percent = priceWithoutDiscount;
      percent = priceWithoutDiscount - price;
      percent /= priceWithoutDiscount;
      percent *= 100;
      this.setState({
        realPrice: formattedPriceWithoutDiscount,
        discountPrice: formattedPrice,
        discount: `| ${percent.toFixed(0)}% off `,
      });
    }
  }

  render() {
    const {
      shortDescription,
      brand,
      slug,
    } = this.props;
    const {
      realPrice,
      discountPrice,
      discount,
      currentPrice,
    } = this.state;
    const { name } = brand;
    const { currentImage } = this.state;

    return (
      <li className={style.item}>
        <a href={slug} className={style.item__content}>
          <img src={currentImage} alt={shortDescription} />
          <span className={style.item__content__title}>
            {name}
          </span>
          <span className={style.item__content__description}>
            <span className={style.item__content__description__text}>
              {shortDescription}
            </span>
          </span>
          {currentPrice}
          <span className={style['item__content__price--full']}>
            {realPrice}
          </span> {discount}
          <span className={style['item__content__price--discount']}>
            {discountPrice}
          </span>
        </a>
      </li>
    );
  }
}

ProductItem.propTypes = {
  /** A small description */
  shortDescription: PropTypes.string.isRequired,
  /** Provides the name of the brand */
  brand: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  /** Price cames in the country's currency */
  formattedPrice: PropTypes.string.isRequired,
  /** formattedPriceWithoutDiscount cames in the country's currency */
  formattedPriceWithoutDiscount: PropTypes.string.isRequired,
  /** real product price */
  priceWithoutDiscount: PropTypes.number.isRequired,
  /** product price. when smaller than priceWithoutDiscount,
   * the component show the Discount State  */
  price: PropTypes.number.isRequired,
  /** Url path of the product  */
  slug: PropTypes.string.isRequired,
};

export default ProductItem;
