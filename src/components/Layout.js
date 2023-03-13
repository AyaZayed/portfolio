// import Navbar from "./Navbar";
import useLocalStorage from "use-local-storage";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";


function Layout() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  return (
    <div data-theme={theme} className='page'>
      <button className="theme-button" onClick={toggleTheme}>
        {theme === "dark" ? <FontAwesomeIcon className="theme-icon" icon={faSun} />
          : <FontAwesomeIcon icon={faMoon} className="theme-icon" />}
      </button>
      <Outlet />
    </div >
  );
}

export default Layout;
