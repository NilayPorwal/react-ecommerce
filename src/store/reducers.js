import { combineReducers } from "redux";
import auth from "./auth/reducers"
import products from "./products/reducers"
import cart from "./cart/reducers"
import {reducer as formReducer} from 'redux-form';

const appReducer = combineReducers({
  auth,
  products,
  cart,
  form: formReducer
});

export default (state, action) => appReducer(state, action);
