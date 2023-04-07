import logo from "../assets/shopsyLogo.png";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuComp from "./MenuComp";
import DropDown from "./DropDown";
import { userLogout } from "../redux/actions/userActions";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;
  const logoutHandler = () => {
    dispatch(userLogout());
  };
  const dispatch = useDispatch();


  const items = [
    {
      key: '1',
      label: (
        <Link to={'/profile'}>
          <p>Profile</p>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <p onClick={logoutHandler}>Logout</p>
      ),
    },
    userData?.isAdmin && {
      key: '3',
      label: (
        <Link to={'/admin/dashboard'}>
          <p>Dashboard</p>
        </Link>
      ),
    }
  ];
  return (
    <div className="w-full h-[60px] shadow-md md:px-24 sm:px-12 px-6 z-[18] bg-white fixed top-0">
      <div className="flex justify-between items-center h-full">
        <Link to={"/"}>
          <div className="flex items-center justify-center cursor-pointer">
            <BiMenuAltLeft
              className="md:hidden block text-3xl mr-4"
              onClick={() => setMenuOpen(true)}
            />
            <img src={logo} alt="" />
            <h2 className="ml-3 font-bold text-xl mb-0">Shopsy</h2>
          </div>
        </Link>
        <ul
          className={`flex md:items-center md:justify-center transition ease-linear duration-500 md:flex-row md:static absolute top-[0] md:py-0 py-20 bg-white ${menuOpen ? "left-0" : "sm:left-[-320px] left-[-280px]"
            } z-20 sm:w-[320px] w-[280px] md:h-[0] h-[100vh] flex-col mb-0`}
        >
          {menuOpen && (
            <AiOutlineClose
              className="md:hidden absolute top-3 right-3 text-3xl font-bold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          )}
          <Link to={"/about"}>
            <li className="mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12  font-semibold text-lg mx-4">
              About
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12  font-semibold text-lg mx-4">
              Products
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12  font-semibold text-lg mx-4">
              Contact
            </li>
          </Link>
          <Link to={"/shop"}>
            <li className="mb-0 md:my-0 my-7 md:mx-10 md:ml-0 ml-12 font-semibold text-lg mx-4">
              Shop
            </li>
          </Link>
        </ul>
        <div className="flex items-center">
          <AiOutlineSearch className="text-2xl " />
          <Link to={"/cart"}>
            <BsCart4 className="text-2xl mx-5 cursor-pointer" />
          </Link>
          {userData ? (
            <DropDown items={items} name={userData?.name} />
          ) : (
            <Link to={"/login"}>
              <button className="border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
