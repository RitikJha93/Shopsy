import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../redux/actions/cartActions";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  console.log(shippingAddress);
  const [address, setAddress] = useState(shippingAddress.address);
  const [country, setCountry] = useState(shippingAddress.country);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stepsData = useSelector((state) => state.stepsAction)
  const {step} = stepsData
  const handleSaveAddress = () => {
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    dispatch({type:'INCREASE_STEP'})
  };
  return (
    <div className="mt-24 md:px-24 sm:px-12 px-6 flex justify-center">
      <div className="flex flex-col w-[450px]">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="outline-none border my-4 border-blue-300 text-lg rounded-lg px-4 py-2 focus:border focus:border-blue-500"
        />
        <button
          onClick={handleSaveAddress}
          className="bg-blue-600 px-4 py-2 rounded-lg mt-4 text-white font-semibold hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default Shipping;
