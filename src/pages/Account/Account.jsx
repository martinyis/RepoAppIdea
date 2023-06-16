import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "./../../axios.js";
import Spinner from "./../../components/ui/Spinner";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Main from "./Main.jsx";
const Account = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/users/${id}`);
        setData(response.data.data.user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (data._id === userId) {
      setIsEditable(true);
    }
  }, [data, id]);

  return (
    <div className="flex flex-col min-h-screen px-6 max-w-[1440px] mx-auto">
      <NavBar />
      {isLoading ? (
        <div className="flex-grow top-[350px] absolute left-1/2 transform -translate-x-1/2">
          <Spinner color="#ffffff" size={25} loading={true} />
        </div>
      ) : data._id === id ? (
        <Main data={data} isEditable={isEditable} id={id} />
      ) : (
        <p className="text-white text-center mt-6">
          Failed to load. Please try again later.
        </p>
      )}
      <div className={`${isLoading ? "mt-[500px]" : ""}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
