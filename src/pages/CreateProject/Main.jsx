import React from "react";
import CreateForm from "./CreateForm";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-[#DDE6ED] font-bold text-[40px] mx-auto mb-[31px] mt-[144px]">
        Create/Edit Your Project
      </h2>
      <CreateForm />
    </div>
  );
};

export default Main;
