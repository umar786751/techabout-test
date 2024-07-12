import { Container } from ".";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Container>
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl cursor-pointer font-semibold">
            WP ARENA
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex lg:flex-grow ml-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-500">
                WP Arena
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                WordPress
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Login
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div ref={menuRef} className="lg:hidden relative group">
          <button onClick={() => setOpenMenu((flag) => !flag)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {openMenu && (
            <div
              className="absolute border shadow w-[200px] right-0 bg-white p-4"
              id="mobile-menu"
            >
              <a
                href="#"
                className="hover:bg-neutral-100 block w-full py-1.5 px-3"
              >
                WP Arena
              </a>

              <a
                href="#"
                className="hover:bg-neutral-100 block w-full py-1.5 px-3"
              >
                Tutorials
              </a>

              <a
                href="#"
                className="hover:bg-neutral-100 block w-full py-1.5 px-3"
              >
                Resources
              </a>

              <a
                href="#"
                className="hover:bg-neutral-100 block w-full py-1.5 px-3"
              >
                WordPress
              </a>

              <a
                href="#"
                className="hover:bg-neutral-100 block w-full py-1.5 px-3"
              >
                Deals
              </a>

              <a
                href="#"
                className="hover:bg-neutral-100 block w-full py-1.5 px-3"
              >
                Login
              </a>

              <div className="flex flex-col space-y-4 mt-4">
                <div className="p-2 flex items-center gap-2">
                  <p>Search</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M325.8 0C223 0 139.6 83.4 139.6 186.2c0 33.5 9 64.8 24.4 92L0 442.2l23.3 46.5L69.8 512l164-164c27.1 15.5 58.5 24.4 92 24.4C428.6 372.4 512 289 512 186.2S428.6 0 325.8 0m0 314.2c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128"
                    />
                  </svg>
                </div>
                <button className="bg-white border-2 border-black px-4 pt-1 pb-1.5 rounded-[3px] font-semibold hover:bg-blue-100">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search and Get Started button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="p-2 flex items-center gap-2">
            <p>Search</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.8 0C223 0 139.6 83.4 139.6 186.2c0 33.5 9 64.8 24.4 92L0 442.2l23.3 46.5L69.8 512l164-164c27.1 15.5 58.5 24.4 92 24.4C428.6 372.4 512 289 512 186.2S428.6 0 325.8 0m0 314.2c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128"
              />
            </svg>
          </div>
          <button className="bg-white border-2 border-black px-4 pt-1 pb-1.5 rounded-[3px] font-semibold hover:bg-blue-100">
            Get Started
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
