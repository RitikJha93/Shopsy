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

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const { loading: reviewLoading, success: reviewSuccess, error: reviewError } = productCreateReview;

  useEffect(() => {
    dispatch(listProductDetails(path.id));
    if(reviewSuccess || reviewError) {
      dispatch({type:'PRODUCT_CREATE_REVIEW_RESET'})
    }
  }, [dispatch, path.id, reviewSuccess]);

  return (
    <>
      {reviewSuccess && <Message type={"success"} message={'Review added successfully'} />}
      {reviewError && <Message type={"error"} message={reviewError} />}
      {loading || reviewLoading ? (
        <Loader />
      ) : error  ? (
        <Message type={"error"} message={error} />
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
