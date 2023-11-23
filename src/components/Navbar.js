import LOGO from "../../images/logo.webp";
// import LOGO_PATH from "../utils/constants";
const Navbar = function() {
    return (
      <header className='header'>
        <nav className='nav'>
          <img className='brandLogo' src={LOGO} alt='logo'/>
          <ul className='nav_items'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Navbar;