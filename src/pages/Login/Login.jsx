import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";

const Login = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F5F5F5";
    // Clean up the effect
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="">
      <div className="h-[298px] bg-[#27374D] w-screen "></div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
