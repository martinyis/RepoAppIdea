import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { useEffect } from "react";
import axios from "./../../axios.js";
import Spinner from "../ui/Spinner";

// ...import statements

const ProjectGallery = () => {
  const isAuth = useSelector(selectIsAuth);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  data.sort((a, b) => b.usersLiked.length - a.usersLiked.length);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/projects/getAll");
        setData(response.data.data.projects);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex-col items-center pb-[265px] pt-[119px]">
      <h2 className="text-center text-[#DDE6ED] font-bold text-[40px] mx-auto mb-[31px]">
        Project Gallery
      </h2>
      <div className="flex justify-end">
        {isAuth ? (
          <Link to="/create-project">
            <button className="font-thin text-2xl leading-7 text-white border border-solid border-blue-200 rounded-[35px] w-64 h-16 mb-[29px] hover:bg-[#dfe6ed] hover:text-[#27374d] hover:border-[#dfe6ed] transition-colors duration-300">
              Add Project
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      {isLoading ? (
        <div className="flex justify-center mt-8">
          <Spinner color="#ffffff" size={30} loading={true} />
        </div>
      ) : (
        <>
          {data.length === 0 ? (
            <p className="text-center mt-[100px] text-3xl text-bold bg-[#5C469C] rounded-[26px] py-9">
              OOPS, IT SEEMS LIKE THERE ARE NO PROJECTS YET
            </p> // Alternative content when data is empty
          ) : (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 gap-y-[56px]">
              {data.map((el) => (
                <ProjectCard key={el.id} data={el} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectGallery;
