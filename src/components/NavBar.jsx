import LogSigUp from "./ui/LogSigUp";
import logo from "./../assets/logos/repoapp-logo.png";
import smallLogo from "./../assets/logos/repo-app-small.png";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoSrc = windowWidth < 768 ? smallLogo : logo;

  return (
    <div className="mx-auto flex justify-between pt-[24px] items-center mr-0 ml-4">
      <Link to="/">
        <div className="">
          <img src={logoSrc} alt="Logo" className="" />
        </div>
      </Link>
      <ul className="flex gap-x-[52px] ml-14 text-white text-xl hidden md:flex">
        <li className="hover:text-[#596c81]">
          <Link to="/">About</Link>
        </li>
        <li className="hover:text-[#596c81]">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-[#596c81]">
          <Link to="/user-board">Developers</Link>
        </li>
      </ul>

      <LogSigUp isAuth={isAuth} />
      <ul
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 text-white flex flex-col text-[25px] gap-y-[75px] bg-[#526D82] w-[100%] items-center h-screen ${
          nav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <li className="pt-[100px]">
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
