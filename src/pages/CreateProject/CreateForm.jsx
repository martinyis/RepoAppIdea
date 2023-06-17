import React, { useState } from "react";
import TechItem from "./TechItem";
import TechStack from "./TechStack";

const CreateForm = () => {
  const [formValues, setFormValues] = useState({
    repoName: "",
    position: "",
    githubLink: "",
    description: "",
    techStack: [],
  });

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(formValues);
  };

  const getStack = (stack) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      techStack: stack,
    }));
  };
  return (
    <div className="mt-[136px] mb-[370px] w-[100%] flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] flex flex-col gap-y-[30px]"
      >
        <input
          type="text"
          name="repoName"
          placeholder="Repo Name"
          value={formValues.repoName}
          onChange={handleInputChange}
          className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formValues.position}
          onChange={handleInputChange}
          className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <input
          type="text"
          name="githubLink"
          placeholder="GitHub Link"
          value={formValues.githubLink}
          onChange={handleInputChange}
          className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={formValues.description}
          onChange={handleInputChange}
          className="md:w-[60%] w-[100%] sm:w-[80%] h-[150px] pl-[25px] pt-[15px] border border-gray-200 rounded-[30px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <TechStack getStack={getStack} />
        <button type="submit">Button</button>
      </form>
    </div>
  );
};

export default CreateForm;
