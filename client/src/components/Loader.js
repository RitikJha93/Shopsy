import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};
export default Loader;
