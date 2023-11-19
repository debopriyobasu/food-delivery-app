import logo from '../../images/food-delivery-logo.webp'
const Navbar = function() {
    return (
      <header className='header'>
        <nav className='nav'>
          <img className='brandLogo' src={logo} alt='logo'/>
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