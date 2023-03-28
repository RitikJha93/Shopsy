import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
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
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
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
      <Steps current={current} items={items} />
      <div>
        {steps[current].title === "Sign In" ? (
          <Login></Login>
        ) : steps[current].title === "Shipping" ? (
          <Shipping />
        ) : steps[current].title === "Payment" ? (
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
        {current < steps.length - 1 && (
          <Button className="bg-blue-500 text-white" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
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
