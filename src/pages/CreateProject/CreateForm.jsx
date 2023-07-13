import React, { useState } from "react";
import TechStack from "./TechStack";
import axios from "./../../axios.js";
import ErrorPopUp from "../../components/ui/ErrorPopUp";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    githubLink: "",
    description: "",
    techStack: [],
    positionsNeeded: [],
  });

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    if (name === "description" && value.length > 700) {
      return; // Prevent typing beyond 700 characters
    }
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    axios
      .post("/api/v1/projects/create", formValues)
      .then((res) => {
        window.location = "/projects";
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const handleRelocate = (e) => {
    e.preventDefault();
    navigate("/projects");
  };

  const getStack = (stack, variant) => {
    if (variant === 1) {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        techStack: stack,
      }));
    } else {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        positionsNeeded: stack,
      }));
    }
  };

  const handleTryAgain = () => {
    setError("");
  };

  const remainingCharacters = formValues.description.length;
  return (
    <>
      {error !== "" ? (
        <ErrorPopUp error={error} handleTryAgain={handleTryAgain} />
      ) : (
        ""
      )}
      <div
        className={`mt-[136px] mb-[370px] w-[100%] flex flex-col items-center justify-center ${
          error !== "" ? "hidden" : "flex"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="w-[100%] flex flex-col gap-y-[30px]"
        >
          <div className="flex flex-col items-center">
          <label className= "md:w-[58%]" htmlFor="name">Repository Name</label>
          <input
            type="text"
            name="name"
            placeholder="Repo Name"
            value={formValues.repoName}
            onChange={handleInputChange}
            className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto outline-none focus:ring-0 focus:border-blue-200"
          />
          </div>

          <div className="flex flex-col items-center">
          <label className= "md:w-[58%]" htmlFor="name">GitHub Link</label>
          <input
            type="text"
            name="githubLink"
            placeholder="GitHub Link"
            value={formValues.githubLink}
            onChange={handleInputChange}
            className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto outline-none focus:ring-0 focus:border-blue-200"
          />
          </div>

          <div className="flex flex-col items-center">
          <label className= "md:w-[58%]" htmlFor="name">Description</label>
          <div className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto relative">
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={formValues.description}
              onChange={handleInputChange}
              className="resize-none w-[100%] h-[150px] pl-[25px] pt-[15px] border border-gray-200 rounded-[30px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto outline-none focus:ring-0 focus:border-blue-200"
              maxLength={700}
            />
            </div>

            <p className="absolute top-2 right-10 text-[14px] text-[#EEEEEE] ">
              {remainingCharacters + " /" + "700"}
            </p>
            </div>
            <div>
              <label className="flex flex-col items-left md:w-[58%] w-[100%] sm:w-[80%] mx-auto relative">Tech Stack</label>
          <TechStack getStack={getStack} variant={1} />
          </div>
          <div>
          <label className="flex flex-col items-left md:w-[58%] w-[100%] sm:w-[80%] mx-auto relative">Developers Needed</label>
          <TechStack getStack={getStack} variant={2} />
          </div>
          
          <div className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] mx-auto flex items-center justify-center gap-8">
            <button
              type="submit"
              className="w-[170px] h-[38px] flex items-center justify-center bg-[#5C469C] rounded-[29px] text-[20px] text-[#EEEEEE] hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              Save
            </button>
            <button
              onClick={handleRelocate}
              className="w-[170px] h-[38px] flex items-center justify-center bg-transparent border border-gray-400 shadow-md rounded-[29px] text-[20px] text-[#EEEEEE] hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateForm;
