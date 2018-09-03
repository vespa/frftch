import React from 'react';
import { shallow } from 'enzyme';
import ProducItem from './index';

describe('[Component: ProductItem]', () => {
  let wrapper;
  let finalState;
  beforeEach(() => {
    wrapper = shallow(
      <ProducItem
        shortDescription="test"
        brand={{ name: 'test' }}
        formattedPrice="R$ 1,00"
        formattedPriceWithoutDiscount="R$ 1,00"
        priceWithoutDiscount={1.00}
        price={1.00}
        slug="test"
        images={[{ url: '/test' }]}
      />,
    );
  });
  it('should set currentPrice only', () => {
    finalState = {
      currentImage: '/test',
      currentPrice: 'R$ 1,00',
      realPrice: '',
      discountPrice: '',
      discount: '',
    };
    expect(wrapper.instance().state).toEqual(finalState);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return correct price object', () => {
    finalState = {
      currentImage: '/test',
      currentPrice: '',
      discount: '| 50% off ',
      discountPrice: 'R$ 1,00',
      realPrice: 'R$ 1,00',
    };
    wrapper = shallow(
      <ProducItem
        shortDescription="test"
        brand={{ name: 'test' }}
        formattedPrice="R$ 1,00"
        formattedPriceWithoutDiscount="R$ 1,00"
        priceWithoutDiscount={1.00}
        price={0.50}
        slug="test"
        images={[{ url: '/test' }]}
      />,
    );

    expect(wrapper.instance().state).toEqual(finalState);
    expect(wrapper).toMatchSnapshot();
  });
});
