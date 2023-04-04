import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/orderActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Message from "../Message";
const OrderSummary = () => {
  const cart = useSelector((state) => state.cart);
  const orderState = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderState;
  const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);
  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
  }, [success, navigate]);

  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100;
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));

  cart.totalPrice =
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice);

    console.log(cart.totalPrice);
  const dispatch = useDispatch();
  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <div>
      {error && <Message type="error" message={error} />}
      {success && (
        <Message type="success" message={"Order placed successfully"} />
      )}
      <h1 className="font-bold text-xl text-center">Order Summary</h1>
      <div className="border rounded-lg px-6 py-4 mt-4">
        <div className="flex justify-between my-2">
          <p className="font-semibold text-lg">Items</p>
          <p className="font-semibold">{cart.itemsPrice} $</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-semibold text-lg">Shipping</p>
          <p className="font-semibold">{cart.shippingPrice} $</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-semibold text-lg">Tax</p>
          <p className="font-semibold">{cart.taxPrice} $</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-semibold text-lg">Total</p>
          <p className="font-semibold">{cart.totalPrice} $</p>
        </div>
        <button
          onClick={placeOrder}
          className="bg-blue-500 text-lg text-white px-4 py-2 rounded-sm w-full mt-6"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
export default OrderSummary;
