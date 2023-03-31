import axios from "axios";
export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: "ORDER_CREATE_REQUEST" });
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
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/orders`,
      order,
      config
    );
    console.log(data);
    dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ORDER_CREATE_FAILURE",
      payload: error?.response?.data.message,
    });
    console.log(error);
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  dispatch({ type: "ORDER_DETAILS_REQUEST" });
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
      `${process.env.REACT_APP_BACKEND_URL}/api/orders/${id}`,
      config
    );
    console.log(data);
    dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS_FAILURE",
      payload: error?.response?.data.message,
    });
    console.log(error);
  }
};