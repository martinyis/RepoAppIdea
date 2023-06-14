import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const UserBoard = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6">
      <NavBar />
      <h1>UserBoard</h1>
      <Footer />
    </div>
  );
};

export default UserBoard;
