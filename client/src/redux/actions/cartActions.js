import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/products/${id}`);

  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantity: qty,
      countInStock: data.countInStock,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: "CART_REMOVE_ITEM", payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
