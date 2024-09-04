import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleCloseMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="flex items-center justify-between border-b shadow-xl px-8 py-4">
      <h2 className="text-xl font-semibold">Assign Task</h2>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON flex flex-col justify-center items-center cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>

          <div className={`absolute top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="CROSS-ICON absolute top-0 right-0 px-8 py-4" onClick={() => setIsNavOpen(false)}>
              <div className="HAMBURGER-ICON flex flex-col justify-center items-center cursor-pointer">
                <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN font-semibold flex flex-col items-center justify-between min-h-[250px] mt-10">
              <li className={`my-8 uppercase transition-all duration-300 ${isActive('/') ? 'border-b border-green-400 text-green-500' : 'hover:underline'}`}
               onClick={handleCloseMenu} >
                <Link to="/">Home</Link>
              </li>
              <li className={`my-8 uppercase transition-all duration-300 ${isActive('/about') ? 'border-b border-green-400 text-green-500' : 'hover:underline'}`}
               onClick={handleCloseMenu}>
                <Link to="/about">About</Link>
              </li>
              <li className={`my-8 uppercase transition-all duration-300 ${isActive('/portfolio') ? 'border-b border-green-400 text-green-500' : 'hover:underline'}`}
               onClick={handleCloseMenu}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className={`my-8 uppercase transition-all duration-300 ${isActive('/contact') ? 'border-b border-green-400 text-green-500' : 'hover:underline'}`}
               onClick={handleCloseMenu}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden font-semibold space-x-8 lg:flex">
          <li className={`transition-all duration-300 ${isActive('/') ? 'underline text-green-500' : 'hover:underline'}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`transition-all duration-300 ${isActive('/about') ? 'underline text-green-500' : 'hover:underline'}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`transition-all duration-300 ${isActive('/portfolio') ? 'underline text-green-500' : 'hover:underline'}`}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={`transition-all duration-300 ${isActive('/contact') ? 'underline text-green-500' : 'hover:underline'}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
