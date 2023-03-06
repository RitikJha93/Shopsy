import "../styles/Header.css";
import logo from "../assets/shopsyLogo.png";
import {BsCart4} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
const Header = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Shopsy</h2>
        </div>
        <ul>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
        <div className="cartIconsSection">
            <AiOutlineSearch className="cartIcons"/>
            <BsCart4 className="cartIcons"/>
        </div>
      </div>
    </div>
  );
};
export default Header;
