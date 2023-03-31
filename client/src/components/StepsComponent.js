import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../pages/Payment";
import Shipping from "../pages/Shipping";
import Login from "./login/Login";

const steps = [
  {
    title: "Sign In",
  },
  {
    title: "Shipping",
  },
  {
    title: "Payment",
  },
  {
    title: "Place Order",
  },
];

const StepsComponent = () => {
  const { token } = theme.useToken();

  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const stepsData = useSelector((state) => state.stepsAction);
  const { step } = stepsData;
  console.log(step);

  const dispatch = useDispatch();

  const next = () => {
    dispatch({ type: "INCREASE_STEP" });
  };
  const prev = () => {
    dispatch({ type: "DECREASE_STEP" });
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div className="mt-24 px-24">
      <Steps current={step} items={items} />
      <div>
        {steps[step].title === "Sign In" && userData ? (
          dispatch({ type: "INCREASE_STEP" })
        ) : steps[step].title === "Shipping" ? (
          <Shipping />
        ) : steps[step].title === "Payment" && shippingAddress ? (
          <Payment />
        ) : (
          <></>
        )}
      </div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {/* {current < steps.length - 1 && (
          <Button className="bg-blue-500 text-white" onClick={() => next()}>
            Next
          </Button>
        )} */}
        {step === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {step > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
export default StepsComponent;
