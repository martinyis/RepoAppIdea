import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#DDE6ED";
    // Clean up the effect
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="">
      <div className="h-[298px] bg-[#27374D] w-screen "></div>
      <div className="md:w-[483px] w-[65%] bg-white absolute top-0 left-0 right-0 mx-auto md:mt-[222px] mt-[122px] rounded-[24px]">
        <p className="text-[#344767] font-bold text-base mt-[32px] text-center mb-[24px]">
          Log in
        </p>
        <form
          className="flex flex-col gap-4 items-center justify-center mx-auto text-center max-w-[442px] px-[30px] mb-[24px]"
          action=""
        >
          <input
            className="border h-10 pl-[12px] border-solid border-gray-300 rounded-md w-full font-openSans font-normal font-400 text-sm leading-5 text-gray-400"
            type="text"
            placeholder="Email"
          />
          <input
            className="border h-10 pl-[12px] border-solid border-gray-300 rounded-md w-full font-openSans font-normal font-400 text-sm leading-5 text-gray-400"
            type="text"
            placeholder="Password"
          />

          <button className="h-10 bg-gray-800 rounded-md font-semibold text-sm text-white w-[100%]">
            Login
          </button>
        </form>
        <p className="text-sm text-black font-open-sans text-center mb-[58px] font-bold">
          Don't have an account?{" "}
          <span className="font-bold boldFont">
            <Link to="/signup">Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
