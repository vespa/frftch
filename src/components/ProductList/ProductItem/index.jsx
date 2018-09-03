import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

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
        {/* {this.checkDiscountPrice()} */}
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
  shortDescription: PropTypes.string.isRequired,
  brand: PropTypes.shape({}).isRequired,
  formattedPrice: PropTypes.string.isRequired,
  formattedPriceWithoutDiscount: PropTypes.string.isRequired,
  priceWithoutDiscount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductItem;
