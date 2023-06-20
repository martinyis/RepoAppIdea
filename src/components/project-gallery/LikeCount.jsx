import star from "./../../assets/icons/star.png";
import fillStar from "./../../assets/icons/fill-star.png";
import { useState } from "react";
import axios from "./../../axios.js";
const LikeCount = (props) => {
  const { data } = props;
  const [stared, setStared] = useState(
    data.usersLiked.includes(localStorage.getItem("id"))
  );
  const newStar = stared ? fillStar : star;
  const handleStar = () => {
    setStared(!stared);
    axios
      .patch(`/api/v1/projects/like/${data._id}`)
      .then((res) => {
        console.log(res.data.data.liked);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };
  console.log(data);
  return (
    <div className="flex gap-x-2 items-center justify-center">
      <img
        onClick={handleStar}
        className="mt-[-3px] cursor-pointer"
        src={newStar}
        alt=""
      />
      <p className="text-[#DDE6ED] text-2xl">{data.usersLiked.length}</p>
    </div>
  );
};

export default LikeCount;
