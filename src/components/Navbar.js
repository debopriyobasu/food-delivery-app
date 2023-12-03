import { useState } from "react";
import { LOGO_PATH } from "../utils/constants";
import { Link } from "react-router-dom";
const Navbar = function () {
  const [btnName, setBtnName] = useState("Login");
  return (
    <header className="header bg-white shadow-md">
      <nav className="nav">
        <Link to="/">
          <img className="brandLogo" src={LOGO_PATH} alt="logo" />
        </Link>

        <ul className="nav_items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded min-w-[100px]"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
