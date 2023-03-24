export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_REGISTER_REQUEST":
        return { loading: true };
      case "USER_REGISTER_SUCCESS":
        return { loading: false, userData: action.payload };
      case "USER_REGISTER_FAILURE":
        return { loading: false, error: action.payload };
      case "USER_LOGOUT":
        return {};
      default:
        return state;
    }
  };
  