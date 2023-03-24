import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/logo.svg";

function Navbar({ theme, toggleTheme }) {
  return (
    <>
      <a href="#navbar" id="menu-toggle" class="menu-toggle" aria-label="Open  menu">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <nav className="navbar" id="navbar" aria-label="navbar menu">
        <a href="#menu-toggle" id="menu-close" class="menu-close" aria-label="Close  menu">
          <FontAwesomeIcon icon={faX} />
        </a>
        <Link to='/' className="nav-title">
          <img src={Logo} />
        </Link>
        <ul>
          <NavLink to='/projects' exact='true' activeclassname="active">
            Projects
          </NavLink>
          <NavLink to='/about' exact='true' activeclassname="active" >
            About
          </NavLink>
          <button className="theme-button" onClick={toggleTheme}>
            {theme === "dark" ? <FontAwesomeIcon className="theme-icon" icon={faSun} />
              : <FontAwesomeIcon icon={faMoon} className="theme-icon" />}
          </button>
        </ul>
        <a href="#main-menu-toggle" class="backdrop" tabindex="-1" hidden></a>
      </nav>
    </>
  );
}

export default Navbar;
