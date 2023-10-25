import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/logo.svg";

import { useState } from 'react'

function Navbar({ theme, toggleTheme }) {
  const [text] = useState('ayazayedofficial@gmail.com');

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    const copyButton = document.getElementById('copy-button');
    copyButton.classList.add('copied');
  }

  return (
    <>
      <a href="#navbar" id="menu-toggle" className="menu-toggle" aria-label="Open  menu">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <nav className="navbar" id="navbar" aria-label="navbar menu">
        <div className="nav-items">
          <a href="#menu-toggle" id="menu-close" className="menu-close" aria-label="Close  menu">
            <FontAwesomeIcon icon={faX} />
          </a>
          <Link to='/' className="nav-title">
            <img src={Logo} alt='AZ letters' />
          </Link>
          <ul>
            <li><button id="copy-button" onClick={copy}></button></li>
            <li><NavLink to='/projects' exact='true'>
              Projects
            </NavLink></li>
            <li><NavLink to='/about' exact='true' >
              About
            </NavLink></li>
            <li><button className="theme-button" onClick={toggleTheme} aria-label='change theme to dark or light mode'>
              {theme === "dark" ? <FontAwesomeIcon className="theme-icon" icon={faSun} />
                : <FontAwesomeIcon icon={faMoon} className="theme-icon" />}
            </button></li>
          </ul>
        </div>
        <a href="#main-menu-toggle" className="backdrop" tabIndex="-1" hidden></a>
      </nav>
    </>
  );
}

export default Navbar;
