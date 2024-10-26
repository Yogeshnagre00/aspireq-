import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import "./header.css";

const Navbar = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleLetsTalkClick = () => {
    if (location.pathname !== "/contactUs") {
      navigate("/contactUs");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="./Images/Frame 27319.png" alt="Logo" />
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/blogscasestudies">BLOGS & CASE STUDIES</Link>
          </li>
          <li >
          <Link to="/">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contactUs">CONTACT US</Link>
          </li>
        </ul>
        <a
          href="#"
          className={`btn ${location.pathname === "/contactUs" ? "hidden" : ""}`}
          onClick={handleLetsTalkClick}
        >
          Let&apos;s Connect
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
