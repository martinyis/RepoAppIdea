import { useState } from "react";
import DeleteIcon from "./../../assets/icons/delete-icon.png";
import EditIcon from "./../../assets/icons/edit-icon.png";
import axios from "./../../axios.js";
const EditDelete = (props) => {
  const { user, project } = props;
  const id = localStorage.getItem("id");
  const handleDelete = () => {
    axios
      .delete(`/api/v1/projects/${project}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };
  if (user !== id) {
    return <></>;
  }
  return (
    <div className="flex gap-2">
      <div
        onClick={handleDelete}
        className="flex items-center justify-between px-[14px] h-[26px] w-[100px] rounded-[26px] bg-[#FF3232] hover:scale-125 transition-transform duration-300 ease-in-out"
      >
        <img src={DeleteIcon} alt="" />
        <p>Delete</p>
      </div>
      {/* <div className="flex items-center justify-between px-[14px] h-[26px] w-[100px] rounded-[26px] bg-[#27374D]">
        <img src={EditIcon} alt="" />
        <p>Edit</p>
      </div> */}
    </div>
  );
};

export default EditDelete;
