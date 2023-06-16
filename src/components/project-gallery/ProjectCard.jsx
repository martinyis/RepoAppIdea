import { Link } from "react-router-dom";
import star from "./../../assets/icons/star.png";
import fillStar from "./../../assets/icons/fill-star.png";
import devlook from "./../../assets/icons/dev-look.png";
import { Scrollbars } from "react-custom-scrollbars";
import { useMediaQuery } from "react-responsive";
import "./ProjectCard.css"; // Import the CSS file
import { useState } from "react";

const ProjectCard = (props) => {
  const { data } = props;
  const isMobile = useMediaQuery({ maxWidth: "365px" });
  const [stared, setStared] = useState(false);
  const newStar = stared ? fillStar : star;
  const handleStar = () => {
    setStared(!stared);
  };
  return (
    <div className="bg-blue-200 bg-opacity-30 rounded-28 rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <div
        className={`px-6 ${
          isMobile ? "flex flex-col" : "flex justify-between"
        } pt-[18px] items-center pb-[5px]`}
      >
        <h3 className="text-2xl text-white font-bold">{data.name}</h3>
        <div className="flex gap-x-2 items-center justify-center">
          <img
            onClick={handleStar}
            className="mt-[-3px] cursor-pointer"
            src={newStar}
            alt=""
          />
          <p className="text-[#DDE6ED] text-2xl">{data.usersLiked.length}</p>
        </div>
      </div>
      <p className="px-6 text-[#DDE6ED] text-xs pb-[6px]">
        Created By:{" "}
        <span className="font-bold text-white">
          <Link to={`/account/${data.author}`}>{data.authorUserName}</Link>
        </span>
      </p>
      <p className="px-6 text-[#F5F5F5] font-base max-w-[450px] pb-[16px]">
        {data.description}
      </p>
      <div className="px-6 flex items-center pb-[25px]">
        <img src={devlook} alt="" />
        <div className="pl-5 flex gap-x-4 gap-y-2 flex-wrap">
          {data.developers.map((el) => {
            return (
              <div className="w-[98px] h-[31px] text-white text-base rounded-[18px] bg-[#27374D] flex justify-center items-center">
                {el}
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[53px] bg-[#DDE6ED] rounded-t-lg rounded-b-[30px] flex items-center justify-center">
        <div className="scrollbar flex gap-x-4 max-w-[634px] overflow-x-auto">
          {data.techStack.map((el) => {
            return (
              <div className="w-[100px] h-[19px] rounded-[30px] bg-[#1D267D] flex items-center justify-center text-[10px] ">
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
