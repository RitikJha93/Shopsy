import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
const CartItemComp = ({ cartItems }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="col-span-2">
      <div>
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
                    onClick={() =>
                      quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
                    }
                  />
                  <p>{cartItem.quantity}</p>
                  <AiOutlinePlus
                    className="cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
                <RiDeleteBin6Line className="text-red-600 text-2xl cursor-pointer" />
              </div>
              <hr className="my-4" />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default CartItemComp;
