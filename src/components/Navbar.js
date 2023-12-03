import { useState } from "react";
import { LOGO_PATH } from "../utils/constants";
const Navbar = function () {
  const [btnName, setBtnName] = useState("Login");
  return (
    <header className="header bg-white shadow-md">
      <nav className="nav">
        <img className="brandLogo" src={LOGO_PATH} alt="logo" />
        <ul className="nav_items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
