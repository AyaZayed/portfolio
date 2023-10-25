<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

function Layout() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

=======
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
>>>>>>> cdd73bd9fa813e1ef9d34c1806d811996d69f187
  return (
    <div data-theme={theme} className='page'>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </div >
  );
}

export default Layout;
