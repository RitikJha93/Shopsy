import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart);

  const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100;
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));

  cart.totalPrice =
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice);
  const placeOrder = () => {};
  return (
    <div>
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
