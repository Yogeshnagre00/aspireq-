import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLetsTalkClick = () => {
    // Redirect to "/contactUs" when the button is clicked
    if (location.pathname !== "/contactUs") {
      navigate("/contactUs");
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="./Images/Frame 27319.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          {/* Dropdown for SERVICES */}
          <li className="dropdown">
            <Link to="/">SERVICES</Link>
          </li>
          <li>
            <Link to="/BlogsCaseStudies">BLOGS & CASE STUDIES</Link>
          </li>
          {/* Dropdown for ABOUT US */}
          <li className="dropdown">
            <a href="#">ABOUT US</a>
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
            <Link to="/contactUs">CONTACT US</Link>
          </li>
        </ul>
        {/* Conditionally apply a class to the button based on the current path */}
        <a
          href="#"
          className={`btn ${location.pathname === "/" ? "" : "hidden"}`}
          onClick={handleLetsTalkClick}
        >
          Let&apos;s Talk &rarr;
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
