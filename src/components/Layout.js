import useLocalStorage from "use-local-storage";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


function Layout() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  return (
    <div data-theme={theme} className='page'>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </div >
  );
}

export default Layout;
