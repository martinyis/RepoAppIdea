import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Main from "./Main";

const UserBoard = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 relative pb-[300px]">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default UserBoard;
