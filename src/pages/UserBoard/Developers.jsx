import Deverloper from "./Deverloper";
import { useState, useEffect } from "react";
import axios from "./../../axios.js";
import Spinner from "./../../components/ui/Spinner";
const Developers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditable, setIsEditable] = useState(false);

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

  return (
    <div className="mt-[98px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-[45px] gap-x-[19px]">
      {data.map((el) => {
        return <Deverloper key={el.id} data={el} />;
      })}
    </div>
  );
};

export default Developers;
