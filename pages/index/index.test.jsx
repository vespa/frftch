import React from 'react';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Index from './index';

const initialState = {
  productList: [],
  totalItems: 0,
  totalPages: 0,
};
const mockStore = configureStore();

let wrapper;
let store;
const props = {
  reduxStore: {
    dispatch: jest.fn(),
  },
};
describe('[Component: Index]', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    // const prop = await Index.getInitialProps();
    wrapper = shallow(
      <Index store={store} productList={[]} />,
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('should call dispacth and return expected data', () => {
  //   fetchMock.getOnce('http://localhost:3000/api', {
  //     products: {
  //       totalPages: 1,
  //       totalItems: 1,
  //       products: {
  //         entries: [{ id: 'test' }],
  //       },
  //     },
  //   });
  //   console.log(wrapper.instance());
  //   // static async getInitialProps({ reduxStore }) {
  //   //   const { dispatch } = reduxStore;
  //   //   const res = await dispatch(productListGet());
  //   //   const { totalItems, totalPages } = res.products;
  //   //   return {
  //   //     totalItems,
  //   //     totalPages,
  //   //     productList: res.products.entries,
  //   //   };
  //   // }
  // });
});
