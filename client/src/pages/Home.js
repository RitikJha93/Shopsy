import Hero from "../components/home/Hero";
import LatestProducts from "../components/home/LatestProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link, useLocation, useParams } from "react-router-dom";
import Meta from "../components/Meta";

const Home = ({search}) => {
  const productList = useSelector((state) => state.productList);
  const { products, error, loading } = productList;

  const {keyword} = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch,keyword]);
  return (
    <div>
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? <Message message={error} type={'error'} /> : (
        <>
          {!search ? <Hero /> : <Link to={'/'}><button className="border mt-[76px] ml-6 border-blue-500 px-4 py-2 rounded-md">Go Back</button></Link>}
          <LatestProducts products={products} />
        </>
      )}
    </div>
  );
};
export default Home;
