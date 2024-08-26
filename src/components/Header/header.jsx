import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="./Images/Frame 27319.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">HOME</a>
          </li>
          {/* Dropdown for SERVICES */}
          <li className="dropdown">
            <a href="#">SERVICES</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Service 1</a>
              </li>
              <li>
                <a href="#">Service 2</a>
              </li>
              <li>
                <a href="#">Service 3</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/BlogsCaseStudies">BLOGS & CASE STUDIES</Link>
          </li>
          {/* Dropdown for ABOUT US */}
          <li className="dropdown">
            <a href="#">ABOUT Us</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contactUs">CONTACT Us</Link>
          </li>
        </ul>
        {/* Conditionally render the button text and functionality based on the current path */}
        {location.pathname === "/" ? (
          <a
            href="#"
            className="btn"
            onClick={() => alert("Click of Let's Talk")}
          >
            Let&apos;s Talk &rarr;
          </a>
        ) : (
          <Link to="/" className="btn">
            Home Page
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
