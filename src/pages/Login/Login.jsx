import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectError, fetchLogin } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import GoogleLog from "./GoogleLog";
const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const err = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.backgroundColor = "#DDE6ED";
    // Clean up the effect
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await dispatch(fetchLogin(formData));
    console.log(data);
    if (data.payload !== undefined) {
      localStorage.setItem("id", data.payload.data.user._id);
      localStorage.setItem("token", `Bearer ${data.payload.token}`);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

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
          onSubmit={handleSubmit}
        >
          <input
            className="border h-10 pl-[12px] border-solid border-gray-300 rounded-md w-full font-openSans font-normal font-400 text-sm leading-5 text-gray-400"
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            className="border h-10 pl-[12px] border-solid border-gray-300 rounded-md w-full font-openSans font-normal font-400 text-sm leading-5 text-gray-400"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleInputChange}
          />

          <button className="h-10 bg-gray-800 rounded-md font-semibold text-sm text-white w-[100%]">
            Login
          </button>
          <GoogleLog text={"Login with Google"} />
        </form>
        <div className="mb-[32px] flex flex-col items-center">
          <p className="text-sm text-black font-open-sans text-center mb-[32px] font-bold">
            Don't have an account?{" "}
            <span className="font-bold boldFont">
              <Link to="/signup">Create an account</Link>
            </span>
          </p>
          <p className="text-[#FF0000] text-sm text-center max-w-[442px] px-[51px]">
            {err}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
