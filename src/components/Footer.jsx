import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bigLogo from "./../assets/logos/repoapp-logo.png";
import smallLogo from "./../assets/logos/repo-app-small.png";
import linkedIn from "./../assets/logos/linkedin-logo.png";
import github from "./../assets/logos/github-logo.png";
import google from "./../assets/logos/googl-logo.png";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const logoSrc = windowWidth < 768 ? smallLogo : bigLogo;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-[64px] absolute bottom-0 w-[100%] left-1/2 transform -translate-x-1/2">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <div className="pb-4">
          <img src={logoSrc} alt="" />
        </div>
      </Link>
      <ul className="flex flex-col xs:flex-row justify-center gap-y-5 items-center gap-x-10 text-base text-[#F5F5F5] pb-10">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/user-board">Developers</a>
        </li>
      </ul>
      <div className="flex gap-x-4 pb-10">
        <a
          href="https://www.linkedin.com/in/martin-babak-116850244/"
          style={{ transition: "transform 0.3s" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={linkedIn} alt="" />
        </a>
        <a
          href="https://github.com/martinyis/RepoAppIdea"
          style={{ transition: "transform 0.3s" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={github} alt="" />
        </a>
        <a
          href="https://www.google.com/"
          style={{ transition: "transform 0.3s" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={google} alt="" />
        </a>
      </div>
      <span className="mb-10 w-[100%] border border-solid border-gray-300"></span>
      <p className="text-base text-[#F5F5F5]">Copyright github/martinyis</p>
    </div>
  );
};

export default Footer;
