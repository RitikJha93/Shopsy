import Hero from "../components/home/Hero";
import LatestProducts from "../components/home/LatestProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const { products, error, loading } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? <Message message={error} type={'error'} /> : (
        <>
          <Hero />
          <LatestProducts products={products} />
        </>
      )}
    </div>
  );
};
export default Home;
