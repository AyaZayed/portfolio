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

  return (
    <div data-theme={theme} className='page'>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </div >
  );
}

export default Layout;
