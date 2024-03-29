export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DELETE_REQUEST":
      return { loading: true };
    case "PRODUCT_DELETE_SUCCESS":
      return { loading: false, success: true };
    case "PRODUCT_DELETE_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_CREATE_REQUEST":
      return { loading: true };
    case "PRODUCT_CREATE_SUCCESS":
      return { loading: false, success: true, product: action.payload };
    case "PRODUCT_CREATE_FAILURE":
      return { loading: false, error: action.payload };
    case "PRODUCT_CREATE_RESET":
      return {};
    default:
      return state
  }
};
export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_UPDATE_REQUEST":
      return { loading: true };
    case "PRODUCT_UPDATE_SUCCESS":
      return { loading: false, success: true, product: action.payload };
    case "PRODUCT_UPDATE_FAILURE":
      return { loading: false, error: action.payload };
    case "PRODUCT_UPDATE_RESET":
      return { product: {} };
    default:
      return state
  }
};

export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_CREATE_REVIEW_REQUEST":
      return { loading: true };
    case "PRODUCT_CREATE_REVIEW_SUCCESS":
      return { loading: false, success: true };
    case "PRODUCT_CREATE_REVIEW_FAILURE":
      return { loading: false, error: action.payload };
    case "PRODUCT_CREATE_REVIEW_RESET":
      return {};
    default:
      return state
  }
};