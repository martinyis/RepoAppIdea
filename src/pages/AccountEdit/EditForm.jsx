import React, { useEffect, useState } from "react";
import axios from "./../../axios.js";
import { useDispatch } from "react-redux";
import { fetchUserById } from "../../redux/slices/user.js";
import ErrorPopUp from "../../components/ui/ErrorPopUp.jsx";
import TechStack from "../CreateProject/TechStack.jsx";
const CreateForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    fullname: "",
    position: "",
    avatarUrl: "",
    githubLink: "",
    linkedinLink: "",
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
  const handleRelocate = (e) => {
    e.preventDefault();
    window.history.back();
  };
  const handleTryAgain = () => {
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .patch("/api/v1/users/edit", formValues)
      .then((res) => {
        console.log(res);
        const id = localStorage.getItem("id");
        window.location = `/account/${id}`;
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  const loadUser = async () => {
    const id = localStorage.getItem("id");
    const data = await dispatch(fetchUserById(id));
    setFormValues(data.payload.data.user);
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
  useEffect(() => {
    loadUser();
  }, []);
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
          <div className="flex flex-col">
            <label
              htmlFor="fullname"
              className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto text-[14px] pl-[25px] pb-1"
            >
              {" "}
              Provide your Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formValues.fullname}
              onChange={handleInputChange}
              className="text-[#DDE6ED] outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="position"
              className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto text-[14px] pl-[25px] pb-1"
            >
              {" "}
              Provide your Position
            </label>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formValues.position}
              onChange={handleInputChange}
              className="text-[#DDE6ED] outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="avatarUrl"
              className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto text-[14px] pl-[25px] pb-1"
            >
              {" "}
              Provide your Avatar URL
            </label>
            <input
              type="text"
              name="avatarUrl"
              placeholder="Avatar Url"
              value={formValues.avatarUrl}
              onChange={handleInputChange}
              className="text-[#DDE6ED] outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="linkedinLink"
              className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto text-[14px] pl-[25px] pb-1"
            >
              {" "}
              Provide your LinkedIn Link
            </label>
            <input
              type="text"
              name="linkedinLink"
              placeholder="LinkedIn Link"
              value={formValues.linkedinLink}
              onChange={handleInputChange}
              className="text-[#DDE6ED] outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="githubLink"
              className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto text-[14px] pl-[25px] pb-1"
            >
              {" "}
              Provide your Github Link
            </label>
            <input
              type="text"
              name="githubLink"
              placeholder="Github Link"
              value={formValues.githubLink}
              onChange={handleInputChange}
              className="text-[#DDE6ED] outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
            />
          </div>
          <div className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto relative">
            <label
              htmlFor="description"
              className="md:w-[60%] w-[100%] sm:w-[80%] mx-auto text-[14px] pl-[25px] pb-1"
            >
              {" "}
              Provide your Description
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={formValues.description}
              onChange={handleInputChange}
              className="text-[#DDE6ED] resize-none w-[100%] h-[150px] pl-[25px] pt-[15px] border border-gray-200 rounded-[30px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto outline-none focus:ring-0 focus:border-blue-200"
              maxLength={700}
            />
            <p className="absolute top-2 right-10 text-[14px] text-[#EEEEEE] ">
              {remainingCharacters + " /" + "700"}
            </p>
          </div>
          <TechStack getStack={getStack} variant={1} />
          <div className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] mx-auto flex items-center justify-center gap-4">
            <button
              type="submit"
              className="w-[170px] h-[38px] flex items-center justify-center bg-[#5C469C] rounded-[29px] text-[20px] text-[#EEEEEE]"
            >
              Save
            </button>
            <button
              onClick={handleRelocate}
              className="w-[170px] h-[38px] flex items-center justify-center bg-transparent border border-gray-400 shadow-md rounded-[29px] text-[20px] text-[#EEEEEE]"
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
