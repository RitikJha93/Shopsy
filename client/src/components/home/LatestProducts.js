import { Col, Row } from "antd";

import SingleProduct from "./SingleProduct";
const LatestProducts = ({ products }) => {
  return (
    <div className="my-4 relative px-6">
      <h2 className="font-bold text-2xl text-center mb-3">Latest Products</h2>
      <div className="grid max-w-[100vw] justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">
        {products.map((product,i) => {
          return (
            <div key={i} className="">
              <SingleProduct key={product._id} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LatestProducts;
