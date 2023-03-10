import logo from "../assets/shopsyLogo.png";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full h-[60px] shadow-md relative px-24">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" />
          <h2 className="ml-3 font-bold text-xl mb-0">Shopsy</h2>
        </div>
        <ul className="flex items-center justify-center mb-0">
          <Link to={"/about"} >
            <li className='mb-0 font-semibold text-lg mx-4'>About</li>
          </Link>
          <Link to={"/products"}>
            <li className='mb-0 font-semibold text-lg mx-4'>Products</li>
          </Link>
          <Link to={"/contact"}>
            <li className='mb-0 font-semibold text-lg mx-4'>Contact</li>
          </Link>
          <Link to={"/shop"}>
            <li className='mb-0 font-semibold text-lg mx-4'>Shop</li>
          </Link>
        </ul>
        <div className="flex items-center">
          <AiOutlineSearch className="text-2xl mr-4" />
          <BsCart4 className="text-2xl" />
        </div>
      </div>
    </div>
  );
};
export default Header;
