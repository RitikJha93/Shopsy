import { Col, Row } from "antd";
import products from "../../products";
import SingleProduct from "./SingleProduct";
const LatestProducts = () => {
  return (
    <div className="my-4 w-[100vw] relative px-6">
      <h2 className="font-bold text-2xl text-center mb-3">Latest Products</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {products.map((product) => {
          return (
            <div>
              <SingleProduct key={product._id} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LatestProducts;
