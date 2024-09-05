import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isNestedSubMenuOpen, setIsNestedSubMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleCloseMenu = () => {
    setIsNavOpen(false);
    setIsSubMenuOpen(false);
    setIsNestedSubMenuOpen(false);
  };

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
    setIsNestedSubMenuOpen(false);
  };

  const handleToggleNestedMenu = () => {
    setIsNestedSubMenuOpen((prev) => !prev);
  };

  const handleMouseEnterSubMenu = () => {
    if (!isMobile) {
      setIsSubMenuOpen(true);
    }
  };

  const handleMouseLeaveSubMenu = () => {
    if (!isMobile) {
      setIsSubMenuOpen(false);
      setIsNestedSubMenuOpen(false);
    }
  };

  const handleMouseEnterNestedMenu = () => {
    if (!isMobile) {
      setIsNestedSubMenuOpen(true);
    }
  };

  const handleMouseLeaveNestedMenu = () => {
    if (!isMobile) {
      setIsNestedSubMenuOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-between border-b shadow-xl px-8 py-4 bg-white">
      <h2 className="text-xl font-semibold">Assign Task</h2>
      <nav className="flex-1 flex justify-end lg:justify-center">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>

          <div className={`absolute top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="CROSS-ICON absolute top-0 right-0 px-8 py-4" onClick={handleCloseMenu}>
              <div className="HAMBURGER-ICON flex flex-col justify-center items-center cursor-pointer">
                <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-1 w-8 bg-gray-600 transition-all duration-300 transform mb-1 ${isNavOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN font-semibold flex flex-col items-center justify-center min-h-[250px] mt-10">
              <li className={`my-8 uppercase transition-all duration-300 ${isActive('/') ? 'border-b border-green-400 text-green-500' : 'hover:underline'}`} onClick={handleCloseMenu}>
                <Link to="/">Home</Link>
              </li>
              <li className={`my-8 uppercase transition-all duration-300 ${isActive('/about') ? 'border-b border-green-400 text-green-500' : 'hover:underline'}`} onClick={handleCloseMenu}>
                <Link to="/about">About</Link>
              </li>

              <li className="my-8 uppercase transition-all duration-300 relative cursor-pointer">
                <div
                  className="flex items-center hover:text-green-500"
                  onClick={handleToggleSubMenu}
                  onMouseEnter={handleMouseEnterSubMenu}
                  onMouseLeave={handleMouseLeaveSubMenu}
                >
                  Services
                  <span
                    className={`inline-flex transform transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                    style={{ marginLeft: '8px', width: '16px', transformOrigin: 'center' }}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </div>
                {isSubMenuOpen && (
                  <ul className="absolute w-48 top-full left-0 bg-white shadow-lg rounded-lg p-2 transition-transform duration-300 transform scale-95 origin-top">
                    <li className="p-2 hover:bg-gray-100 rounded" onClick={handleCloseMenu}>
                      <Link to="/service1">Service 1</Link>
                    </li>
                    <li
                      className="p-2 hover:bg-gray-100 relative rounded"
                      onClick={handleToggleNestedMenu}
                      onMouseEnter={handleMouseEnterNestedMenu}
                      onMouseLeave={handleMouseLeaveNestedMenu}
                    >
                      <div className="flex items-center justify-between hover:text-green-500 cursor-pointer">
                        Service 2
                        <span
                          className={`inline-flex transform transition-transform duration-300 ${isNestedSubMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                          style={{ marginLeft: '8px', width: '16px', transformOrigin: 'center' }}
                        >
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                      </div>
                      {isNestedSubMenuOpen && (
                        <ul className="absolute w-48 left-full top-0 mb-10 ml-2 bg-white shadow-lg rounded-lg p-2 transition-transform duration-300 transform scale-95 origin-left">
                          <li className="p-2 hover:bg-gray-100 rounded">
                            <Link to="/service2-1">Service 2-1</Link>
                          </li>
                          <li className="p-2 hover:bg-gray-100 rounded">
                            <Link to="/service2-2">Service 2-2</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="p-2 hover:bg-gray-100 rounded" onClick={handleCloseMenu}>
                      <Link to="/service3">Service 3</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`my-8 uppercase transition-all duration-300 ${isActive('/contact') ? 'border-b border-green-400 text-green-500' : 'hover:underline'}`} onClick={handleCloseMenu}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden font-semibold gap-x-8 lg:flex justify-center items-center">
          <li className={`transition-all duration-300 ${isActive('/') ? 'underline text-green-500' : 'hover:underline'}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`transition-all duration-300 ${isActive('/about') ? 'underline text-green-500' : 'hover:underline'}`}>
            <Link to="/about">About</Link>
          </li>

          <div
            className="relative transition-all duration-300"
            onMouseEnter={handleMouseEnterSubMenu}
            onMouseLeave={handleMouseLeaveSubMenu}
          >
            <div className="cursor-pointer flex items-center hover:text-green-500">
              Services
              <span
                className={`inline-flex transform transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                style={{ marginLeft: '8px', width: '16px', transformOrigin: 'center' }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
            {isSubMenuOpen && (
              <ul
                className="absolute w-48 top-full left-0 bg-white shadow-lg rounded-lg p-2 transition-transform duration-300 transform scale-95 origin-top"
              >
                <li className="p-2 hover:bg-gray-100 rounded">
                  <Link to="/service1">Service 1</Link>
                </li>
                <li
                  className="p-2 hover:bg-gray-100 relative rounded"
                  onMouseEnter={handleMouseEnterNestedMenu}
                  onMouseLeave={handleMouseLeaveNestedMenu}
                >
                  <div className="flex items-center justify-between cursor-pointer hover:text-green-500">
                    Service 2
                    <span
                      className={`inline-flex transform transition-transform duration-300 ${isNestedSubMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      style={{ marginLeft: '8px', width: '16px', transformOrigin: 'center' }}
                    >
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </div>
                  {isNestedSubMenuOpen && (
                    <ul
                      className="absolute w-48 left-full top-0 mt-0 ml-2 bg-white shadow-lg rounded-lg p-2 transition-transform duration-300 transform scale-95 origin-left"
                    >
                      <li className="p-2 hover:bg-gray-100 rounded">
                        <Link to="/service2-1">Service 2-1</Link>
                      </li>
                      <li className="p-2 hover:bg-gray-100 rounded">
                        <Link to="/service2-2">Service 2-2</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="p-2 hover:bg-gray-100 rounded">
                  <Link to="/service3">Service 3</Link>
                </li>
              </ul>
            )}
          </div>
          <li className={`transition-all duration-300 ${isActive('/contact') ? 'underline text-green-500' : 'hover:underline'}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
