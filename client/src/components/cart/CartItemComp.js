import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
const CartItemComp = ({ cartItems }) => {

  const dispatch = useDispatch();
  return (
    <div className="col-span-2">
        {cartItems.map((cartItem) => {
          return (
            <>
              <div className="flex items-center justify-between">
                <div className="flex w-[380px] items-center">
                  <img
                    className="max-w-[150px] rounded-xl"
                    src={cartItem.image}
                    alt=""
                  />
                  <h2 className="ml-5 font-medium text-lg">{cartItem.name}</h2>
                </div>
                <h2 className="font-bold text-lg">${cartItem.price}</h2>
                <div className="flex items-center justify-between w-[100px] py-2 px-3 rounded-full border border-gray-700">
                  <AiOutlineMinus
                    className="cursor-pointer"
                    onClick={() => {
                      cartItem.quantity > 1
                        ? dispatch(
                            addToCart(
                              cartItem.product,
                              Number(cartItem.quantity - 1)
                            )
                          )
                        : dispatch(addToCart(cartItem.product, Number(1)));
                    }}
                  />
                  <p>{cartItem.quantity}</p>
                  <AiOutlinePlus
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(
                        addToCart(
                          cartItem.product,
                          Number(cartItem.quantity + 1)
                        )
                      );
                    }}
                  />
                </div>
                <RiDeleteBin6Line className="text-red-600 text-2xl cursor-pointer" />
              </div>
              <hr className="my-4" />
            </>
          );
        })}
    </div>
  );
};
export default CartItemComp;
