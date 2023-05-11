import Slider from "react-slick";
import banner1 from "../../assets/bannerwatch.png";
import banner2 from "../../assets/bannerlaptop.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const data = [
    {
      img: banner1,
      title: 'Deal of the day',
      description: 'Great deals.Every day'
    },
    {
      img: banner2,
      title: 'Great deal at low price',
      description: 'Buy this laptop at the lowest price'
    },
  ]
  return (
    <div className="relative overflow-x-hidden mt-[60px] h-[92vh]">
      <Slider {...settings}>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <div className="flex items-center h-[86vh] justify-around leading-8">
                <div>
                  <h2 className="font-bold text-5xl">{item.title}</h2>
                  <p className="font-medium text-2xl my-2">{item.description}</p>
                  <button className="bg-orange-600 text-white px-4 py-2">BUY NOW</button>
                </div>
                <img className="max-w-[650px]" src={item.img} alt="" />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
};
export default Hero;
