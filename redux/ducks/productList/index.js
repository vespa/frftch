const PRODUCTLIST_REQUEST = 'PRODUCTLIST_REQUEST';
const PRODUCTLIST_LOADED = 'PRODUCTLIST_LOADED';
const PRODUCTLIST_ERROR = 'PRODUCTLIST_ERROR';

const INITIAL_STATE = {
  productList: [],
  totalItems: 0,
  totalPages: 0,
  loading: false,
  message: '',
};

function productListRequest() {
  return {
    type: PRODUCTLIST_REQUEST,
    loading: true,
  };
}

function productListLoaded(productList) {
  return {
    type: PRODUCTLIST_LOADED,
    productList,
    loading: false,
  };
}

function productListError() {
  return {
    type: PRODUCTLIST_ERROR,
    productList: [],
    totalItems: 0,
    totalPages: 0,
    loading: false,
    message: 'Alguma coisa deu errada. Por favor, tente novamente em alguns minutos',
  };
}

function productListGet() {
  return (dispatch) => {
    dispatch(productListRequest());
    return fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then((value) => {
        dispatch(productListLoaded(value));
        return value;
      })
      .catch((err) => {
        dispatch(productListError(err));
      });
  };
}

function reducer(state = INITIAL_STATE, action = { type: 'none' }) {
  const { type } = action;
  switch (type) {
    case PRODUCTLIST_REQUEST:
      return { ...state, loading: action.loading };

    case PRODUCTLIST_LOADED:
      return {
        ...state,
        loading: action.loading,
        productList: action.productList.products.entries,
      };

    case PRODUCTLIST_ERROR:
      return { ...state, loading: action.message };

    default:
      return state;
  }
}

export {
  productListRequest,
  productListLoaded,
  productListGet,
  PRODUCTLIST_REQUEST,
  PRODUCTLIST_LOADED,
  PRODUCTLIST_ERROR,
  reducer as productList,
};
