import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";
const TechStack = (props) => {
  const { getStack } = props;
  const [tech, setTech] = useState([]);
  const [lastInputValue, setLastInputValue] = useState("");
  const handleStackSubmit = function (e) {
    e.preventDefault();
    console.log("stack");
    if (lastInputValue.length !== 0) {
      setTech([...tech, lastInputValue]);
      setLastInputValue("");
    }
  };
  const handleLastInputChange = function (e) {
    setLastInputValue(e.target.value);
  };
  const deleteTech = (index) => {
    let newTech = [...tech];
    newTech.splice(index, 1);
    setTech(newTech);
  };

  useEffect(() => {
    getStack(tech);
  }, [tech]);
  return (
    <div>
      <form
        action=""
        onSubmit={handleStackSubmit}
        className="flex md:w-[60%] w-[100%] sm:w-[80%] mx-auto items-center justify-start gap-x-[20px] mb-[20px]"
      >
        <input
          type="text"
          placeholder="Tech Stack"
          value={lastInputValue}
          onChange={handleLastInputChange}
          className="h-[36px] w-[80%] flex items-center pl-[25px] border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent"
        />
        <button
          type="submit"
          onClick={handleStackSubmit}
          className="h-[36px] w-[20%] flex items-center justify-center border border-gray-200 rounded-[68px] text-[14px] bg-blue-200 bg-opacity-50 bg-transparent"
        >
          Add
        </button>
      </form>
      <div className="w-[60%] mx-auto flex gap-4 flex-wrap">
        {tech.map((item, index) => {
          return (
            <TechItem
              key={index}
              id={index}
              name={item}
              deleteTech={deleteTech}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
