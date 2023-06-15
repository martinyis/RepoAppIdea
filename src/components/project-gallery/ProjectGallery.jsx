import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectGallery = () => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="flex-col items-center pb-[265px] pt-[119px]">
      <h2 className="text-center text-[#DDE6ED] font-bold text-[40px] mx-auto mb-[31px]">
        Project Gallery
      </h2>
      <div className="flex justify-end">
        {isAuth ? (
          <Link to="/create-project">
            <button className="font-thin text-2xl leading-7 text-white border border-solid border-blue-200 rounded-[35px] w-64 h-16 mb-[29px] hover:bg-blue-200 hover:text-blue-500 hover:border-blue-500 transition-colors duration-300">
              Add Project
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 gap-y-[56px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectGallery;
