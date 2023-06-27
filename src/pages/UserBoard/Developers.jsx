import Deverloper from "./Deverloper";
import { useState, useEffect } from "react";
import axios from "./../../axios.js";
import Spinner from "./../../components/ui/Spinner";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import DeveloperSkeleton from "./DeveloperSkeleton";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';

const Developers = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastDeveloper = 12 * currentPage;
  const indexOfFirstDeveloper = indexOfLastDeveloper - 12;
  const pageData = data.slice(indexOfFirstDeveloper, indexOfLastDeveloper);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/users/allusers`);
        setData(response.data.data.users);
        console.log(response.data.data.users);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const changePage = (event, page) => {
    setCurrentPage(page);
  }

  if (isLoading) {
    return (
      <div className="mt-[98px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-[45px] gap-x-[19px]">
        <DeveloperSkeleton cards={6} />;
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <p className="text-center mt-[100px] text-3xl text-bold bg-[#5C469C] rounded-[26px] py-9">
        OOPS, IT SEEMS LIKE THERE ARE NO PROJECTS YET
      </p>
    );
  }
  return (
    <div>
      <div className="mt-[98px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-[45px] gap-x-[19px]">
        {pageData.map((el) => {
          return (
            // <Link to={`/account/${el._id}`}>
            //   <Deverloper key={el.id} data={el} />
            // </Link>
            <Deverloper key={el.id} data={el} />
          );
        })}
        {console.log(pageData.length)}
        </div>
      <div style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
        <Pagination count={Math.ceil(data.length / 12)} color="secondary"
        onChange={changePage} />
      </div>
    </div>
  );
};

export default Developers;