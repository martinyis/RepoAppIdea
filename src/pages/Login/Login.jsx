import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import {Link} from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F5F5F5";
    // Clean up the effect
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
      <div className="flex items-center justify-center min-h-screen bg-[#DDE6ED] font-sans text-[#344767]">
        <div className="absolute top-0 h-[298px] bg-[#27374D] w-screen"></div>
        <div
            className="relative flex flex-col bg-white shadow-2xl rounded-xl w-11/12 md:w-[600px]"
        >
          <div className="p-8 md:p-14 w-full">
            <div className="flex flex-col gap-7 text-md">
              <h1 className="mb-5 text-center text-xl">Log in</h1>
              <input
                  className="w-full p-3 border border-gray-300 rounded-xl
                      placeholder:font-light placeholder:text-gray-300" placeholder="Email"
              />
              <input
                  className="w-full p-3 border border-gray-300 rounded-xl
                      placeholder:font-light placeholder:text-gray-300" placeholder="Password" type="password"
              />
              <button
                  className="w-full p-3 text-white rounded-xl px-9 bg-[#343A40]"
              >
                Login
              </button>
              <p className="p-4 text-center text-black text-xl">
                <span className={"mr-2"}>Don't have an account?</span>
                <Link to="/signup">
                  <strong>Create an Account</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
