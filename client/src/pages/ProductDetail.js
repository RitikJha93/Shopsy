import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ProductDetailComp from "../components/productDetail/ProductDetailComp";
import Reviews from "../components/productDetail/Reviews";
import { listProductDetails } from "../redux/actions/productActions";
import Message from "../components/Message";
const ProductDetail = () => {
  const path = useParams();

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(path.id));
  }, [dispatch, path.id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type={"error"} message={error.response.data.message} />
      ) : (
        <div className="mt-24 relative md:px-24 sm:px-12 px-6">
          <ProductDetailComp selectedProduct={product} />
          <Reviews selectedProduct={product} />
        </div>
      )}
    </>
  );
};
export default ProductDetail;
