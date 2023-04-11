import axios from 'axios'
export const listProducts = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products?keyword=${keyword}`);
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  console.log(id);
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

export const productCreateRequest = (product) => async (dispatch, getState) => {
  dispatch({ type: "PRODUCT_CREATE_REQUEST" });

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
      `${process.env.REACT_APP_BACKEND_URL}/api/products`,product,
      config
    );
    console.log(data);
    dispatch({ type: "PRODUCT_CREATE_SUCCESS",payload:data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_CREATE_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};

export const productUpdateRequest = (product) => async (dispatch, getState) => {
  dispatch({ type: "PRODUCT_UPDATE_REQUEST" });

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
      `${process.env.REACT_APP_BACKEND_URL}/api/products/${product._id}`,product,
      config
    );
    console.log(data);
    dispatch({ type: "PRODUCT_UPDATE_SUCCESS",payload:data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_UPDATE_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};

export const productCreateReview = (productId,review) => async (dispatch, getState) => {
  dispatch({ type: "PRODUCT_CREATE_REVIEW_REQUEST" });

  console.log(review);
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
      `${process.env.REACT_APP_BACKEND_URL}/api/products/${productId}/review`,review,
      config
    );
    console.log(data);
    dispatch({ type: "PRODUCT_CREATE_REVIEW_SUCCESS",payload:data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_CREATE_REVIEW_FAILURE",
      payload: error?.response?.data.message,
    });
  }
};
