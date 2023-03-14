import { Button, Carousel } from "antd";
import banner1 from "../../assets/banner3.webp";
import banner2 from "../../assets/banner4.webp";
const Hero = () => {
  const contentStyle = {
    height: "92vh",
    color: "#fff",
    // lineHeight: "92vh",
    textAlign: "center",
    width:'100vw',
    objectFit:'cover',
    background: "#364d79",
  };
  return (
    <div className="relative mt-[60px]">
      <Carousel autoplay>
        <div style={contentStyle}>
          <img className="h-[92vh] object-cover w-[100vw]"  src={banner1} alt="" />
        </div>
        <div style={contentStyle}>
          <img className="h-[92vh] object-cover w-[100vw]"  src={banner2} alt="" />
        </div>
      </Carousel>
    </div>
  );
};
export default Hero;
