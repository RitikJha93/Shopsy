import { useState } from "react";
import products from "../../products";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
const ProductDetailComp = ({ id }) => {
  const selectedProduct = products.find((product) => product._id === id);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid h-full items-center md:grid-cols-2 grid-cols-1">
      <img className="max-w-[600px] rounded-xl" src={selectedProduct?.image} alt="" />
      <div>
        <h2 className="font-bold text-2xl text-gray-800">{selectedProduct?.name}</h2>
        <p className="text-lg mt-3 text-gray-500">{selectedProduct?.description}</p>
        <p className="font-semibold text-xl mt-3 text-gray-800">${selectedProduct?.price}</p>
        <div className="flex items-center mt-4">
          <div className="flex items-center justify-between w-[100px] py-2 px-3 rounded-full border border-gray-700">
            <AiOutlineMinus onClick={()=>quantity > 1 ? setQuantity(quantity-1) : setQuantity(1)} />
            <p>{quantity}</p>
            <AiOutlinePlus onClick={()=>setQuantity(quantity+1)} />
          </div>
          <button className="ml-10 bg-blue-500 text-white px-4 py-2 rounded-full">Add to Cart</button>
        </div>

        <h3 className="font-semibold text-lg mt-4 inline-flex items-center">
          Availability :
          {selectedProduct?.countInStock > 0 ? (
            <p className="text-base font-normal ml-3">In Stock</p>
          ) : (
            <p className="text-base font-normal ml-3">Out of Stock</p>
          )}
        </h3>
      </div>
    </div>
  );
};
export default ProductDetailComp;
