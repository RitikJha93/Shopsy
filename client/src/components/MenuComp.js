import { Menu } from "antd";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions/userActions";
const MenuComp = ({ name }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userLogout());
  };
  return (
    <div className="relative">
      <div
        className={`flex items-center ${
          openMenu && "bg-slate-300"
        } cursor-pointer border hover:bg-slate-300 px-2 py-1 transition-all rounded-lg`}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <p>{name}</p>
        <IoIosArrowDown className={`ml-2 transition-all ${openMenu && 'rotate-180'}`} />
      </div>
      {openMenu && (
        <div
          className={`absolute transition duration-1000 bg-slate-50 rounded-lg w-full px-2 py-2 ${
            openMenu ? "top-[40px]" : "top-[-40px]"
          }`}
        >
          <div className="px-2 py-1 hover:bg-slate-300 rounded-lg">
            <Link to={"/profile"}>
              <p className="text-lg">Profile</p>
            </Link>
          </div>
          <div className="px-2 py-1 hover:bg-slate-300 rounded-lg cursor-pointer">
            <p className="text-lg" onClick={logoutHandler}>
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MenuComp;
