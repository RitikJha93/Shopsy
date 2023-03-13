import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Message from "../components/Message";
import { addToCart } from "../redux/actions/cartActions";
import Lottie from "lottie-react";
import cartAnimation from "../assets/cart.json";
import CartItemComp from "../components/cart/CartItemComp";
import CartSubtotal from "../components/cart/CartSubtotal";
const Cart = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const prodId = useParams().id;

  const qty = document.location.search
    ? Number(document.location.search.split("=")[1])
    : 1;
  console.log(qty, prodId);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(() => {
    if (prodId) {
      dispatch(addToCart(prodId, qty));
    }
  }, [dispatch, prodId, qty]);

  return (
    <div className="mt-24 md:px-24 sm:px-12 px-6">
      {cartItems?.length === 0 ? (
        <div className="h-[86vh] flex items-center flex-col justify-center ">
          <h2 className="md:text-3xl text-xl font-bold">
            Your Cart is Empty. Please add items
          </h2>
          <Lottie
            className="md:max-w-[400px] max-w-[300px]"
            animationData={cartAnimation}
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <CartItemComp cartItems={cartItems}/>
          <CartSubtotal cartItems={cartItems}/>
        </div>
      )}
    </div>
  );
};
export default Cart;
