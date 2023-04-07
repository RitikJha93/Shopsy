import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "../reducers/productListReducer";
import { productDetailsReducer } from "../reducers/productDetailsReducer";
import { cartReducer } from "../reducers/cartReducers";
import { userLoginReducer } from "../reducers/userLoginReducer";
import { userRegisterReducer } from "../reducers/userRegisterReducer";
import { userDetailsReducer } from "../reducers/userDetailsReducer";
import { userUpdateProfileReducer } from "../reducers/userUpdateProfileReducer";
import { stepsReducer } from "../reducers/stepsReducers";
import { myOrdersReducer, orderCreateReducer, orderDetailReducer, orderPayReducer } from "../reducers/orderReducers";
import { userListReducer } from "../reducers/userListReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  stepsAction: stepsReducer,
  orderCreate : orderCreateReducer,
  orderDetails : orderDetailReducer,
  orderPay : orderPayReducer,
  myOrders : myOrdersReducer,
  userList:userListReducer
});

const cartItemsStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;
const shippingAddressInfo = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: { cartItems: cartItemsStorage, shippingAddress: shippingAddressInfo },
  userLogin: { userData: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
