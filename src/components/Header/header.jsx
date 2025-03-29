import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

  // Helper function to determine if a link is active
  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/Images/logo.png" alt="Logo" />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className={isActive("/")}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/services" className={isActive("/services")}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/blogscasestudies"
              className={isActive("/blogscasestudies")}
            >
              BLOGS & CASE STUDIES
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={isActive("/aboutus")}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className={isActive("/contactUs")}>
              CONTACT US
            </Link>
          </li>
        </ul>
        <a
          href="#"
          className={`btn ${
            location.pathname === "/contactUs" ? "hidden" : ""
          }`}
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
