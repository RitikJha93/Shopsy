import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="w-[300px] p-2 cursor-pointer hover:shadow-md">
        <img src={product.image} className="rounded-lg" alt="" />
        <div className="mt-2">
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p>
            {product.rating} from {product.numReviews} reviews
          </p>
          <h3 className="font-semibold text-lg">${product.price}</h3>
        </div>
      </div>
    </Link>
  );
};
export default SingleProduct;
