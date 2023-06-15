import { Link } from "react-router-dom";
import ProjectCard from "../../components/project-gallery/ProjectCard";

const Main = () => {
  return (
    <div className="mt-[83px] max-w-[1440px] mb-[233px] px-8">
      <h2 className="text-center text-[#DDE6ED] font-bold text-[40px] mx-auto mb-[139px]">
        User Profile
      </h2>
      <div className="user-account flex lg:flex-row flex-col justify-between gap-x-[40px]">
        <div className=" mb-[150px]">
          <div className="mb-[26px]">
            <img
              className="rounded-[150px]"
              src="https://avatars.githubusercontent.com/u/97173732?v=4"
              alt=""
            />
          </div>
          <div className="flex gap-x-4 items-center mb-[7px]">
            <h3 className="sm:text-[32px] text-[18px] font-bold">
              Martin Babak
            </h3>
            <Link>
              <p className="text-xl text-white text-opacity-60">martinyis</p>
            </Link>
          </div>
          <div className="flex items-center justify-center sm:w-[280px] w-[180px] sm:h-[37px] h-[27px] rounded-[93px] bg-[#F5D9B4] mb-[15px]">
            <p className="text-xs sm:text-lg text-[#27374D] font-normal">
              Full-Stack Developer
            </p>
          </div>
          <p className="text-xl font-normal text-[#DDE6ED] max-w-[357px] mb-[72px]">
            React front-end developer studying at University of New Hampshire
            Expanding knowledge in back-end technologies, aiming for proficiency
            in MERN stack Experienced in creating websites and developing
            complex web applications Interested in networking and collaboration
            Check out my repositories for examples of my work.
          </p>
          <div className="mb-[40px]">
            <h3 className="text-[32px] font-bold mb-[17px]">Tech Stack</h3>
            <div className="grid grid-cols-2  gap-x-[7px] gap-y-[15px]">
              <div className="flex items-center justify-center bg-black rounded-[24px] h-[37px]">
                <p className="text-base">Javascript</p>
              </div>
              <div className="flex items-center justify-center bg-black rounded-[24px] h-[37px]">
                <p className="text-base">Javascript</p>
              </div>
              <div className="flex items-center justify-center bg-black rounded-[24px] h-[37px]">
                <p className="text-base">Javascript</p>
              </div>
              <div className="flex items-center justify-center bg-black rounded-[24px] h-[37px]">
                <p className="text-base">Javascript</p>
              </div>
              <div className="flex items-center justify-center bg-black rounded-[24px] h-[37px]">
                <p className="text-base">Javascript</p>
              </div>
              <div className="flex items-center justify-center bg-black rounded-[24px] h-[37px]">
                <p className="text-base">Javascript</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-[38px] rounded-[29px] bg-[#526D82] cursor-pointer">
            <p className="text-[20px] font-regular text-[#EEEEEE]">
              Edit profile
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[58px] lg:mr-[120px] mr-0">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
