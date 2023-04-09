import axios from "axios";

export const userLoginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
      { email, password },
      config
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userData");
  dispatch({ type: "USER_LOGOUT" });
  dispatch({ type: "USER_DETAILS_RESET" });
  dispatch({ type: "ORDER_LIST_MY_RESET" });
  dispatch({ type: "USER_LIST_RESET" });
};

export const userRegisterRequest =
  (name, email, password) => async (dispatch) => {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/register`,
        { name, email, password },
        config
      );
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAILURE",
        payload: error?.response?.data.message,
      });
    }
  };
export const getUserRequest = (id) => async (dispatch, getState) => {
  dispatch({ type: "USER_DETAILS_REQUEST" });

  const {
    userLogin: { userData },
  } = getState();
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`,
      config
    );
    dispatch({ type: "USER_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_DETAILS_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};
export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: "USER_UPDATE_PROFILE_REQUEST" });

  const {
    userLogin: { userData },
  } = getState();
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/profile`,
      user,
      config
    );
    dispatch({ type: "USER_UPDATE_PROFILE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_UPDATE_PROFILE_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};

export const getUserList = () => async (dispatch, getState) => {
  dispatch({ type: "USER_LIST_REQUEST" });

  const {
    userLogin: { userData },
  } = getState();
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`,
      config
    );
    dispatch({ type: "USER_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_LIST_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};

export const userDeleteRequest = (id) => async (dispatch, getState) => {
  dispatch({ type: "USER_DELETE_REQUEST" });

  const {
    userLogin: { userData },
  } = getState();
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`,
      config
    );
    dispatch({ type: "USER_DELETE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_DELETE_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};

export const userUpdateRequest = (user) => async (dispatch, getState) => {
  dispatch({ type: "USER_UPDATE_REQUEST" });

  const {
    userLogin: { userData },
  } = getState();
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/${user._id}`, user,
      config
    );
    console.log(data);
    dispatch({ type: "USER_UPDATE_SUCCESS" });
    dispatch({ type: "USER_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_UPDATE_FAILURE",
      payload: error?.response?.data.message,
    });
    console.log(error);
  }
};


