import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { menu } from '../../pages/index/redux/menu';

const reducerMap = {
  menu,
};


export default function initializeStore(initialState = {}) {
  return createStore(
    combineReducers(reducerMap),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
