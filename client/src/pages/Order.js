import { useSelector } from "react-redux";
import OrderDetails from "../components/order/OrderDetails";
import OrderSummary from "../components/order/OrderSummary";

const Order = () => {

  const cart = useSelector((state) => state.cart);
  return (
    <div className="mt-24 md:px-24 sm:px-12 px-6 grid grid-cols-3 gap-5">
      <OrderDetails type={cart}/>
      <OrderSummary type={cart}/>
    </div>
  );
};
export default Order;
