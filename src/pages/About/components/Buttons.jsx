import React from "react";
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../../redux/slices/auth";
import { useSelector } from "react-redux";
const Buttons = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const handleFirstButtonClick = () => {
    if (isAuth) {
      navigate("/projects");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="flex flex-col gap-y-4 gap-x-4 xs:flex-row items-center justify-center">
      <button
        className="w-[172px] h-[45px] sm:w-[258px] sm:h-[67px] font-normal text-[#27374D] text-sm sm:text-xl bg-[#DDE6ED] rounded-[35px] hover:bg-[#526D82] hover:text-white transition-all duration-300 ease-in-out"
        onClick={handleFirstButtonClick}
      >
        Get Started
      </button>
      <a
        href="https://github.com/martinyis/RepoAppIdea"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[172px] h-[45px] sm:w-[258px] sm:h-[67px] font-normal text-[#DDE6ED] text-sm sm:text-xl rounded-[35px] border-2 border-[#DDE6ED] hover:bg-[#526D82] hover:border-[#526D82] hover:text-white transition-all duration-300 ease-in-out"
      >
        <button className="w-full h-full">Github Repo</button>
      </a>
    </div>
  );
};

export default Buttons;
