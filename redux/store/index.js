import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { menu } from '../ducks/menu';
import { pageInfo } from '../ducks/pageInfo';

const reducerMap = {
  menu,
  pageInfo,
};

export default function initializeStore(initialState = {}) {
  return createStore(
    combineReducers(reducerMap),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
