export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE_PROFILE_REQUEST":
      return { loading: true };
    case "USER_UPDATE_PROFILE_SUCCESS":
      return { loading: false, success: true, userData: action.payload };
    case "USER_UPDATE_PROFILE_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_UPDATE_REQUEST":
      return { loading: true };
    case "USER_UPDATE_SUCCESS":
      return { loading: false, success: true };
    case "USER_UPDATE_FAILURE":
      return { loading: false, error: action.payload };
    case "USER_UPDATE_RESET":
      return { user: {} };
    default:
      return state;
  }
};
