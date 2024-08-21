import { Link } from "react-router-dom";
import "./header.css";

const handleRedirect = () => {
  alert("click of let's Talk");
};
const Navbar = () => {
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
            {/* <a href="#">BLOGS & CASE STUDIES</a> */}
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
        <a href="#" className="btn" onClick={handleRedirect}>
          Let&apos;s Talk &rarr;
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
