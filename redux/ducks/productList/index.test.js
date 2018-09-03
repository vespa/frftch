import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
  productListRequest,
  productListLoaded,
  productListGet,
  productList,
  productListError,
  PRODUCTLIST_REQUEST,
  PRODUCTLIST_LOADED,
  PRODUCTLIST_ERROR,
} from './index';

const middlewares = [thunk];
describe('[Redux: pageInfo]', () => {
  const mockStore = configureMockStore(middlewares);
  const INITIAL_STATE = {
    productList: [],
    totalItems: 0,
    totalPages: 0,
    loading: false,
    message: '',
  };
  const products = {
    products: {
      entries: [
        {
          id: 'test',
        },
      ],
    },
  };
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should return correct initalstate', () => {
    expect(productList()).toEqual(INITIAL_STATE);
  });

  it('should change loading status', () => {
    const action = productListRequest();
    expect(productList(INITIAL_STATE, action).loading).toEqual(true);
  });


  it('should update product list', () => {
    const action = productListLoaded(products);
    expect(productList(INITIAL_STATE, action).loading).toEqual(false);
    expect(productList(INITIAL_STATE, action).productList).toEqual(products.products.entries);
  });

  it('should get a error message', () => {
    const action = {
      type: PRODUCTLIST_ERROR,
      productList: [],
      totalItems: 0,
      totalPages: 0,
      loading: false,
      message: 'Alguma coisa deu errada. Por favor, tente novamente em alguns minutos',
    };
    expect(productListError()).toEqual(action);
  });

  it('should test async productListGet', () => {
    fetchMock.getOnce('http://localhost:3000/api', products);
    const expectedActions = [{
      loading: true,
      type: PRODUCTLIST_REQUEST,
    }, {
      loading: false,
      productList: {
        products: {
          entries: [{
            id: 'test',
          }],
        },
      },
      type: PRODUCTLIST_LOADED,
    }];
    const store = mockStore({ todos: [] });
    return store.dispatch(productListGet(store.dispatch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should return a error from productListGet', () => {
    fetchMock.mock('*', 500);
    const expectedActions = [
      { loading: true, type: 'PRODUCTLIST_REQUEST' },
      {
        loading: false, message: 'Alguma coisa deu errada. Por favor, tente novamente em alguns minutos', productList: [], totalItems: 0, totalPages: 0, type: PRODUCTLIST_ERROR,
      }];
    const store = mockStore({});
    return store.dispatch(productListGet(store.dispatch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
