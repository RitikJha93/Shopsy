import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OrderDetails = ({type,orderId}) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="col-span-2">
      <h1 className="font-bold text-xl text-center">Order Details</h1>
      <div className="flex items-start flex-col">
        <h2 className="font-semibold text-2xl">SHIPPING</h2>
        <p className="mt-2">
          <strong>Addresss : </strong>
          {cart.shippingAddress.address},{cart.shippingAddress.city},
          {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <h2 className="font-semibold text-2xl">PAYMENT METHOD</h2>
        <p className="mt-2">
          <strong>Method : </strong> {cart.paymentMethod}
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <h2 className="font-semibold text-2xl">ORDER ITEMS</h2>
        {cart.cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.cartItems.map((item, index) => {
              return (
                <>
                  <div className="flex items-center my-3 justify-between w-[600px]">
                    <div className="flex items-center">
                      <img
                        className="max-w-[50px] rounded-md"
                        src={item.image}
                        alt=""
                      />
                      <Link
                        to={`/product/${item.product}`}
                        className="ml-4 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <p className="font-semibold">
                      {item.quantity} X {item.price}$ ={" "}
                      {(item.quantity * item.price).toFixed(2)}$
                    </p>
                  </div>
                  <hr className="my-2" />
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default OrderDetails;
