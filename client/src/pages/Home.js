import Hero from "../components/home/Hero";
import LatestProducts from "../components/home/LatestProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import { Spin } from "antd";

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
        <div className="h-[100vh] flex items-center justify-center">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Hero />
          <LatestProducts products={products} />
        </>
      )}
    </div>
  );
};
export default Home;
