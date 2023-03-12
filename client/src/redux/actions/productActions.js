import axios from 'axios'
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get("http://localhost:5000/api/products");
    console.log(data);
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAILURE",
      payload: error.response.data.message,
    });
  }
};
