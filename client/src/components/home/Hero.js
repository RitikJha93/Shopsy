import { Button, Carousel } from "antd";
import banner1 from "../../assets/bannerimg1.jpg";
import banner2 from "../../assets/bannerimg2.jpg";
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
    <div className="relative">
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
