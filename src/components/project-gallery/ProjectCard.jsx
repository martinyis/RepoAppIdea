import { Link } from "react-router-dom";
import devlook from "./../../assets/icons/dev-look.png";
import { useMediaQuery } from "react-responsive";
import "./ProjectCard.css"; // Import the CSS file
import { useState } from "react";
import EditDelete from "./EditDelete";
import LikeCount from "./LikeCount";
const ProjectCard = (props) => {
  const { data } = props;
  const isMobile = useMediaQuery({ maxWidth: "365px" });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className=" bg-blue-200 bg-opacity-30 rounded-28 rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`px-6 ${isMobile ? "flex flex-col" : "flex justify-between"
          } pt-[18px] items-center pb-[5px]`}
      >
        <a href={data.githubLink}>
          <h3 className="text-2xl text-white font-bold hover:text-[#27374D]">
            {data.name}
          </h3>
        </a>
        <div className="flex gap-x-2 items-center justify-center">
          {isHovered && (
            <div className="edit-delete-container">
              <EditDelete user={data.author} project={data._id} />
            </div>
          )}
          <LikeCount data={data} />
        </div>
      </div>
      <p className="px-6 text-[#DDE6ED] text-xs pb-[6px]">
        Created By:{" "}
        <span className="font-bold text-white hover:text-[#27374D]">
          <Link to={`/account/${data.author}`}>{data.authorUserName}</Link>
        </span>
      </p>
      <p className="px-6 text-[#F5F5F5] font-base max-w-[450px] pb-[16px]">
        {data.description}
      </p>
      <div className="px-6 flex items-center pb-[78px]">
        <img src={devlook} alt="" />
        <div className="pl-5 flex gap-x-4 gap-y-2 flex-wrap">
          {data.developers.map((el) => {
            return (
              <div className="sm:w-[137px] w-[90px] h-[31px] px-5 text-white sm:text-[12px] text-[11px]  rounded-[18px] bg-[#27374D] flex justify-center items-center">
                {el}
              </div>
            );
          })}
        </div>
      </div>
      <div id="techStack" className="h-14 bg-gray-100 rounded-t-lg rounded-b-3xl overflow-hidden">
        <div className="scrollable-container overflow-x-auto py-2">
          <div className="scrollable-content whitespace-nowrap flex space-x-4">
            {data.techStack.map((el) => (
              <div className="tech-item bg-blue-500 text-white px-4 py-2 rounded-full text-xl">{el}</div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
