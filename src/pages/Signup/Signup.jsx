import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";
import {
  fetchRegister,
  selectIsAuth,
  selectError,
  selectLoading,
} from "../../redux/slices/auth";
import validator from "validator";
import Spinner from "../../components/ui/Spinner";

const Signup = () => {
  const isAuth = useSelector(selectIsAuth);
  const err = useSelector(selectError);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const isDisabled =
    formData.username.length === 0 ||
    formData.email === "" ||
    formData.password === ""
      ? true
      : false;
  useEffect(() => {
    document.body.style.backgroundColor = "#DDE6ED";
    // Clean up the effect
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = await dispatch(fetchRegister(formData));
    console.log(data);
    if (data.payload !== undefined) {
      localStorage.setItem("id", data.payload.data.user._id);
      localStorage.setItem("token", `Bearer ${data.payload.token}`);
    }
    setLoading(false);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const usernameError = !isDisabled && formData.username.length < 5;
  const emailError = !isDisabled && !validator.isEmail(formData.email);
  const passwordError = !isDisabled && formData.password.length < 8;
  return (
    <div className="">
      <div className="h-[298px] bg-[#27374D] w-screen "></div>
      <div className="md:w-[483px] w-[65%] bg-white absolute top-0 left-0 right-0 mx-auto md:mt-[222px] mt-[122px] rounded-[24px]">
        <p className="text-[#344767] font-bold text-base mt-[32px] text-center mb-[24px]">
          Sign up for your account
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center mx-auto text-center max-w-[442px] px-[30px] mb-[24px]"
          action=""
        >
          <input
            className="border h-10 pl-[12px] border-solid border-gray-300 rounded-md w-full font-openSans font-normal font-400 text-sm leading-5 text-gray-400"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
          {usernameError && (
            <p className="text-[#FF0000] max-w-[442px]">
              Username should have at least 5 characters
            </p>
          )}
          <input
            className="border h-10 pl-[12px] border-solid border-gray-300 rounded-md w-full font-openSans font-normal font-400 text-sm leading-5 text-gray-400"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {emailError && (
            <p className="text-[#FF0000] max-w-[442px]">Email is not valid</p>
          )}
          <input
            className="border h-10 pl-[12px] border-solid border-gray-300 rounded-md w-full font-openSans font-normal font-400 text-sm leading-5 text-gray-400"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {passwordError && (
            <p className="text-[#FF0000] max-w-[442px] text-left">
              Password should have at least 8 characters
            </p>
          )}
          <button
            disabled={isDisabled}
            type="submit"
            className={`h-10 rounded-md font-semibold text-sm text-white w-[100%] ${
              !isDisabled ? "bg-gray-800" : "bg-slate-400"
            }`}
          >
            {loading && <Spinner color="#344767" size={25} loading={true} />}
            {!loading && "Sign up"}
          </button>
        </form>
        <div className="mb-[58px] ">
          <p className="text-sm text-black font-open-sans text-center font-bold mb-[10px]">
            Already have an account?{" "}
            <span className="font-bold boldFont">
              <Link to="/login">Log In</Link>
            </span>
          </p>
          <p className="text-[#FF0000] max-w-[442px] text-left px-[51px]">
            {err}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
