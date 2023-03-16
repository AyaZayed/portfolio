import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/logo.svg";

function Navbar({ theme, toggleTheme }) {
  return (
    <div className="navbar">
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
    </div>
  );
}

export default Navbar;
