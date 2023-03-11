import { Link } from "react-router-dom";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="p-2 cursor-pointer hover:shadow-md">
        <img src={product.image} className="rounded-lg" alt="" />
        <div className="mt-2">
          <h2 className="font-bold text-lg">{product.name}</h2>
          
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#F6B900'} />
          <h3 className="font-semibold text-lg">${product.price}</h3>
        </div>
      </div>
    </Link>
  );
};
export default SingleProduct;
