import bigLogo from "./../assets/logos/repoapp-logo.png";
import smallLogo from "./../assets/logos/repo-app-small.png";
import { useState, useEffect } from "react";
import linkedIn from "./../assets/logos/linkedin-logo.png";
import github from "./../assets/logos/github-logo.png";
import google from "./../assets/logos/googl-logo.png";
import { Link } from "react-router-dom";
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
    <div className="mt-auto m-auto flex flex-col items-center justify-center mr-0 ml-0 mb-[64px]">
      <div className="pb-4">
        <img src={logoSrc} alt="" />
      </div>
      <ul class="flex flex-col xs:flex-row justify-center gap-y-5 items-center gap-x-10 text-base text-[#F5F5F5] pb-10">
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
        <a href="https://www.linkedin.com/in/martin-babak-116850244/">
          <img src={linkedIn} alt="" />
        </a>
        <a href="https://github.com/martinyis/RepoAppIdea">
          <img src={github} alt="" />
        </a>
        <a href="https://www.google.com/">
          <img src={google} alt="" />
        </a>
      </div>
      <span className="mb-10 w-[100%] border border-solid border-gray-300"></span>
      <p className="text-base text-[#F5F5F5]">Copyright github/martinyis</p>
    </div>
  );
};

export default Footer;
