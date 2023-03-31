import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../redux/actions/cartActions";

const Payment = () => {
  const stepsData = useSelector((state) => state.stepsAction);
  const { step } = stepsData;

  const [paymentMethod, setPaymentMethod] = useState('paypal')
  const dispatch = useDispatch()
  const handlePaymentMethod = () =>{
    dispatch(savePaymentMethod(paymentMethod))
    dispatch({type:'INCREASE_STEP'})
  }
  return (
    <div className="mt-24 md:px-24 sm:px-12 px-6 flex justify-center">
      <div className="flex flex-col ">
        <h2 className="text-xl font-bold">Payment Method</h2>
        <label htmlFor="" className="my-2">
          <input
            name="payment_method"
            className="mr-2"
            value="paypal"
            type="radio"
            checked
            onChange={(e)=>setPaymentMethod(e.target.value)}
          />
          Paypal or Credit Card
        </label>
        <label htmlFor="" className="my-2">
          <input
            name="payment_method"
            className="mr-2"
            value="cod"
            type="radio"
            onChange={(e)=>setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
        <button
          onClick={handlePaymentMethod}
          className="bg-blue-600 px-4 py-2 rounded-lg mt-4 text-white font-semibold hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default Payment;
