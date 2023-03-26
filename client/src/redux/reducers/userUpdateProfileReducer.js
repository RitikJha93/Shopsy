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
