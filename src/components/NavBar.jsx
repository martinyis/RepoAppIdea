import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth";
import LogSigUp from "./ui/LogSigUp";
import logo from "./../assets/logos/repoapp-logo.png";
import smallLogo from "./../assets/logos/repo-app-small.png";
import { Squash as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setNavOpen(!navOpen);
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

  useEffect(() => {
    const body = document.querySelector("body");
    if (navOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [navOpen]);

  return (
    <div className="mx-auto flex justify-between pt-[24px] items-center mr-0 ml-0">
      <Link to="/">
        <div className="">
          <img src={logoSrc} alt="Logo" className="" />
        </div>
      </Link>

      <ul className="ml-[100px] gap-x-[52px] text-white text-xl hidden md:flex">
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
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 text-white flex flex-col text-[25px] gap-y-[75px] bg-[#526D82] w-[100%] items-center h-screen z-10 ${
          navOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <li className="pt-[100px]">
          <Link to="/" onClick={() => setNavOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setNavOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/user-board" onClick={() => setNavOpen(false)}>
            Developers
          </Link>
        </li>
      </ul>
      {/* {!navOpen ? (
        <HiBars3
          size={30}
          color="white"
          className="block md:hidden z-10 mr-4"
          onClick={toggleNav}
        />
      ) : (
        <IoIosClose
          size={50}
          color="white"
          className="block md:hidden z-10 mr-4"
          onClick={toggleNav}
        />
      )} */}
      {
        <div className="block md:hidden z-10 mr-4">
          <Hamburger toggled={navOpen} toggle={toggleNav} duration={0.3} easing="ease-in"/>
        </div>
      }
    </div>
  );
};

export default NavBar;
