import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  const handleFirstButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col gap-y-4 gap-x-4 xs:flex-row items-center justify-center">
      <button
        className="w-[172px] h-[45px] sm:w-[258px] sm:h-[67px] font-normal text-[#27374D] text-sm sm:text-xl bg-[#DDE6ED] rounded-[35px]"
        onClick={handleFirstButtonClick}
      >
        Get Started
      </button>
      <a
        href="https://github.com/martinyis/RepoAppIdea"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[172px] h-[45px] sm:w-[258px] sm:h-[67px] font-normal text-[#DDE6ED] text-sm sm:text-xl rounded-[35px] border-2 border-[#DDE6ED]"
      >
        <button className="w-full h-full">Get Started</button>
      </a>
    </div>
  );
};

export default Buttons;
