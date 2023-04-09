import axios from 'axios'
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`);
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`);
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const productDeleteRequest = (id) => async (dispatch, getState) => {
  dispatch({ type: "PRODUCT_DELETE_REQUEST" });

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
      `${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`,
      config
    );
    dispatch({ type: "PRODUCT_DELETE_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DELETE_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};
