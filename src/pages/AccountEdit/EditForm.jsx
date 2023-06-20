import React, { useEffect, useState } from "react";
import axios from "./../../axios.js";
import { useDispatch } from "react-redux";
import { fetchUserById } from "../../redux/slices/user.js";
import ErrorPopUp from "../../components/ui/ErrorPopUp.jsx";
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
  useEffect(() => {
    loadUser();
  }, []);
  if (error !== "") {
    return (
      <div className="ml-[150px]">
        <ErrorPopUp error={error} />
      </div>
    );
  }
  return (
    <div className="mt-[136px] mb-[370px] w-[100%] flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] flex flex-col gap-y-[30px]"
      >
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formValues.fullname}
          onChange={handleInputChange}
          className="outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formValues.position}
          onChange={handleInputChange}
          className="outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <input
          type="text"
          name="avatarUrl"
          placeholder="Avatar Url"
          value={formValues.avatarUrl}
          onChange={handleInputChange}
          className="outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <input
          type="text"
          name="linkedinLink"
          placeholder="LinkedIn Link"
          value={formValues.linkedinLink}
          onChange={handleInputChange}
          className="outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <input
          type="text"
          name="githubLink"
          placeholder="Github Link"
          value={formValues.githubLink}
          onChange={handleInputChange}
          className="outline-none focus:ring-0 focus:border-blue-200 md:w-[60%] w-[100%] sm:w-[80%] h-[36px] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={formValues.description}
          onChange={handleInputChange}
          className="outline-none focus:ring-0 focus:border-blue-200 resize-none md:w-[60%] w-[100%] sm:w-[80%] h-[150px] pl-[25px] pt-[15px] border border-gray-200 rounded-[30px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent mx-auto"
        />
        <div className="md:w-[60%] w-[100%] sm:w-[80%] h-[36px] mx-auto flex items-center justify-center gap-4">
          <button
            type="submit"
            className="w-[170px] h-[38px] flex items-center justify-center bg-[#5C469C] rounded-[29px] text-[20px] text-[##EEEEEE]"
          >
            Save
          </button>
          <button
            onClick={handleRelocate}
            className="w-[170px] h-[38px] flex items-center justify-center bg-transparent border border-gray-400 shadow-md rounded-[29px] text-[20px] text-[##EEEEEE]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
