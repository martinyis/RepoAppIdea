import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "./../../axios.js";
import { selectIsAuth } from "../../redux/slices/auth";
import starIcon from "../../assets/icons/star.png";
import fillStarIcon from "../../assets/icons/fill-star.png";

const LikeCount = ({ data }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    setIsLiked(data.usersLiked.includes(localStorage.getItem("id")));
    setLikeCount(data.usersLiked.length);
  }, [data.usersLiked]);

  const handleLike = () => {
    if (!isAuth) return;

    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));

    axios
      .patch(`/api/v1/projects/like/${data._id}`)
      .then((res) => {
        console.log(res.data.data.liked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const starIconSrc = isLiked ? fillStarIcon : starIcon;

  return (
    <div className="flex gap-x-2 items-center justify-center">
      <img
        onClick={handleLike}
        className="mt-[-3px] cursor-pointer"
        src={starIconSrc}
        alt=""
      />
      <p className="text-[#DDE6ED] text-2xl">{likeCount}</p>
    </div>
  );
};

export default LikeCount;
