export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_DETAILS_REQUEST":
      return { ...state, loading: true };
    case "USER_DETAILS_SUCCESS":
      return { loading: false, user: action.payload };
    case "USER_DETAILS_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
