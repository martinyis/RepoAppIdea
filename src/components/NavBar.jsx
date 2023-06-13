import LogSigUp from "./ui/LogSigUp";
import logo from "./../assets/logos/repoapp-logo.png";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex justify-between pt-[24px] items-center">
      <Link to="/">
        <div className="w-1/2 md:w-[100%]">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <ul className="flex gap-x-[52px] text-white text-xl hidden md:flex">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/user-board">Developers</Link>
        </li>
      </ul>
      <LogSigUp />
      <ul
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 text-white flex flex-col gap-y-[75px] bg-slate-400 w-[100%] items-center h-screen ${
          nav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <li className="pt-[24px]">
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/user-board">Developers</Link>
        </li>
      </ul>
      {!nav ? (
        <HiBars3
          size={30}
          color="white"
          className="block md:hidden z-10 mr-4"
          onClick={toggleNav}
        />
      ) : (
        <IoIosClose
          size={40}
          color="white"
          className="block md:hidden z-10 mr-4"
          onClick={toggleNav}
        />
      )}
    </div>
  );
};

export default NavBar;
