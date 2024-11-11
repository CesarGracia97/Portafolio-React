import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageRoundedDots, BiShoppingBag } from "react-icons/bi";
import { BsArrowDownCircle, BsGlobeAmericas } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#experiences">
        <BiShoppingBag className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a> 
      <a href="#language">
        <BsGlobeAmericas className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
