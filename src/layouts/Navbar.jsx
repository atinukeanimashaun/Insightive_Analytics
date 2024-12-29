import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart, BsList, BsX } from "react-icons/bs";
import { AuthContext } from "../contexts/AuthProvider";
import { links } from "../constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { currentUser } = useContext(AuthContext); // Access user and logout function

  const toggleMenu = () => {
    setNav(!nav);
  };

  const avatarUrl = currentUser?.photoURL || "https://via.placeholder.com/150";

  return (
    <header className="fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out text-brown1 cursor-pointer z-[1000]">
      <div className="flex justify-between items-center px-5 xl:px-16 2xl:px-32 py-2 bg-primary shadow-lg transition-all duration-300 ease-in-out backdrop-blur-sm">
        {/* Logo */}
        <Link
          to="/"
          className="uppercase text-secondary md:text-[16px] xl:text-xl font-thin cursor-pointer flex flex-col"
        >
          insightive analytics
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden fixed top-[3rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto">
          <div className="relative w-full z-2 flex items-center justify-center m-auto lg:flex-row">
            {links.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`relative block capitalize text-black text-[16px] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 xl:px-6 py-4 lg:py-8 lg:mr-0.25 lg:text-[16px] text-black lg:font-semibold flex items-center gap-1`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* User Actions */}
        <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-5">
          <BsCart className="w-6 h-6 text-secondary" />

          {currentUser ? (
            <Link to="/update-Profile">
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
              />
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-secondary rounded-lg text-[16px] px-[20px] py-2 text-secondary cursor-pointer hover:bg-secondary hover:text-primary hover:-translate-y-2 duration-300 transition-all hidden lg:block"
              >
                Login
              </Link>
              <Link
                to="/signin"
                className="bg-secondary text-primary text-[16px] px-[20px] py-2 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-lg hidden lg:block"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="ml-2 lg:hidden flex gap-4" onClick={toggleMenu}>
          <BsCart className="w-6 h-6 text-secondary" />
          {nav ? (
            <BsX className="text-3xl p-1 rounded-full" />
          ) : (
            <BsList className="text-3xl p-1 text-secondary bg-nude rounded-full" />
          )}
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${nav ? "fixed" : "hidden"
            } top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-start`}
        >
          <div className="flex items-center justify-between w-full p-5">
            <Link
              to="/"
              className="uppercase text-secondary text-xl font-thin cursor-pointer flex flex-col"
            >
              insightive analytics
            </Link>
            <div onClick={toggleMenu}>
              <BsX className="text-3xl text-secondary" />
            </div>
          </div>

          <div className="flex flex-col items-start bg-brown w-full h-screen">
            {links.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="relative capitalize font-primary text-lg hover:underline pl-8 py-4"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center justify-center gap-3 pl-8 py-4">
              {currentUser ? (
                <Link to="/update-Profile">
                  <img
                    src={avatarUrl}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
                  />
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="border border-secondary rounded-lg text-[16px] px-[20px] py-2 text-secondary cursor-pointer hover:bg-secondary hover:text-primary hover:-translate-y-2 duration-300 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signin"
                    className="bg-secondary text-primary text-[16px] px-[20px] py-2 cursor-pointer hover:border hover:border-secondary hover:text-secondary hover:bg-transparent hover:-translate-y-2 duration-300 transition-all rounded-lg"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
