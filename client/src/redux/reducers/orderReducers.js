export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return { loading: true };
    case "ORDER_CREATE_SUCCESS":
      return { loading: false, success: true, order: action.payload };
    case "ORDER_CREATE_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "ORDER_DETAILS_REQUEST":
      return { ...state, loading: true };
    case "ORDER_DETAILS_SUCCESS":
      return { loading: false, order: action.payload };
    case "ORDER_DETAILS_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_PAY_REQUEST":
      return { loading: true };
    case "ORDER_PAY_SUCCESS":
      return { loading: false, success: true };
    case "ORDER_PAY_FAILURE":
      return { loading: false, error: action.payload };
    case "ORDER_PAY_RESET":
      return {};
    default:
      return state;
  }
};
export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_DELIVER_REQUEST":
      return { loading: true };
    case "ORDER_DELIVER_SUCCESS":
      return { loading: false, success: true };
    case "ORDER_DELIVER_FAILURE":
      return { loading: false, error: action.payload };
    case "ORDER_DELIVER_RESET":
      return {};
    default:
      return state;
  }
};
export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_LIST_MY_REQUEST":
      return { loading: true };
    case "ORDER_LIST_MY_SUCCESS":
      return { loading: false, orders: action.payload };
    case "ORDER_LIST_MY_FAILURE":
      return { loading: false, error: action.payload };
    case "ORDER_LIST_MY_RESET":
      return { orders: [] };

    default:
      return state;
  }
};
export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_LIST__REQUEST":
      return { loading: true };
    case "ORDER_LIST__SUCCESS":
      return { loading: false, orders: action.payload };
    case "ORDER_LIST__FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
