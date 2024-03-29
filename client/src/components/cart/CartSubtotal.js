import { Link, useNavigate } from "react-router-dom";

const CartSubtotal = ({ cartItems }) => {
  const navigate = useNavigate();

  return (
    <div className="border-[2px] min-h-[300px] rounded-lg p-6">
      <h2 className="font-bold text-xl">
        CART SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        ) ITEMS
      </h2>
      {cartItems.map((item,i) => {
        return (
          <div key={i} className="flex items-center justify-between my-4">
            <h2 className="w-[200px]">{item.name}</h2>
            <p className="text-lg font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        );
      })}
      <hr />
      <div className="flex items-center justify-between my-2">
        <h2 className="text-xl">Grand Total</h2>
        <p className="text-lg font-semibold">
          $
          {cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
      </div>

      <Link to={'/login?redirect=shipping'}>
        <button className="bg-blue-500 text-lg text-white px-4 py-2 rounded-sm w-full mt-6">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};
export default CartSubtotal;
