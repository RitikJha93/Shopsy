import { Button, Carousel } from "antd";
import banner1 from "../../assets/banner3.webp";
import banner2 from "../../assets/banner4.webp";
const Hero = () => {
  const contentStyle = {
    height: "92vh",
    color: "#fff",
    // lineHeight: "92vh",
    textAlign: "center",
    width: "100vw",
    objectFit: "cover",
    background: "#364d79",
  };
  return (
    <div className="relative mt-[60px]">
      <Carousel autoplay>
        <div style={contentStyle} className="relative">
          <img
            className="h-[92vh] object-cover w-[100vw]"
            src={banner1}
            alt=""
          />
          <div className="absolute top-[50%] left-[20%] translate-y-[-50%]">
            <h1 className="font-bold text-5xl">LATEST FASHION SALE</h1>
            <p className="font-semibold text-2xl mb-4 mt-2 underline underline-offset-4">
              50% off
            </p>
            <button className="text-xl px-8 rounded-md py-3 bg-blue-500 text-white cursor-pointer">
              BUY NOW
            </button>
          </div>
        </div>
        <div style={contentStyle} className="relative">
          <img
            className="h-[92vh] object-cover w-[100vw]"
            src={banner2}
            alt=""
          />
          <div className="absolute top-[50%] left-[15%] translate-y-[-50%]">
            <h1 className="font-bold text-5xl">SUMMER COLLECTION</h1>
            <p className="font-semibold text-2xl mb-4 mt-2 underline underline-offset-4">
              30% off
            </p>
            <button className="text-xl px-8 rounded-md py-3 bg-blue-500 text-white cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Hero;
